<!-- SQUADRE-->
<template>
    

    <div class="footballers">
     <HeaderSquadre/>
        <h1>Squadre </h1>
        <h6>Campionato Serie A 2021/2022</h6>

       

    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="all">Logo</th>
                        <th class="all">Squadra</th>
                        <th class="all">Allenatore</th>
                        <th class="all">Stadio</th>
                        <th class="all">Capienza stadio</th>
                        <th class="all">Data di fondazione</th>
                      <!--  <th class="all">Info</th>-->
                        <th class="all">Classifica</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(team,index) in teams" :key="index">
                        <td><img class="Logo" :src="team.Logo"></td>
                        <td id="Squadra"><router-link :to="{name: 'teamsDetail', params: {id:team.key}}">{{ team.Squadra }}</router-link></td>
                        <td id="Allenatore">{{ team.Allenatore }}</td>
                        <td id="Stadio">{{ team.Stadio }}</td>
                        <td id="CapienzaStadio">{{ team.CapienzaStadio }}</td>
                        <td id="DataFondazione">{{ team.DataFondazione }}</td>
                       <!-- <td id="Info">{{ team.Info }}</td>-->
                        <td id="Classifica">{{ team.Classifica }}</td>
                    </tr>
                </tbody>
            </table>
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
                teams: []
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
                        'Classifica': doc.data().Classifica,
                  }
                  console.log(data)
                   this.teams.push(data) 
                    })
                });
        },
        components: {
            HeaderSquadre
        },
       

    }
</script>

<style scoped>
.nav-link {
    padding:0px;
    margin: 10px;

}

.iconHS { /* logo/icona */
    height: 50px;
    width: 50px;
    margin:  0px;
}

.all{
    text-align: center;
}

.Logo {
    height: 70px;
    width: 70px;
    
}

#Squadra{
    text-align: center;
}

#Allenatore{
    text-align: center;
}

#Stadio{
    text-align: center;
}

#CapienzaStadio{
    text-align: center;
}

#DataFondazione{
    text-align: center;
}

#Classifica{
    text-align: center;
}
</style>




