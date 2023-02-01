<template>
  <div class="search">
    <h1 class="pa-5">Započnimo !</h1>
    <h2 class="pa-5">Pretraga nagradnih igara</h2>
    <v-container v-if=logged style="background-color:teal"><h3 style="color:white" align="right">Tokena: {{this.$store.state.user.tokens}}</h3></v-container>
    <v-container style="background-color:teal;color:white"></v-container>
    <v-container>
    <v-row>
      <v-col xs="12" sm="6" md="6" lg="4" xl="3" v-for="item in comp" :key="item.id">
        <pogledaj-igru :tip="item.type" :naziv="item.name" :organizator="item.organiser" :tokens="item.tokens"
        :nagrada="item.prize" :vrijednost="item.prize_value" :objavljena="item.created_at" :zavrsava="item.finishes_at" :pobjednik="item.winner" :id="item.id"></pogledaj-igru>
                </v-col>
              </v-row></v-container>
  </div>
</template>


<script>
import Api from "@/plugins/Api";
// @ is an alias to /src
import pogledajIgru from '@/components/pogledajIgru.vue'

export default {
  data: () => ({
    comp:[],
    logged:localStorage.getItem("app_token"),
  }),
  name: 'HomeView',
  components: {
    pogledajIgru
  },
  mounted:function(){
        Api.get('/games').then(response => {
        //To show all games
          //console.log(response.data)
          this.comp=response.data
      })
      }
    
}
</script>
