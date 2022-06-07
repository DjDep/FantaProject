<script setup >
import TopBar from '@/components/TopBar.vue'
</script>

<template>
    
    <div class="footbllers">

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
        <h1>Pagina delle squadre </h1>

    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Squadra</th>
                        <th>Allenatore</th>
                        <th>Stadio</th>
                        <th>Capienza stadio</th>
                        <th>Data di fondazione</th>
                        <th>Info</th>
                        <th>Logo</th>
                        <th>Classifica</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="team in teams" :key="team.key">
                        <td>{{ team.Squadra }}</td>
                        <td>{{ team.Allenatore }}</td>
                        <td>{{ team.Stadio }}</td>
                        <td>{{ team.CapienzaStadio }}</td>
                        <td>{{ team.DataFondazione }}</td>
                        <td>{{ team.Info }}</td>
                        <td><img :src="team.Logo"></td>
                        <td>{{ team.Classifica }}</td>
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
        </div>

</template>


<script>
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
                        'Squadra': doc.data().Squadra,
                        'Allenatore': doc.data().Allenatore,
                        'Stadio': doc.data().Stadio,
                        'CapienzaStadio': doc.data()['Capienza stadio'],
                        'DataFondazione': doc.data()['Data di fondazione'],
                        'Info': doc.data().Info,
                        'Logo': doc.data().Logo,
                        'Classifica': doc.data().Classifica,
                  }
                  console.log(data)
                   this.teams.push(data) 
                    })
                });
        },
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

<style>

.nav-link {
    padding:0px;
    margin: 10px;

}

.iconHS { /* logo/icona */
    height: 50px;
    width: 50px;
    margin:  0px;
}
</style>




