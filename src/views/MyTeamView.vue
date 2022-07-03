<!-- La mia Squadra-->
<style scoped>
  @import 'vue-select/dist/vue-select.css';

  .player {
    margin: 30px;
    padding: 20px;
    border-radius: 8px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
  }

  .footballers {
    margin: 10px;
  }

  .myTitle {
    margin: 10px;
  }

  .insertForm {
    margin: 10px;
  }

  .insertTitle {
    margin: 10px;
  }
  .Por{
    background-color:orange;
  }
  .Dif{
    background-color:#a5d6a7;
  }
  .Cen{
    background-color:#80deea;
  }
  .Att{
    background-color:#ef9a9a;
  }
  .myTeam {
    margin: 30px;
  }
</style>
<template>

<div class="footbllers">
    <!--<TopBar/>-->
        <h1 class="myTitle">La mia squadra</h1>

        <h5 class="insertTitle">Inserisci la tua squadra</h5>
        <v-select 
        :options="listone" 
        :getOptionLabel="getText"
        item-text="CognomeNome"
        v-model="selected"/>
        <button @click="saveData" class="btn btn-primary">Inserisci</button>


    <h3 class="myTeam">La mia squadra</h3>         
        <div 
        v-for="(my,index) in myTeam" :key="index" class="player"
        :class="{ 'Por': my.RC == 'P', 'Dif': my.RC == 'D','Cen': my.RC == 'C','Att': my.RC == 'A', }"> 
          <p> <router-link :to ="{name: 'detail', params: {id: my.key}}">{{my.CognomeNome}} </router-link></p>
          <p> {{my.Squadra}}</p>  
          <p> {{my.RC}}</p>  
          <p> {{my.RuoloM}}</p>  
            <button type="submit" @click="deleteUser(my.key)" class="btn btn-danger">Rimuovi calciatore</button>
      </div> 
    
    <!--<Footer/>-->
    </div>

</template>


<script lang="ts">
import Footer from '../components/Footer.vue'

import  db  from '../main.js';

export default {
    name: "myTeam",
  data: function () {
    return{

      myTeam: [],
      dati:  {
        CognomeNome: null,
        squadra: null,
      },
      listone:[],
      selected:null
    }
  },

methods: {

      saveData(){
        db.collection("myTeam")
            .doc()
            .set({...this.selected})
            .then((data) => {
              console.log(data)
              alert ("Giocatore inserito correttamente");
              this.selected = null;
              this.myTeam = [];
              this.readData();
            })
            .catch ((err) => {
            console.log(err);
            alert ("riprova");
            })

    },
    getText(giocatore){
      return `${giocatore.CognomeNome} - ${giocatore.Squadra} - ${giocatore.RC} - ${giocatore.RuoloM}`
    },
    loadListone(){
              db.collection('footballers').orderBy("RC", "desc").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  const data = {
                        key: doc.id,
                        'ID': doc.data().ID,
                        'AnnodiNascita': doc.data()['Anno di nascita'],
                        'CognomeNome': doc.data().CognomeNome,
                        'MediaFantavoto': doc.data()['Media fantavoto'],
                        'MediaVoto': doc.data()['Media voto'],
                        'Cartoncino': doc.data().Cartoncino,
                        'Squadra': doc.data().Squadra,
                        'RC': doc.data().RC,
                        'RuoloM': doc.data().RuoloM,
                        'QuotazioneAttuale': doc.data().QuotazioneAttuale,
                        'QuotazioneIniziale': doc.data().QuotazioneIniziale,
                        'Piede': doc.data().Piede,
                        'Nazionalità': doc.data().Nazionalità,
                  }           
                   this.listone.push(data)   

                    })
                });
    },

    readData(){
      db.collection('myTeam').get().then(querySnapshot => {
        querySnapshot.forEach (doc =>  {
          console.log(doc.data())
          const data =  {
            key: doc.id,
            'ID': doc.data().ID,
            'CognomeNome': doc.data().CognomeNome,
            'Squadra': doc.data().Squadra,
            'RC': doc.data().RC,
            'RuoloM': doc.data().RuoloM,
          }
          console.log("fdfdffd")
          this.myTeam.push(data)      
        })
        this.myTeam.sort((a,b)=>{
          if(a.RC == 'P')return -1;
          else if(b.RC == 'P')return 1;
          else if(a.RC == 'D')return -1;
          else if(b.RC == 'D')return 1;
          else if(a.RC == 'C')return -1;
          else if(b.RC == 'C')return 1;
          else if(a.RC == 'A')return -1;
          else if(b.RC == 'A')return 1;
          else return 0;
        })
      }) 
      },
    deleteUser(key){
      if (window.confirm("Vuoi eliminare questo giocatore dalla tua rosa?")) {
          console.log(key)
          db.collection("myTeam").doc(key).delete().then(() => {
              alert('Giocatore eliminato dalla rosa!')
              this.myTeam = [];
              this.readData()
          })
          .catch((error) => {
              console.error(error);
          })
        }
      }

},
beforeMount(){
  this.loadListone();
    this.readData()
 },
    components:{
        Footer,
    },


  
}
</script>