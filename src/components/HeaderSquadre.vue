<!-- creazione di un component per la navigazione tramite i loghi delle squadre -->
<template>
  <div class="giulia">
    <div  class= "matteo" v-for="(squadra, index) in squadre" :key="index">
    <img :src="squadra.Logo">
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
        created() {
            db.collection('teams').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  const data = {
                    key: doc.id,
                        'Squadra': doc.data().Squadra,
                        'Logo': doc.data().Logo,
                  }
                  console.log(data)
                   this.squadre.push(data) 
                    })
                });
}
}
</script>


<style scoped>
img {
    height: 60px;
    width: 60px;

}

.matteo{
    display: inline-block;
   text-align: center;
}
.giulia{
    overflow: auto;
    white-space: nowrap;  
}


div.scrollmenu a:hover {
  background-color: #777;
}


</style>