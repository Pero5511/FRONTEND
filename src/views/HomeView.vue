<template>
  <div class="home">
    <v-row><v-col xs="12" sm="12" md="6" lg="6" xl="6">
    <h1 align="left" class="pa-10">Dobrodošli na E-Sweepstakes !</h1></v-col><v-col xs="12" sm="12" md="6" lg="6" xl="6"><v-btn class="ma-12 mr-1" outlined to=/pretraga color="white">PRETRAŽI</v-btn></v-col>
    </v-row><v-carousel rounded class="mb-10" max-width="300" align="center" :show-arrows="true" cycle interval="4500">
    <a href="https://www.sweepsadvantage.com/"><v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item></a>
  </v-carousel>
  <v-row><v-col align="center">
    <h1 class=" pa-10 pt-1 white--text" align="left">Naslovnica</h1><br><br>
<v-sheet
  rounded
  class="mx-16 pa-10"
  color="teal"
  elevation="1"
  height=auto
  width="auto"
><h2 style="text-align: justify;
  text-justify: inter-word;">Ovo je naslovna stranica projekta iz kolegija Programiranje za Internet kod profesora 
                    dr. sc. Tomislava Volarića doc. Projekt se zove E-Sweepstakes i on je zamišljen kao internetska 
                    stranica na kojoj će se moći igrati i pratiti nagradne igre. Tehnologije koje se koriste 
                    u projektu su:</h2></v-sheet>
    </v-col></v-row>
    <br>
  <v-container><v-row>
    <v-col xs="12" sm="12" md="6" lg="3" xl="3" ><img width="95" src="@/assets/logo.png"></v-col>
    <v-col xs="12" sm="12" md="6" lg="3" xl="3"><h2 class="pa-1 ma-1">Vue.JS</h2></v-col>
    <v-col xs="12" sm="12" md="6" lg="3" xl="3" ><img width="95" src="@/assets/logo.svg"></v-col>
    <v-col xs="12" sm="12" md="6" lg="3" xl="3"><h2 class="pa-1 ma-1">Vuetify</h2></v-col>
    <v-col xs="12" sm="12" md="6" lg="3" xl="3" ><img width="95" src="@/img/laravel.jpeg"></v-col>
    <v-col xs="12" sm="12" md="6" lg="3" xl="3"><h2 class="pa-1 ma-1">Laravel</h2></v-col>
    <v-col xs="12" sm="12" md="6" lg="3" xl="3" ><img width="95" src="@/img/vuex.png"></v-col>
    <v-col xs="12" sm="12" md="6" lg="3" xl="3"><h2 class="pa-1 ma-1">VueX</h2></v-col>
    </v-row>
    </v-container><br>
    <h1 class="pa-10" align="left">Ukratko:</h1>
    <v-sheet
  rounded
  class="mx-16 pa-10"
  color="teal"
  elevation="1"
  height=auto
  width="auto"
><h2 style="text-align: justify;
  text-justify: inter-word;">Projekt je nastao kao ideja da se sve nagradne igre nalaze na jednom
                    mjestu, te da korisnik može sve lako pronaći i pregledati. Organizatorima 
                    nudi pregled svih igara, stvaranje svojih te brisanje istih. Korisnik može pronaći igru koju želi, sudjelovati, obrisati prijavu te još mnogo toga.</h2></v-sheet>
  <v-row><v-col>
    <h1 class="pa-10" align="left">Baza podataka</h1></v-col></v-row>
    <v-row><v-col cols="12">
    <img style="max-width:100%" class="ma-2" src="@/img/ES-DB.jpg">
    </v-col></v-row>                  
  <h1 class="pa-10" align="left">Inspiracija</h1>
  <v-sheet
  rounded
  class="mx-16 pa-10"
  color="teal"
  elevation="1"
  height=auto
  width="auto"
><h2 style="text-align: justify;
  text-justify: inter-word;">Svakome se barem jednom desilo da je propustio nagradnu igru ili da nikada nije saznao
                    na nju. Te nam je cilj ovog projekta bio napraviti web stranicu na kojoj će se pratiti sve 
                    aktualne nagradne igre, koje se nalaze na jednom mjestu te su prijave na njih vrlo jednostavne, 
                    što će privući mnogo korisnika koji će nakon jedne odigrane igre ostat duže vrijeme.</h2></v-sheet>
  
  <h1 class="pa-10" align="left">Vizija</h1>
  <v-row><v-col><a href="https://github.com/Pero5511/FRONTEND/blob/main/src/img/Vizija.docx?raw=true"><v-btn  style="background-color:teal" class="pa-16" outlined color="black">VIZIJA</v-btn></a>
    </v-col></v-row>
  </div>
</template>

<script>

export default {
  data () {
      return {
        comp:[],
        items: [
          {
            src: require("@/img/6149fa5fde0e7b00194b9264.jpg"),
          },
          {
            src: require("@/img/best-books-of-2019-1568659903.jpg"),
          },
          {
            src: require("@/img/619bbeff1ca92500180c3b27.jpg"),
          },
          {
            src: require("@/img/cover2-9d5a07ec570aa8f7d7a26b865379d5eff4597729-s800-c85.jpg"),
          },
          {
            src: require("@/img/sm_f7e651-tolkien-lordoftherings.jpg"),
          },
          {
            src: require("@/img/The-Hobbit-book-cover.jpg"),
          },
        ],
      }
    },
  name: 'HomeView',
  components: {
  },
      mounted: function(){
        /*this.axios.get('https://favqs.com/api/qotd')
        .then(response=>{
          console.log(response.data.quote.body)
          this.comp=response.data.quote.body
        })*/
        //console.log(this.$store.state.user.name);
      }
  
}
</script>
