<template>
  <div class="home">
    <h1 class="pa-14" v-if=logged>Već ste ulogirani!</h1>
    <h4 class="pa-0 mb-0" v-if=logged>Kao korisnik:</h4>
    <h2 class="pa-14" v-if=!logged>Login</h2>
    <v-form v-if=!logged @submit.prevent="login" style="background-color:lightseagreen;color:#000000;">
    <v-container>
      <v-row>
        <v-col 
          cols="12"
          sm="12"
          md="6"
        >
          <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="12"
          md="6"
        >
           <v-text-field
              v-model="form.password"
              label="Lozinka"
              type="password"
              required
          ></v-text-field>
        </v-col>
        <v-col><v-btn color="teal" type="submit" align="center" class="text-center ma-2"
      dark
    >
      Potvrdi
    </v-btn>
        </v-col></v-row></v-container></v-form>

      <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-if=!logged v-slot:activator="{ on, attrs }">
        <v-row><v-col>
          <p class="ma-6">Nemaš račun? </p><v-btn class="ma-3"
          color="teal"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Registriraj se!
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
          <v-toolbar-title>Registriraj novog korisnika</v-toolbar-title>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Korisnički podaci:</v-subheader>
          <v-form @submit.prevent="register">
          <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="6"
        >
           <v-text-field
              v-model="form2.name"
              label="Korisničko ime"
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
              v-model="form2.email"
              label="Email"
              type="email"
              required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="12"
          md="6"
        >
           <v-text-field
              v-model="form2.password"
              label="Lozinka"
              type="password"
              required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
        >
           <v-text-field
              v-model="form2.password_confirmation"
              label="Ponovi lozinku ovdje"
              type="password"
              required
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
          sm="12"
          md="6">
          <v-radio-group v-model="form2.user_role">
      <v-radio
        label="Sudionik"
        value="1"
      ></v-radio>
      <v-radio
        label="Organizator"
        value="2"
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
          <v-subheader>Korisničko ime i e-mail moraju biti jedinstveni.</v-subheader>
        </v-list>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import Api from "@/plugins/Api";
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
      return {
        form: {
        email: null,
        password: null,
        },
        form2: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        user_role: "1",
        },
        logged:localStorage.getItem("app_token"),
        dialog: false,}
    },
    methods: {
    login() {
      //console.log(JSON.stringify(this.form));
      Api.post('/auth/login', JSON.stringify(this.form)).then(response => {
        if (response.status === 200) {
          // Add token to local storage
           //console.log("usao u funckiju");
          localStorage.setItem("app_token", response.data)
          //console.log(localStorage)
          // Go to home
          this.$router.go(0)
          //this.$router.push('/')
        }
      })
    },
    register() {
      //console.log(JSON.stringify(this.form2));
      Api.post('/auth/register', JSON.stringify(this.form2)).then(response => {
        if (response.status === 201) {
           console.log("response.status")
          // Go to home
          this.$router.go(0)
          //this.$router.push('/')
        }
      })
    },
    },
  name: 'HomeView',
  components: {
    
  }
}
</script>
