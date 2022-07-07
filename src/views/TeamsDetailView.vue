<template>
    <div class="container">
        <HeaderSquadre/>
        <h1>Squadre </h1>
        <h6>Campionato Serie A 2021/2022</h6>
        <div class="row">
            <div class="col-lg-12">
                    <div class="row header" v-if="windowWidth>=800">
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
                        <div class="row playerRow" v-for="teamDetail in teamsDetail" :key="teamDetail.id">
                            <div class="col-lg-1 col-md-3 col-sm-6"><img class="logo" :src="teamDetail.Logo"></div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Squadra: </span>{{ teamDetail.Squadra }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Allenatore: </span>{{ teamDetail.Allenatore }} </div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Stadio: </span>{{ teamDetail.Stadio }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Capienza stadio: </span>{{ teamDetail.CapienzaStadio }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Data fondazione: </span>{{ teamDetail.DataFondazione }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Info: </span>{{ teamDetail.Info }}</div>
                            <div class="col-lg-1 col-md-3 col-sm-6"><span class="list" v-if="windowWidth<800">Classifica: </span>{{ teamDetail.Classifica }}</div>
                        </div>
                    </div>
            </div>
        </div>
        <router-link to="/teams"><button type="button" class="btn btn-success">Indietro</button></router-link>
    </div>
</template>

<script>
import HeaderSquadre from '@/components/HeaderSquadre.vue'
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
                        'Classifica': doc.data().Classifica,
                  }
                  console.log(data)
                   this.teamsDetail.push(data) 
                })
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
        components:{
            HeaderSquadre,
            Footer,
        }
    }
</script>

<style scoped>
.container{
    max-width:100%;
    padding:0.5%;
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
}
</style>

