<template>
  <v-container class="pa-0 ma-0">
    <v-card 
    dark
    class="mx-auto pa-0"
    max-width="2000"
    outlined
  >
    <v-list-item>
      <v-list-item-content class="ma-0 pa-0">
        <div style="color:teal" align="left" class="text-overline">
          Korisnik
        </div>
        <v-row><v-col cols="5">
        <v-list-item-title class="text-h5 ma-0 pa-0">
          {{naziv}}
        </v-list-item-title></v-col><v-col cols="4">
    <v-list-item>
      <v-list-item-content class="ma-0 pa-0">
        <v-row><v-col cols="12">
        <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-row><v-col>
          <v-btn @click=initializeUsersData() class="ma-0"
          outlined color="white"
          v-bind="attrs"
          v-on="on"
        >
          UREDI >
        </v-btn></v-col></v-row>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="teal"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Uredi korisnika</v-toolbar-title>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-form @submit.prevent="updateUser">
          <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="6"
        >
           <v-text-field
              v-model="form.name"
              label="Ime korisnika"
              type="name"
              required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
        >
           <v-text-field
              v-model="form.tokens"
              label="Broj tokena na računu:"
              type="name"
              required
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
          sm="12"
          md="6">
          <v-radio-group v-model="form.user_role">
      <v-radio
        label="Sudionik"
        value="1"
      ></v-radio>
      <v-radio
        label="Organizator"
        value="2"
      ></v-radio>
      <v-radio
        label="Admin"
        value="3"
      ></v-radio>
    </v-radio-group>
        </v-col>
        <v-col><v-btn type="submit" align="center" class="text-center ma-2"
      dark
    >
      Potvrdi
    </v-btn>
        </v-col></v-row></v-container></v-form></v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Korisničko ime treba biti jedinstveno.</v-subheader>
        </v-list>
      </v-card>
    </v-dialog></v-col></v-row>
        <br>
      </v-list-item-content>
    </v-list-item>
    </v-col><v-col cols="3">
      <v-btn @click=deleteUser() class="pa-0 ma-0" outlined color="white">X</v-btn>
      </v-col></v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  <v-snackbar
      color="warning"
      v-model="snack"
      :timeout="timeout"
    >
      <h3 class="pa-7" align="center">Potrebno je prije brisanja ukloniti sve prijave odabranog korisnika na igre, te sve njegove igre ukoliko je organizator!</h3>
    </v-snackbar>
  </v-container>
</template>

<script>
import Api from "@/plugins/Api";
  export default {
    name: 'pogledajKorisnike',
    props: ['naziv','id'],

    data: () => ({
      dialog:false,
      snack:false,
      form: {
        name: null,
        user_role:"1",
        tokens:null,
        },
    }),
    methods:{
      initializeUsersData(){
        Api.get('/users/' + this.id).then(response => {
          this.form.name=response.data.name;
          this.form.user_role=response.data.user_role;
          this.form.tokens=response.data.tokens;
      })
      },
      deleteUser(){
        Api.delete('/users/' + this.id).then(response =>{
          if (response.status === 200){
            this.$router.go(0)
          }
        })
        this.snack=true;
      },
      updateUser(){
        Api.put('/users/' + this.id, JSON.stringify(this.form)).then(response => {
        if (response.status === 200) {
           console.log("response.status")
          // Go to home
          this.$router.go(0)
          //this.$router.push('/')
        }
      })
      }
    },
    mounted () {
    },
  }
</script>
