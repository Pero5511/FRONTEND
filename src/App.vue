<template style="background:#000000">
  <v-app style="
  background: rgb(58,84,180);
  background: -moz-linear-gradient(45deg, rgba(58,84,180,1) 0%, rgba(29,253,222,1) 49%, rgba(0,255,169,1) 100%);
  background: -webkit-linear-gradient(45deg, rgba(58,84,180,1) 0%, rgba(29,253,222,1) 49%, rgba(0,255,169,1) 100%);
  background: linear-gradient(45deg, rgba(58,84,180,1) 0%, rgba(29,253,222,1) 49%, rgba(0,255,169,1) 100%);
"><v-container>
    <v-row>
    <v-col>
    <v-app-bar
      app
      shrink-on-scroll
      color="black"
      flat
    >
     
      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar></v-col><v-col>
    <v-app-bar src="@/img/carbon-fiber-texture-linear-gradient-260nw-1316111075.jpg"
    dark
      app
      shrink-on-scroll
    >
    <v-img class="hidden-sm-and-down" shrink-on-scroll src="@/img/pngwing.com.png" max-height="60"
  max-width="60"></v-img>
    <v-col><v-toolbar-title class="hidden-sm-and-down white--text">E-Sweepstakes</v-toolbar-title></v-col>
      <v-tabs
        centered
        class="mr-0"
        color="white darken-1"
        show-arrows
      >
        <v-tab
          v-for="[ikona,ruta] in links"
          :key="ikona"
          :to="ruta"
        ><v-icon large color="white lighten-1">{{ikona}}</v-icon>
        </v-tab>
        
      </v-tabs>
    </v-app-bar></v-col></v-row>
    </v-container>


      <v-container style="background-color:#006a7a" class="pt-14 mt-14">
        <router-view></router-view>
        <br><br><br>
        <hr class="ma-4">
        <v-row>
        <v-col xs="12" sm="12" md="12" lg="8" xl="8">
        <hello-world class="pa-0"></hello-world></v-col><v-col xs="12" sm="12" md="12" lg="4" xl="4">
        <v-btn class="mt-0 pa-2" v-if=logged outlined color="white"
    >

      <div @click="logout">Logout</div>

      <!--  -->
    </v-btn></v-col></v-row>

        <hr class="ma-4">
        <p align="center">Powered by Vue, Vuetify and Laravel APIs.</p>
        <p align="center">Created By Perica Topić and Martin Karalić - 2023</p>
      </v-container>
    
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f9f9f9;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Api from "@/plugins/Api";
import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    data: () => ({
      links: [
        ["mdi-menu","/"],
        ["mdi-magnify","/pretraga"],
        ["mdi-archive-outline","/dashboard"],
        ["mdi-account-key","/logreg"],
        ["mdi-cards-heart-outline","/about"],
      ],
      drawer:false,
      logged:localStorage.getItem("app_token")
    }),
    components:{
      HelloWorld
    },
    methods: {
    logout() {
      Api.get('auth/logout').then(response => {
        //To delete user's token in database
        if (response.status===200){
          console.log("Uspjesno izbrisan token!")
        }
      })
      // Remove token on logout
      localStorage.removeItem('app_token')
      this.logged=0;
      this.$router.go(0)
    }
  }
  }
</script>
