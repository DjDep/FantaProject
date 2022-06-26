<!-- creazione di un component per la navigazione tramite i loghi delle squadre -->
<template>
  <div class="giulia">
    <div  class= "matteo" v-for="(squadra, index) in squadre" :key="index">
    <div class="container-team">
    <a href="#"  >
     <img :src="squadra.Logo" :alt="squadra.Squadra" :title="squadra.Squadra">
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