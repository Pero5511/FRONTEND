<template>
  <div class="search"><v-row><v-col>
    <h1 class="pa-5">DASHBOARD</h1></v-col></v-row>
    <v-container v-if=logged style="background-color:teal"><h3 style="color:white" align="right">Tokena: {{this.$store.state.user.tokens}}</h3></v-container>
    <v-container v-if=canUsers style="background-color:teal"><h3 style="color:white" align="left">Korisnici</h3></v-container>
    <v-container v-if=canUsers>
    <v-row>
      <v-col cols="12" v-for="item in users" :key="item.id">
        <a><pregledaj-korisnike class="pa-0 ma-0" :naziv="item.name" :id="item.id"></pregledaj-korisnike></a>
                </v-col>
              </v-row></v-container>
    <br><br>
    <v-container v-if=canSubmits style="background-color:teal"><h3 style="color:white" align="left">Prijave</h3></v-container>
    <v-container v-if=canSubmits>
    <v-row>
      <v-col cols="12" v-for="item in submits" :key="item.id">
        <a><pregledaj-prijave class="pa-0 ma-0" :idprijave="item.id" :prijavitelj="item.submitter" :idigre="item.game"></pregledaj-prijave></a>
                </v-col>
              </v-row></v-container>
    <br><br>
    <v-container v-if=canGames style="background-color:teal"><h3 style="color:white" align="left">Igre</h3></v-container>
    <v-container v-if=canGames>
    <v-row>
      <v-col cols="12" v-for="item in games" :key="item.id">
        <a><pregledaj-igre class="pa-0 ma-0" :organizator="item.organiser" :idigre="item.id"></pregledaj-igre></a>
                </v-col>
              </v-row></v-container>
    <h3 v-if=!logged>Niste prijavljeni. </h3><br>
    <v-btn v-if=!logged to=/logreg outlined color=white>Prijava</v-btn>
    <v-container v-if=canGames>
      <v-card dark
    class="mx-auto pa-0"
    max-width="200"
    outlined
  >
    <v-list-item style="color:teal">
      <v-list-item-content class="ma-0 pa-0">
        <div style="color:white" align="left" class="text-overline">
          Stvori novu igru
        </div>
        <v-row><v-col cols="12">
        <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-row><v-col>
          <v-btn @click=initializeusersid() class="ma-3"
          outlined color="white"
          v-bind="attrs"
          v-on="on"
        >
          KREIRAJ >
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
          <v-toolbar-title>Stvori novu nagradnu igru/kupon</v-toolbar-title>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>ID trenutnog korisnika: {{this.form.organiser}}</v-subheader>
          <v-form @submit.prevent="createGame">
          <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="6"
        >
           <v-text-field
              v-model="form.name"
              label="Ime igre"
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
              v-model="form.prize"
              label="Naziv nagrade"
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
              v-model="form.prize_value"
              label="Vrijednost nagrade"
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
              v-model="form.finishes_at"
              label="YYYY-MM-DD HH:MM:SS"
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
              label="Broj tokena potrebnih za sudjelovanje"
              type="name"
              required
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
          sm="12"
          md="6">
          <v-radio-group v-model="form.type">
      <v-radio
        label="Igra"
        value="1"
      ></v-radio>
      <v-radio
        label="Kupon"
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
          <v-subheader>Preporučuje se izbjegavanje dupliciranja imena nagradnih igara.</v-subheader>
        </v-list>
      </v-card>
    </v-dialog></v-col></v-row>
        <br>
      </v-list-item-content>
    </v-list-item>
  </v-card>
    </v-container>
    
    <v-snackbar
      color="success"
      v-model="snack"
      :timeout="timeout"
    >
      <h3 class="pa-7" align="center">Uspješno obavljeno!!</h3>
    </v-snackbar>

  

  </div>
</template>



<script>
import Api from "@/plugins/Api";
// @ is an alias to /src
import pregledajKorisnike from '@/components/pregledajKorisnike.vue';
import pregledajPrijave from '@/components/pregledajPrijave.vue';
import PregledajIgre from '@/components/pregledajIgre.vue';

export default {
  data () { return {
    users:[],
    submits:[],
    games:[],
    canUsers:null,
    canGames:null,
    canSubmits:null,
    logged:localStorage.getItem("app_token"),
    form: {
        name: null,
        organiser:null,
        prize:null,
        prize_value:null,
        finishes_at:null,
        tokens:"0",
        type:null,
        },
    dialog:false,
    snack:false,
    timeout:3000,}
  },
  name: 'DashboardView',
  components: {
    pregledajPrijave,
    pregledajKorisnike,
    PregledajIgre,
  },
  mounted:function(){
        Api.get('/users').then(response => {
        //To show all users
          //console.log(response.data)
          this.users=response.data
      })
      Api.get('/submits').then(response => {
        //To show all submits
          //console.log(response.data)
          this.submits=response.data
      })
      Api.get('/games').then(response => {
        //To show all games
          //console.log(response.data)
          this.games=response.data
      })
      if (this.$store.state.user.user_role=="1" && this.logged){
        this.canSubmits=1;
      }
      if (this.$store.state.user.user_role=="2" && this.logged){
        this.canGames=1;
      }
      if (this.$store.state.user.user_role=="3" && this.logged){
        this.canUsers=1;
        this.canGames=1;
        this.canSubmits=1;
      }
      },
  methods:{
      initializeusersid(){
      this.form.organiser=this.$store.state.user.id;
    },
      createGame() {
      console.log(JSON.stringify(this.form));
      Api.post('/games', JSON.stringify(this.form)).then(response => {
        if (response.status === 201) {
          this.snack=true;
          this.$router.go(0)
          //this.$router.push('/')
        }
      })
    },
      kupi: function(argument){
        this.kupljeno.push(argument)
        this.kupnja=true
      },
      novisearch: function(){
        this.dohvatiAPI()
        this.stranica=1
      },
      dohvatiAPI: function(){
        this.axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.pretraga + '&maxResults=12&startIndex=' + this.stranica)
        .then(response=>{
          console.log(response.data.items)
          this.comp=response.data
          this.apiweb=response.data.items
          this.rezult=true
          this.brrez=this.comp.totalItems
        })
      }
    }
}
</script>
