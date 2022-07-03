<script>
//src= "script.js" defer 
//import searchfootballers from '../script.js'
import  db  from '../main.js';

</script>

<template> <!-- Per redenderlo responsive provare a farlo come il footer, ovvero row e col, senza li e ul -->



<nav class="navbar navbar-expand-lg mainNavbar">
<div class="container-fluid">

  <router-link to="/">
    <a class="navbar-brand">
    <img alt="logo" class="logo" src="@/assets/LogoFB.png" width="200" height="150" />
    </a>
  </router-link>

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

   <li class="nav-item "> <!-- Squadra -->
       <a ><router-link class="dropdown-item" to="/myteam">La mia squadra</router-link></a>
       </li>

  </div>
</div>

  <div class="collapse navbar-collapse" id="navbarContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item "> <!-- Calciatori Seria A -->
        <a ><router-link class="nav-link" id="navbarContent" to="/list">Calciatori seria A</router-link></a>
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
    padding: 0px;
}

.search {
  position: relative;
  /*align-item: center;*/
  position: flex;
  color: #fff;


}

 .search .search-bx2{
  position: absolute;
  width: 200px;
  height: 300px;
  /*border: 1px solid #fff;*/
  top: 35px;
  left: -10px;
  background: rgb(184, 184, 184, .3);
  border-radius:10px; 
}

 .search .search-bx2 .img-search{
   text-decoration: none;
   color: #fff;
   width: 100px;
   height: 50px;


  
}


</style>

