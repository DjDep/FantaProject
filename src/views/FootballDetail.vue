
<template>
    <div class="container">
    <!--Tabella dettaglio per i singoli giocatori-->
        <div class="row">
            <div class="col-lg-12">
                    <div class="row header" v-if="windowWidth>=1100">
                        <div class="list col-xl-1 col-md-3 col-sm-6">Cartoncino</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Cognome & Nome</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Anno Di Nascita</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Squadra</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Nazionalità</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Piede</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Media Fantavoto</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Media Voto</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Ruolo classic</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Ruolo Mantra</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Quotazione Attuale</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Quotazione Iniziale</div>
                    </div>
                    <div>
                        <div class="row playerRow" v-for="detail in dettaglio" :key="detail.ID">
                            <div class="col-lg-1 col-md-3 col-sm-6"><img class="campioncino" :src="detail.Cartoncino"> </div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Cognome & Nome: </span>{{ detail.CognomeNome }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Anno di Nascita: </span>{{ detail.AnnodiNascita }} </div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Squadra: </span>{{ detail.Squadra }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Nazionalità: </span>{{ detail.Nazionalità }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Piede: </span>{{ detail.Piede }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Media Fantavoto: </span>{{ detail.MediaFantavoto }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Media voto: </span>{{ detail.MediaVoto }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Ruolo classic: </span>{{ detail.RC }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Ruolo Mantra: </span>{{ detail.RuoloM }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Quotazione Attuale: </span>{{ detail.QuotazioneAttuale }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Quotazione Iniziale: </span>{{ detail.QuotazioneIniziale }}</div>
                        </div>
                    </div>
            </div>
        </div>
        <!--pulsante per tornare alla lista dei calciatori-->
        <router-link to="/myTeam"><button type="button" class="btn btn-success indietro">Vai alla mia squadra</button></router-link>
        <router-link to="/list"><button type="button" class="btn btn-success indietro">Vai al Listone</button></router-link>
    </div>
</template>

<script>
import db from '../main.js'

export default {
    name: "detail",
    data: function () {
        return{
            id: this.$route.params.id,
            dettaglio : [],
            windowWidth:window.innerWidth
        }
    },

//funzione che alla creazione restituisce i dati del giocatore selezionato usando l'id come key
 created() {
    console.log(this.id)
        db.collection('footballers').doc(this.id).get().then(doc => {
                const data = {
                    'ID': doc.data().ID,
                    'AnnodiNascita': doc.data()['Anno di nascita'].replace("00:00:00", ""),
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
        this.dettaglio.push(data)     
        });
    },

    methods:{
    //Assegnazione alla variabile windowWidth della larghezza attuale della finestra
    //La funzione viene chiamata ogni qualvolta la dimensione della finestra cambia (resize)
        onResize() {
        this.windowWidth = window.innerWidth
        } 
    },

    //al mount della pagina si aggiunge l'event listener per la funzione onResize 
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    //rimozione dell'event listener prima del destroy
    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
}

</script>

<style>

.container{
    max-width:100%;
    padding:0.5%;
}

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
    font-weight: 16;
    font-weight:bold;
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

.indietro{
    margin: 20px;
}
</style>