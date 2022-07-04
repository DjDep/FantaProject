<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <th class="all">Squadra</th>
                        <th class="all">Allenatore</th>
                        <th class="all">Stadio</th>
                        <th class="all">Capienza stadio</th>
                        <th class="all">Data di fondazione</th>
                        <th class="all">Info</th>
                        <th class="all">Classifica</th>
                </thead>
                <tbody>
                    <tr v-for="teamDetail in teamsDetail" :key="teamDetail.id">
                        <td><img class="Logo" :src="teamDetail.Logo"></td>
                        <td id="Squadra">{{ teamDetail.Squadra }}</td>
                        <td id="Allenatore">{{ teamDetail.Allenatore }}</td>
                        <td id="Stadio">{{ teamDetail.Stadio }}</td>
                        <td id="CapienzaStadio">{{ teamDetail.CapienzaStadio }}</td>
                        <td id="DataFondazione">{{ teamDetail.DataFondazione }}</td>
                        <td id="Info">{{ teamDetail.Info }}</td>
                        <td id="Classifica">{{ teamDetail.Classifica }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
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
                    teamsDetail : []
                }
            },
        created() {
            console.log(this.id)
            db.collection('teams').doc(this.id).get().then(doc => {
                  const data = {
                    //key: doc.id,
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
        components:{
            HeaderSquadre,
            Footer,
        }
    }
</script>


