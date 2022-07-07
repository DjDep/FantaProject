<!-- SQUADRE-->
<template>
    <div class="container">
        <HeaderSquadre/>
        <h1>Squadre </h1>
        <h6>Campionato Serie A 2021/2022</h6>
        <div class="row">
            <div class="col-lg-12">
                    <div class="row header" v-if="windowWidth>=1100"> <!--800-->
                        <div class="list col-xl-1 col-md-3 col-sm-6">Logo</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Squadra</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Allenatore</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Stadio</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Capienza stadio</div>
                        <div class="list col-xl-1 col-md-3 col-sm-6">Data fondazione</div>
                      <!--  <div class="list col-xl-1 col-md-3 col-sm-6">Info</div> -->
                        <div class="list col-xl-1 col-md-3 col-sm-6">Classifica</div>
                    </div>
                    <div>
                        <div class="row playerRow" v-for="(team,index) in teams" :key="index">
                            <div class="col-lg-1 col-md-3 col-sm-6"><img class="logo" :src="team.Logo"></div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Squadra: </span><router-link class="text-decoration-none text-link" :to="{name: 'teamsDetail', params: {id:team.key}}">{{ team.Squadra }}</router-link></div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Allenatore: </span>{{ team.Allenatore }} </div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Stadio: </span>{{ team.Stadio }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Capienza stadio: </span>{{ team.CapienzaStadio }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Data fondazione: </span>{{ team.DataFondazione }}</div>
                          <!--  <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<1100">Info: </span>{{ team.Info }}</div> -->
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
                  console.log(data)
                   this.teams.push(data) 
                    })
                });
        },

    onResize() {
      this.windowWidth = window.innerWidth
    },

    mounted() {
        this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
        })
    },

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

.playerRow{
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

.tableTitle {
    text-align: center;
    color: green;
}

.list{
    text-align: center;
    color: green;
    font-weight:bold;
}
.tableData {
    text-align: center;
}
</style>




