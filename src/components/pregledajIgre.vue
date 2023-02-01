<template>
  <v-container v-if=allow class="pa-0 ma-0">
    <v-card 
    dark
    class="mx-auto pa-0"
    max-width="2000"
    outlined
  >
    <v-list-item>
      <v-list-item-content class="ma-0 pa-0">
        <div style="color:teal" align="left" class="text-overline">
          Igra
        </div>
        <v-row><v-col cols="5">
        <v-list-item-title class="text-h5 ma-0 pa-0">
          {{this.organizatorcomp}}
        </v-list-item-title></v-col>
        <v-col cols="4">
        <v-list-item-title class="text-h5 ma-0 pa-0">
          {{this.idigrecomp}}
        </v-list-item-title></v-col><v-col cols="3">
        <v-btn @click=izbrisiIgru() class="mt-0 pa-1" outlined color="white">UKLONI ></v-btn></v-col></v-row>
        <br>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  <v-snackbar
      color="warning"
      v-model="snack"
      :timeout="timeout"
    >
      <h3 class="pa-7" align="center">Potrebno je prije brisanja ukloniti sve prijave na odabranu igru/kupon!</h3>
    </v-snackbar>
  </v-container>
</template>

<script>
import Api from "@/plugins/Api";
  export default {
    name: 'pregledajPrijave',
    props: ['organizator','idigre'],

    data: () => ({
      organizatorcomp:null,
      idigrecomp:null,
      snack:false,
      allow:null,
    }),
    methods:{
      izbrisiIgru(){
        Api.delete('/games/' + this.idigre).then(response =>{
          if (response.status === 200){
            this.$router.go(0)
          }
        })
        this.snack=true;
      }
    },
    mounted () {
      Api.get('/games/' + this.idigre).then(response => {
          this.idigrecomp=response.data.name
      })
      Api.get('/users/' + this.organizator).then(response => {
          this.organizatorcomp=response.data.name
      })
      if (this.organizator==this.$store.state.user.id){
        this.allow="1";
      }
      if (this.$store.state.user.user_role==3){
        this.allow="1";
      }
    },
  }
</script>
