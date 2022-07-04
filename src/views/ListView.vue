

<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="list">Cartoncino</th>
                        <th class="list">Cognome & Nome</th>
                        <th class="list">Anno Di Nascita</th>
                        <th class="list">Squadra</th>
                        <th class="list">Nazionalità</th>
                        <th class="list">Piede</th>
                        <th class="list">Media Fantavoto</th>
                        <th class="list">Media Voto</th>
                        <th class="list">RC</th>
                        <th class="list">Ruolo Mantra</th>
                        <th class="list">Quotazione Attuale</th>
                        <th class="list">Quotazione Iniziale</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(footballer, index) in footballers" :key="index">
                        <td><img class="Cartoncino" :src="footballer.Cartoncino"> </td>
                        <td class="Nome"><router-link :to ="{name: 'detail', params: {id: footballer.key}}">{{ footballer.CognomeNome }}</router-link></td>
                        <td class="list2">{{ footballer.AnnodiNascita }}</td>
                        <td class="list2">{{ footballer.Squadra }}</td>
                        <td class="list2">{{ footballer.Nazionalità }}</td>
                        <td class="list2">{{ footballer.Piede }}</td>
                        <td class="list2">{{ footballer.MediaFantavoto }}</td>
                        <td class="list2">{{ footballer.MediaVoto }}</td>
                        <td class="list2">{{ footballer.RC }}</td>
                        <td class="list2">{{ footballer.RuoloM }}</td>
                        <td class="list2">{{ footballer.QuotazioneAttuale }}</td>
                        <td class="list2">{{ footballer.QuotazioneIniziale }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import TopBar from '../components/TopBar.vue'
import Footer from '../components/Footer.vue'

import  db  from '../main.js';
    
    export default {
        data() {
            return {
                footballers: []
            }
        },
        created() {
            db.collection('footballers').orderBy("RC", "desc").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  const data = {
                        key: doc.id,
                        'ID': doc.data().ID,
                        'Cartoncino': doc.data().Cartoncino,
                        'CognomeNome': doc.data().CognomeNome,
                        'AnnodiNascita': doc.data()['Anno di nascita'],
                        'Squadra': doc.data().Squadra,
                        'Nazionalità': doc.data().Nazionalità,
                        'Piede': doc.data().Piede,
                        'MediaFantavoto': doc.data()['Media fantavoto'],
                        'MediaVoto': doc.data()['Media voto'],
                        'RC': doc.data().RC,
                        'RuoloM': doc.data().RuoloM,
                        'QuotazioneAttuale': doc.data().QuotazioneAttuale,
                        'QuotazioneIniziale': doc.data().QuotazioneIniziale,
                  }
                   this.footballers.push(data)     
                    })
                });
        },
        
        components:{
        TopBar,
        Footer,
    }
    }


</script>
<style scoped>
    .btn-primary {
        margin-right: 12px;
        border-bottom: 3px;
    }

    .Cartoncino{
          height: 150px;
          width: 120px;
    }

    .list{
        text-align: center;
        color: green;
    }

    .list2{
        text-align: center;
    }

    .Nome{
        text-align: center;

    }
</style>


