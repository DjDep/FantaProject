
<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
                <div class="row header" v-if="windowWidth>=800">
                    <div class="list col-xl-1 col-md-3 col-sm-6">Cartoncino</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Cognome & Nome</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Anno Di Nascita</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Squadra</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Nazionalità</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Piede</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Media Fantavoto</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Media Voto</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">RC</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Ruolo Mantra</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Quotazione Attuale</div>
                    <div class="list col-xl-1 col-md-3 col-sm-6">Quotazione Iniziale</div>
                </div>
                <div>
                    <div class="row playerRow" v-for="(footballer, index) in footballersLoaded" :key="index">
                        <div class="col-lg-1 col-md-3 col-sm-6"><img class="campioncino" :src="footballer.Cartoncino"> </div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Cognome & Nome: </span><router-link :to ="{name: 'detail', params: {id: footballer.key}}">{{ footballer.CognomeNome }}</router-link></div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Data di Nascita: </span>{{ footballer.AnnodiNascita }} </div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Squadra: </span>{{ footballer.Squadra }}</div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Nazionalità: </span>{{ footballer.Nazionalità }}</div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Piede: </span>{{ footballer.Piede }}</div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Media Fantavoto: </span>{{ footballer.MediaFantavoto }}</div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Media voto: </span>{{ footballer.MediaVoto }}</div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">RC: </span>{{ footballer.RC }}</div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Ruolo Mantra: </span>{{ footballer.RuoloM }}</div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Quotazione Attuale: </span>{{ footballer.QuotazioneAttuale }}</div>
                        <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Quotazione Iniziale: </span>{{ footballer.QuotazioneIniziale }}</div>
                    </div>
                </div>
        </div>
    </div>

<!-- Button per caricare i giocatori-->
  <b-button 
  class="load-button" 
  @click="loadMore" 
  variant="success"
  >
    Carica altri giocatori
  </b-button>

  </div>

</template>

 <script lang="ts">
import  db  from '../main.js';

export default {
  
  data() {
    return {
      footballers: [],
      length: 10,
      windowWidth:window.innerWidth
    };
  },
  created() { /* Creazione dell'array dei giocatori */
            db.collection('footballers').orderBy("RC", "desc").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  const data = {
                        key: doc.id,
                        'ID': doc.data().ID,
                        'Cartoncino': doc.data().Cartoncino,
                        'AnnodiNascita': doc.data()['Anno di nascita'].replace("00:00:00", ""),
                        'CognomeNome': doc.data().CognomeNome,
                        'Squadra': doc.data().Squadra,
                        'Nazionalità': doc.data().Nazionalità,
                        'Piede': doc.data().Piede,
                        'MediaFantavoto': doc.data()['Media fantavoto'],
                        'MediaVoto': doc.data()['Media voto'],
                        'RC': doc.data().RC,
                        'RuoloM': doc.data().RuoloM,
                        'QuotazioneAttuale': doc.data().QuotazioneAttuale,
                        'QuotazioneIniziale': doc.data().QuotazioneIniziale,
                  }
                   this.footballers.push(data)  
                     
                    })
                });
        },
  methods: {
    /* Vengono caricati 10 giocatori aggiuntivi quando la funzione viene attivata dal button*/
    loadMore() {
      if (this.lengdiv > this.footballers.length) return;
      this.lengdiv = this.lengdiv + 10;
    },
    onResize() {
      this.windowWidth = window.innerWidth
    }
  },
  computed: { /* Si prendono i dati all'interno dell'array footballers dalla posizione 0 alla posizione selezionata 
  = su schermo sono mostrati i dati dalla posizione 0 alla posizione raggiunta dall'utente con il LoadButton
   */
    footballersLoaded() {
      return this.footballers.slice(0, this.length);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
};
</script>

<style scoped>
/*.container{
  margin:0;
  padding:0;
}*/
.campioncino{
  width:100%;
  height:auto;
}
.playerRow{
  border-bottom:1px solid black;
  text-align:center;
}
    .header{
      border-bottom:1px solid black;
      text-align:center;
      font-weight:bold;
    }

    .list{
        text-align: center;
        color: green;
    }

    .row{
      display:flex;
      flex-direction:row;
      width:100%;
    }

    .container{
      max-width:100%;
      padding:0.5%;
    }

    .load-button{
      margin: 40px;
    }
</style>




