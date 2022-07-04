<script lang="ts">
import db from '../main.js'

export default {
    name: "myTeam",
  data: function () {
    return{
      myTeam: [],
      dati:  {
        CognomeNome: null,
        squadra: null,
      },
      listone:[],
      selected:null
    }
  },

methods: {

    getText(giocatore){
      return `${giocatore.CognomeNome} - ${giocatore.Squadra} - ${giocatore.Squadra}`
    },
    loadListone(){
              db.collection('footballers').orderBy("CognomeNome", "desc").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  const data = {
                        key: doc.id,
                        'ID': doc.data().ID,
                        'CognomeNome': doc.data().CognomeNome,
                        'Cartoncino': doc.data().Cartoncino,
                        'Squadra': doc.data().Squadra,
                  }           
                   this.listone.push(data)   

                    })
                });
    },

    readData(){
      db.collection('myTeam').get().then(querySnapshot => {
        querySnapshot.forEach (doc =>  {
          console.log(doc.data())
          const data =  {
            key: doc.id,
            'ID': doc.data().ID,
            'CognomeNome': doc.data().CognomeNome,
            'Cartoncino': doc.data().Cartoncino,
            'Squadra': doc.data().Squadra,
          }
          console.log("fdfdffd")
          this.myTeam.push(data)      
        })
      }) 
    },

},
}

</script>

<template>

<nav class="navbar navbar-expand-lg mainNavbar">
  <div class="container-fluid text-center">

    <router-link to="/">
      <a class="navbar-brand">
      <img alt="logo" class="logo" src="@/assets/LogoFB.png" width="200" height="150" />
      </a>
    </router-link>

  <!-- Menu dropdown quando lo schermo schende sotto i 992px -->
    <div class="dropdown btnposition ">
        <button class="navbar-toggler btnmenu btn btn-success dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Menù
        </button>

      <div class="dropdown-menu container-fluid">
        <li class="nav-item "> <!-- Squadre -->
          <a><router-link class="dropdown-item" to="/teams">Squadre</router-link></a>
        </li>
        <li class="nav-item "> <!-- Calciatori Seria A -->
          <a ><router-link class="dropdown-item" to="/list">Calciatori seria A</router-link></a>
        </li>
        <li class="nav-item "> <!-- Squadra -->
          <a ><router-link class="dropdown-item" to="/myteam">La mia squadra</router-link></a>
        </li>
      </div>
    </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item "> <!-- Calciatori Seria A -->
            <a ><router-link class="nav-link" to="/list">Calciatori seria A</router-link></a>
          </li>
          <li class="nav-item "> <!-- Squadre -->
            <a><router-link class="nav-link" to="/teams">Squadre</router-link></a>
          </li>
          <li class="nav-item "> <!-- Squadra -->
            <a ><router-link class="nav-link" to="/myteam">La mia squadra</router-link></a>
          </li>
        </ul>
      </div>
  </div>
</nav>

</template>

<style scoped>
.mainNavbar{
  background-color: rgb(0, 135, 68);;
}

.btnposition{
  margin: 40px;
  padding: 5px;
}

.btnmenu{
  padding: 10px;
  margin: 2px;
}

.dropmenu-item{
  margin: 5px;
}

.logo{
    padding: 0px;
    margin:0px;
    border: 5px;
}
.testo{
    margin:5px;

}
.nav-link {
    margin:0px; 
    color: #fff;
}

.navbar{
    padding: 0px;
}

.search {
  position: relative;
  position: flex;
  color: #fff;
}

 .search .search_bx2{
  position: absolute;
  width: 200px;
  height: 300px;
  top: 35px;
  left: -10px;
  background: rgb(184, 184, 184, .3);
  border-radius:10px; 
}

 .search .search_bx2 .a-search{
   text-decoration: none;
   color: #fff;
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;
   transition: .3s linear;
}

.search .search_bx2 .a-search:hover {
   background: rgb(184, 184, 184, .6);
}

 .search .search_bx2 .a-search .img-search{
   width: 55px;
   height: 50px;
   border-radius: 5px;
   margin: 0px 5px
}

.search .search_bx2 .a-search .content2{
   color: #fff;
}

.search .search_bx2 .a-search .content2 h6{
   font-size: 13px;
}

.search .search_bx2 .a-search .content2 p { 
   color: rgb(255, 255, 255, .7);
   font-size: 11px;
   font-weight: 500;
}

</style>

