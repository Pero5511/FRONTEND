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
          Prijava
        </div>
        <v-row><v-col cols="5">
        <v-list-item-title class="text-h5 ma-0 pa-0">
          {{this.submittercomp}}
        </v-list-item-title></v-col>
        <v-col cols="4">
        <v-list-item-title class="text-h5 ma-0 pa-0">
          {{this.idigrecomp}}
        </v-list-item-title></v-col><v-col cols="3">
        <v-btn @click=izbrisiPrijavu() class="mt-0 pa-auto" outlined color="white">UKLONI ></v-btn></v-col></v-row>
        <br>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </v-container>
</template>

<script>
import Api from "@/plugins/Api";
  export default {
    name: 'pregledajPrijave',
    props: ['prijavitelj','idigre','idprijave'],

    data: () => ({
      submittercomp:null,
      idigrecomp:null,
      allow:null,
    }),
    methods:{
      izbrisiPrijavu(){
        //console.log(this.idprijave);
        Api.delete('/submits/' + this.idprijave).then(response =>{
          if (response.status === 200){
            this.$router.go(0)
          }
        })
      }
    },
    mounted () {
      Api.get('/games/' + this.idigre).then(response => {
          this.idigrecomp=response.data.name
      })
      Api.get('/users/' + this.prijavitelj).then(response => {
          this.submittercomp=response.data.name
      })
      if (this.prijavitelj==this.$store.state.user.id){
        this.allow="1";
      }
      if (this.$store.state.user.user_role==3){
        this.allow="1";
      }
    },
  }
</script>
