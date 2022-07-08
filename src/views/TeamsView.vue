<template>
    <div class="container">
        <HeaderSquadre/>
        <h1>Squadre </h1>
        <h6>Campionato Serie A 2021/2022</h6>
        <!-- Tabella lista squadre-->
        <div class="row">
            <div class="col-lg-12">
                    <div class="row header" v-if="windowWidth>=1100"> 
                        <div class="list col-xl-1 col-md-3 col-sm-6">Logo</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Squadra</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Allenatore</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Stadio</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Capienza stadio</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Data fondazione</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Classifica</div>
                    </div>
                    <div>
                        <div class="row teamRow" v-for="(team,index) in teams" :key="index">
                            <div class="col-lg-1 col-md-3 col-sm-6"><img class="logo" :src="team.Logo"></div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Squadra: </span><router-link class="text-decoration-none text-link" :to="{name: 'teamsDetail', params: {id:team.key}}">{{ team.Squadra }}</router-link></div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Allenatore: </span>{{ team.Allenatore }} </div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Stadio: </span>{{ team.Stadio }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Capienza stadio: </span>{{ team.CapienzaStadio }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Data fondazione: </span>{{ team.DataFondazione }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Classifica: </span>{{ team.Classifica }}</div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>


<script>
import  db  from '../main.js';
import HeaderSquadre from '/src/components/HeaderSquadre.vue'
    
    export default {
        data() {
            return {
                teams: [],
                windowWidth:window.innerWidth
            }
        },
        //creazione array delle squadre
        created() {
            db.collection('teams').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  const data = {
                    key: doc.id,
                        'Logo': doc.data().Logo,
                        'Squadra': doc.data().Squadra,
                        'Allenatore': doc.data().Allenatore,
                        'Stadio': doc.data().Stadio,
                        'CapienzaStadio': doc.data()['Capienza stadio'],
                        'DataFondazione': doc.data()['Data di fondazione'],
                       'Info': doc.data().Info,
                        'Classifica': doc.data().Classifica+"°",
                  }
                   this.teams.push(data) 
                    })
                });
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
        components: {
            HeaderSquadre
        },
       

    }
</script>

<style scoped>
.container{
    max-width:100%;
    padding:0.5%;
}

.row{
    display:flex;
    flex-direction:row;
    width:100%;
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

.logo {
    height: 70px;
    width: 70px;
}

.list{
    text-align: center;
    color: green;
    font-weight:bold;
}
</style>




