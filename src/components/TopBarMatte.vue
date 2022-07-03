<script lang="ts">
//src= "script.js" defer 
//import searchfootballers from '../script.js'
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
ì                  }           
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

<template> <!-- Per redenderlo responsive provare a farlo come il footer, ovvero row e col, senza li e ul -->

<!--
 <div class="nav-all"> <!--Tutta la navbar

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

  <section class="mb-4"> <!--Logo in alto a sx 
      <a class="navbar-brand" href="/">
      <img alt="logo" class="logo" src="@/assets/LogoFB.png" width="200" height="150" />
     </a>
    </section>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     
     <!-- Calciatori seria A
      <li class="nav-item ">
        <a ><router-link class="nav-link text-success" to="/list">Calciatori seria A</router-link></a>
      </li>

     <!-- Squadre 
      <li class="nav-item ">
        <a><router-link class="nav-link text-light" to="/teams">Squadre</router-link></a>
      </li>
      
    <!-- La mia squadra 
       <li class="nav-item ">
       <a ><router-link class="nav-link" to="/myteam">La mia squadra</router-link></a>
       </li>

    <!-- il mio account 
       <li class="nav-item ">
       <a><router-link class="nav-link" to="/account">il mio account</router-link></a>
       </li>
    </ul>

    <!-- RICERCA GIOCATORI/SQUADRE--
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">

    </form>
    
  </div>
 </nav>

</div>
-->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
<div class="container-fluid">

  <a class="navbar-brand" href="#">
   <img alt="logo" class="logo" src="@/assets/LogoFB.png" width="200" height="150" />
  </a>

<!-- Menu a tendina quando lo schermo si rimpicciolisce -->
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

  <li class="nav-item "> <!-- Il mio account -->
       <a><router-link class="dropdown-item" to="/account">Account</router-link></a>
       </li>

   <li class="nav-item "> <!-- Squadra -->
       <a ><router-link class="dropdown-item" to="/myteam">La mia squadra</router-link></a>
       </li>

  </div>
</div>



  </button>

  <div class="collapse navbar-collapse" id="navbarContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item "> <!-- Calciatori Seria A -->
        <a ><router-link class="nav-link" id="navbarContent" to="/list">Calciatori seria A</router-link></a>
      </li>

      <li class="nav-item "> <!-- Squadre -->
        <a><router-link class="nav-link text-light" to="/teams">Squadre</router-link></a>
      </li>

<!--
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menù
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="dropdown-item "> 
        <a><router-link class="dropdown-link text-light" to="/teams">Squadre</router-link></a>
      </li>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      -->
      
      
      <li class="nav-item "> <!-- Il mio account -->
       <a><router-link class="nav-link" to="/account">Account</router-link></a>
       </li>

       <li class="nav-item "> <!-- Squadra -->
       <a ><router-link class="nav-link" to="/myteam">La mia squadra</router-link></a>
       </li>


     </ul>
    
     
<!--
    <form class="d-flex navbar-item">
    
      <input class="form-control me-2" type="search" placeholder="Search" id="search" aria-label="Search" data-search>
      
      <button class="btn btn-outline-success" type="submit">Search</button>
    
    </form>
  -->

  <!-- Search Bar -->
  <input type="text" placeholder="Search">
   <v-select 
        :options="listone" 
        
        item-text="CognomeNome"
        v-model="selected"/>
   
   <i class="fas fa-search" id="search-icon"></i>
   <div class="search_bx2"
   v-for="(my,index) in myTeam" :key="index">
     <a class="a-search" href="#" >
     <img class="img-search" :src="my.Cartoncino" :alt="my.CognomeNome">
     
      <h6> {{ my.CognomeNome }} </h6>
      <p> {{my.Squadra}} </p> 
     
    </a>
    </tbody>
   </table>
  
  
  </div>
  </div>

  
</div>

   

</div>
   </div>
  </div>
</nav>

</template>

<style scoped>

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

}

.navbar{
    padding: 0px;
    padding: 0px;
}

.search {
  position: relative;
  /*align-item: center;*/
  position: flex;
  color: #fff;


}

 .search .search_bx2{
  position: absolute;
  width: 200px;
  height: 300px;
  /*border: 1px solid #fff;*/
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
   /*border: 1px solid #fff;*/
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

