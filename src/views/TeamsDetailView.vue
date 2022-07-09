<template>
    <div class="container">
        <h1>Squadre </h1>
        <h6>Campionato Serie A 2021/2022</h6>
        <!--Tabella dettaglio singole squadre-->
        <div class="row">
            <div class="col-lg-12">
                    <div class="row header" v-if="windowWidth>=1100">
                        <div class="list col-xl-1 col-md-3 col-sm-6">Logo</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Squadra</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Allenatore</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Stadio</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Capienza stadio</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Data fondazione</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Info</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Classifica</div>
                    </div>
                    <div>
                        <div class="row teamRow" v-for="teamDetail in teamsDetail" :key="teamDetail.id">
                            <div class="col-lg-1 col-md-3 col-sm-6"><img class="logo" :src="teamDetail.Logo"></div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Squadra: </span>{{ teamDetail.Squadra }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Allenatore: </span>{{ teamDetail.Allenatore }} </div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Stadio: </span>{{ teamDetail.Stadio }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Capienza stadio: </span>{{ teamDetail.CapienzaStadio }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Data fondazione: </span>{{ teamDetail.DataFondazione }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Info: </span>{{ teamDetail.Info }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Classifica: </span>{{ teamDetail.Classifica }}</div>
                        </div>
                    </div>
            </div>
        </div>
        <!--pulsante per tornare alla lista delle squadre-->
        <router-link to="/teams"><button type="button" class="btn btn-success indietro">Indietro</button></router-link>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import  db  from '../main.js';
    
    export default {
        name: "teamsDetail",
            data: function () {
                return{
                    id: this.$route.params.id,
                    teamsDetail : [],
                    windowWidth:window.innerWidth
                }
            },
        //funzione che alla creazione restituisce i dati della squadra selezionata usando l'id come key
        created() {
            console.log(this.id)
            db.collection('teams').doc(this.id).get().then(doc => {
                  const data = {
                        'id': doc.data().id,
                        'Logo': doc.data().Logo,
                        'Squadra': doc.data().Squadra,
                        'Allenatore': doc.data().Allenatore,
                        'Stadio': doc.data().Stadio,
                        'CapienzaStadio': doc.data()['Capienza stadio'],
                        'DataFondazione': doc.data()['Data di fondazione'],
                        'Info': doc.data().Info,
                        'Classifica': doc.data().Classifica+"°",
                  }
                   this.teamsDetail.push(data) 
                })
        },
    //Assegnazione alla variabile windowWidth della larghezza attuale della finestra
    //La funzione viene chiamata ogni qualvolta la dimensione della finestra cambia (resize)
    onResize() {
      this.windowWidth = window.innerWidth
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
        components:{
            Footer,
        }
    }
</script>

<style scoped>
.container{
    max-width:100%;
    padding:0.5%;
}

.teamRow{
    border-bottom:1px solid black;
    text-align:center;
}
.header{
    border-bottom:1px solid black;
    text-align:center;
    font-weight:bold;
}

.row{
    display:flex;
    flex-direction:row;
    width:100%;
}

.logo {
    height: 50px;
    width: 50px;
}

.list{
    text-align: center;
    color: green;
    font-weight:bold;
}

.indietro{
    margin: 20px;
}
</style>

