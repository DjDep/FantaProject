<!-- Calciatori serie A-->
<template>
    <div class="row">
        <TopBar />
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>AnnodiNascita</th>
                        <th>CognomeNome</th>
                        <th>MediaFantavoto</th>
                        <th>MediaVoto</th>
                        <th>Cartoncino</th>
                        <th>Squadra</th>
                        <th>RC</th>
                        <th>Ruolo Mantra</th>
                        <th>Quotazione Attuale</th>
                        <th>Quotazione Iniziale</th>
                        <th>Piede</th>
                        <th>Nazionalità</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="footballer in footballers" :key="footballer.ID">
                        <td>{{ footballer.AnnodiNascita }}</td>
                        <td><router-link :to ="{name: 'detail', params: {id: footballer.ID}}">{{ footballer.CognomeNome }}</router-link></td>
                        <td>{{ footballer.MediaFantavoto }}</td>
                        <td>{{ footballer.MediaVoto }}</td>
                        <td><img :src="footballer.Cartoncino"> </td>
                        <td>{{ footballer.Squadra }}</td>
                        <td>{{ footballer.RC }}</td>
                        <td>{{ footballer.RuoloM }}</td>
                        <td>{{ footballer.QuotazioneAttuale }}</td>
                        <td>{{ footballer.QuotazioneIniziale }}</td>
                        <td>{{ footballer.Piede }}</td>
                        <td>{{ footballer.Nazionalità }}</td>
                        <td>
                            <!--<router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Edit
                            </router-link>
                           <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>-->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Footer/>
    </div>
    
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'
import  db  from '../main.js';
    
    export default {
        data() {
            return {
                footballers: []
            }
        },
        created() {
            db.collection('footballers').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  const data = {
                    //key: doc.id,
                        'AnnodiNascita': doc.data()['Anno di nascita'],
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
                     if(data.CognomeNome=='Sepe Luigi')console.log(doc.data())
                   this.footballers.push(data)     
                    })
                });
        },
        components:{
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
    .btn-primary {
        margin-right: 12px;
    }
</style>


