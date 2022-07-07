<!--component per la navigazione nel dettaglio delle squadre attraverso i loghi-->
<template>
  <div class="mainContainer">
    <div  class= "containerLoghi" v-for="(squadra, index) in squadre" :key="index">
      <div class="container-team">
        <!--Elenco loghi squadre che al click porta alla pagina di dettaglio della squadra selezionata-->
        <a>
          <router-link :to="{name: 'teamsDetail', params: {id:squadra.key}}">
          <img :src="squadra.Logo" :alt="squadra.Squadra" :title="squadra.Squadra"></router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<script >
import db from '../main.js'

export default {
  name: 'HeaderSquadre',
     data() {
            return {
                squadre: []
            }
        },
      //funzione che alla creazione della pagina richiama la squadra e il suo logo dalla collezione teams del Db
      created() {
          db.collection('teams').get().then(querySnapshot => {
              querySnapshot.forEach(doc => {
                const data = {
                  key: doc.id,
                      
                      'Squadra': doc.data().Squadra,
                      'Logo': doc.data().Logo,
                }
                  this.squadre.push(data) 
                  })
              });
  }
}

</script>


<style scoped>
.container-team{
  margin: 5px 10px;
  padding: 5px;
  border: 5px;
}
.container-team:hover{
  background-color: lightgreen;
}

img {
    height: 55px;
    width: 55px;
}

.containerLoghi{
    display: inline-block;
   text-align: center;
}
.mainContainer{
    overflow: auto;
    white-space: nowrap;  
}

</style>