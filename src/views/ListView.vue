
<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-8 col-sm-6">
            <table class="table table-striped table-fixed">
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
                    <tr v-for="(footballer, index) in footballersLoaded" :key="index">
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
                        'Cartoncino': doc.data().Cartoncino,
                        'AnnodiNascita': doc.data()['Anno di nascita'].replace("00:00:00", ""),
                        'CognomeNome': doc.data().CognomeNome,
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

    .load-button{
      margin: 40px;
    }
</style>




