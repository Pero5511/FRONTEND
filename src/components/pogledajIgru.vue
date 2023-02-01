<template>
  <v-container>
    <v-card 
    dark
    class="mx-auto"
    max-width="490"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div style="color:teal" align="left" class="text-overline mb-4">
          {{this.tipcomp}}
        </div>
        <br>
        <v-list-item-title class="text-h5 mb-7">
          {{naziv}}
        </v-list-item-title>
        <hr>
        <v-list-item-subtitle style="color:teal" align="left">Organizator:</v-list-item-subtitle>
        <v-list-item-subtitle class="mb-7">{{this.organizatorcomp}}</v-list-item-subtitle>
        <br>
        <v-list-item-subtitle style="color:teal" align="left">Nagrada:</v-list-item-subtitle>
        <v-list-item-subtitle class="mb-7">{{nagrada}}</v-list-item-subtitle>
        <v-list-item-subtitle style="color:teal" align="left">Vrijednost: </v-list-item-subtitle>
        <v-list-item-subtitle class="mb-7">{{vrijednost}} KM</v-list-item-subtitle>
        <v-list-item-subtitle style="color:teal" align="left">Cijena: </v-list-item-subtitle>
        <v-list-item-subtitle class="mb-7">{{tokens}} Token/a</v-list-item-subtitle>
        <v-list-item-subtitle style="color:teal" align="left">Završava: </v-list-item-subtitle>
        <v-list-item-subtitle class="mb-7">{{zavrsava}}</v-list-item-subtitle>
         <v-list-item-subtitle style="color:teal" align="left">Dobitnik: </v-list-item-subtitle>
        <v-list-item-subtitle>{{this.pobjednikcomp}}</v-list-item-subtitle>
        <h1 style="color:lime">{{this.zavrsavacomp}}</h1>
        <v-btn v-if=canJoin @click=sudjeluj() class="mt-3" outlined color="white">Sudjeluj ></v-btn>
        <br>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </v-container>
</template>

<script>
var currentTime=new Date();
import Api from "@/plugins/Api";
  export default {
    name: 'pogledajIgru',
    props: ['tokens','naziv','organizator','id','tip','nagrada','vrijednost','objavljena','zavrsava','pobjednik'],
    data: () => ({tipcomp:null,
    organizatorcomp:null,
    canJoin:null,
    pobjednikcomp:null,
    zavrsavacomp:null,
    form: {
        submitter: null,
        game: null,
        },
    form2: {
        name: null,
        user_role:"1",
        tokens:null,
        },
    }),
    methods:{
      sudjeluj(){
        if (this.zavrsavacomp!=null){
          alert("OPREZ! Sudjelujete u ZAVRŠENOJ igri!")
        }
        Api.get('/users/' + this.$store.state.user.id).then(response => {
          this.form2.name=response.data.name;
          this.form2.user_role=response.data.user_role;
          this.form2.tokens=response.data.tokens;
      })
        if (this.form2.tokens>=this.tokens){
        this.form.game=this.id;
        this.form.submitter=this.$store.state.user.id
        this.form2.tokens=this.form2.tokens-this.tokens
         Api.put('/users/' + this.$store.state.user.id, JSON.stringify(this.form2)).then(response => {
        if (response.status === 200) {
           console.log("response.status")
        }
      })
        Api.post('/submits', JSON.stringify(this.form)).then(response => {
        if (response.status === 201) {
           console.log("response.status")
           alert("Uspješno ste se prijavili na igru!");
          // Go to home
          this.$router.go(0)
          //this.$router.push('/')
        }
      })}
      }
    },
    mounted () {
      if(currentTime.toJSON()>this.zavrsava){
          this.zavrsavacomp="ZAVRŠENA !"
          console.log(this.zavrsavacomp)
      }
      Api.get('/types/' + this.tip).then(response => {
          this.tipcomp=response.data.name
      })
      Api.get('/users/' + this.organizator).then(response => {
          this.organizatorcomp=response.data.name
      })
      Api.get('/users/' + this.pobjednik).then(response => {
          this.pobjednikcomp=response.data.name
      })
      if(this.$store.state.user.user_role==1 || this.$store.state.user.user_role==3){
        this.canJoin="1";
      }
    },
  }
</script>
