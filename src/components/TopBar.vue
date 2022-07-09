
<template>
  <nav class="navbar navbar-expand-lg mainNavbar">
    <div class="container-fluid text-center">
      <!--Logo sito, che al click porta alla home-->
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
          <li class="nav-item "> <!-- Calciatori Seria A -->
            <a ><router-link class="dropdown-item" to="/list">Calciatori seria A</router-link></a>
          </li>
          <li class="nav-item "> <!-- Squadre -->
            <a><router-link class="dropdown-item" to="/teams">Squadre</router-link></a>
          </li>
          <li class="nav-item "> <!-- Squadra -->
            <a ><router-link class="dropdown-item" to="/myteam">La mia squadra</router-link></a>
          </li>
        </div>
      </div>
      <!--Menù principale top bar-->
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
.logo{
    padding: 0px;
    margin:0px;
    border: 5px;
}
.nav-link {
    margin:0px; 
    color: #fff;
}

.navbar{
    padding: 0px;
}

</style>

