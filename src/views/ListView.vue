
<!--
<template>
<div>
    <div class="row">
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
                    <tr v-for="(footballer, index) in footballers" :key="index">
                        <td>{{ footballer.ID }}</td>
                        <td>{{ footballer.AnnodiNascita }}</td>
                        <td><router-link :to ="{name: 'detail', params: {id: footballer.key}}">{{ footballer.CognomeNome }}</router-link></td>
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
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


  </div>

</template>

<script lang="ts">

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
                   this.footballers.push(data)     
                    })
                });
        },
  }



</script>
<style scoped>
    .btn-primary {
        margin-right: 12px;
    }
</style>
-->

<template>
<div>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped ">
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
                    <tr v-for="(footballer, index) in footballersLoaded" :key="index">
                       <!-- <td>{{ footballer.ID }}</td> -->
                        <td>{{ footballer.AnnodiNascita }} </td>
                        <td><router-link :to ="{name: 'detail', params: {id: footballer.key}}">{{ footballer.CognomeNome }}</router-link></td>
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
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

  <b-button 
  class="load-button" 
  @click="loadMore" 
  variant="success"
  >
  Carica altri giocatori
  </b-button>

  </div>

</template>

 <script lang="ts">
import  db  from '../main.js';

export default {
  
  data() {
    return {
      footballers: [],
      length: 10
    };
  },
  created() {
            db.collection('footballers').orderBy("RC", "desc").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  const data = {
                        key: doc.id,
                        'ID': doc.data().ID,
                        'AnnodiNascita': doc.data()['Anno di nascita'].replace("00:00:00", ""),
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
                   this.footballers.push(data)  
                     
                    })
                });
        },
  methods: {
    loadMore() {
      if (this.length > this.footballers.length) return;
      this.length = this.length + 10;
    },
  },
  computed: {
    footballersLoaded() {
      return this.footballers.slice(0, this.length);
    },
  },
};
</script>

<style scoped>
    .btn-primary {
        margin-right: 12px;
    }

    .load-button{
      margin: 40px;
    }
</style>




