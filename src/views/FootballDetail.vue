
<template>

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
                    <tr v-for="detail in dettaglio" :key="detail.ID">
                        <td>{{ detail.AnnodiNascita }}</td>
                        <td>{{ detail.CognomeNome }}</td>
                        <td>{{ detail.MediaFantavoto }}</td>
                        <td>{{ detail.MediaVoto }}</td>
                        <td><img :src="detail.Cartoncino"> </td>
                        <td>{{ detail.Squadra }}</td>
                        <td>{{ detail.RC }}</td>
                        <td>{{ detail.RuoloM }}</td>
                        <td>{{ detail.QuotazioneAttuale }}</td>
                        <td>{{ detail.QuotazioneIniziale }}</td>
                        <td>{{ detail.Piede }}</td>
                        <td>{{ detail.Nazionalità }}</td>
                    </tr>
                </tbody>
            </table>
</template>

<script>
    import db from '../main.js'

export default {
    name: "detail",
    data: function () {
        return{
            id: this.$route.params.id,
            dettaglio : []
        }
    },


 created() {
    console.log(this.id)
            db.collection('footballers').doc(this.id).get().then(doc => {
                  const data = {
                    //key: doc.id,
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
            console.log("qualcosa")
            this.dettaglio.push(data)     
            });
        },
}
</script>