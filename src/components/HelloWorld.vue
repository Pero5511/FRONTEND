<template>
  <v-container>
    <v-row class="text-center">
      <v-col xs="12" sm="12" md="12" lg="6" xl="6">
        <v-img
          :src="require('../assets/user.svg')"
          class="my-3"
          contain
          height="20"
        />
      </v-col>

      <v-col xs="12" sm="12" md="12" lg="6" xl="6">
        <v-btn @click="dialog=!dialog" outlined color="white" >{{this.$store.state.user.name}}</v-btn>
      </v-col>
    </v-row>
    <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    ><v-card>
        <v-card-title>
          <span class="text-h5">Ime korisnika</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="form.name"
                  label="Novo ime"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="black"
            text
            @click="promijeniIme()"
          >
            Spremi
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
  </v-container>
</template>

<script>
import Api from "@/plugins/Api";
  export default {
    name: 'HelloWorld',

    data: () => ({dialog:false,
    form: {
        name: null,
        user_role:null,
        tokens:null,
        },
    }),
    methods:{
      promijeniIme(){
        Api.get('/users/' + this.$store.state.user.id).then(response => {
          this.form.user_role=response.data.user_role;
          this.form.tokens=response.data.tokens;})
      console.log(this.form);
        this.dialog=false;
        Api.put('/users/' + this.$store.state.user.id, JSON.stringify(this.form)).then(response => {
        if (response.status === 200) {
           console.log("response.status")
          // Go to home
          this.$router.go(0)
          //this.$router.push('/')
        }
      })
      }
    },

    computed: {
      // Get user from vuex store
      user () {
        return this.$store.getters.getUser
      }
    },
    mounted () {
      // Try to get logged user on initialization of component
      this.$store.dispatch('getUser');
      Api.get('/users/' + this.$store.state.user.id).then(response => {
          this.form.name=response.data.name;
          this.form.user_role=response.data.user_role;
          this.form.tokens=response.data.tokens;})
          console.log(this.form);
      
    },

    
  }
</script>
