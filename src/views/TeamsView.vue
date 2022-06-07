<template>
    
    <div class="footballers">

    <TopBar />
        <ul class="nav justify-content-center">
        <li class="nav-item submenu-items">
            <a class="nav-link submenu-itemHS">
                <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/atalanta.png" alt="Atalanta" href="#">
            </a>
        </li>
        <li class="nav-item submenu-items">
            <a class="nav-link">
                <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/bologna.png" alt="Bologna" href="#">
            </a>
        </li>
        <li class="nav-item submenu-items">
            <a class="nav-link">
                <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/venezia.png" alt="Venezia" href="#">
            </a>
        </li>
        <li class="nav-item submenu-items">
            <a class="nav-link">
                <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/salernitana.png" alt="Salernitana" href="#">
            </a>
        </li>
        </ul>
        <h1>Squadre </h1>
        <h6>Campionato Serie A 2022/2023</h6>

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
                        <th class="all">Info</th>
                        <th class="all">Classifica</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="team in teams" :key="team.key">
                        <td><img class="Logo" :src="team.Logo"></td>
                        <td id="Squadra">{{ team.Squadra }}</td>
                        <td id="Allenatore">{{ team.Allenatore }}</td>
                        <td id="Stadio">{{ team.Stadio }}</td>
                        <td id="CapienzaStadio">{{ team.CapienzaStadio }}</td>
                        <td id="DataFondazione">{{ team.DataFondazione }}</td>
                        <td id="Info">{{ team.Info }}</td>
                        <td id="Classifica">{{ team.Classifica }}</td>
                        <td>
                            <!--<router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Edit
                            </router-link>
                           <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>-->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
         </div>
        
        <Footer/>
       
    </div>
    

</template>


<script>
import TopBar from '@/components/TopBar.vue'
import HeaderSquadre from '@/components/HeaderSquadre.vue'
import Footer from '@/components/Footer.vue'
import  db  from '../main.js';
    
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
        components:{
            HeaderSquadre,
            TopBar,
            Footer,
        }
        /*methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("users").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }*/
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




