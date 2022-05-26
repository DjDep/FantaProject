<script setup>

</script>

<template>
<nav class="navbar navbar-expand-sm bg-success navbar-dark p-3">
  <!-- Brand -->
  <a class="navbar-brand" href="/">
    <img alt="logo" class="logo" src="@/assets/logoApp.png" width="40" height="40" />
  </a>

  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link"><router-link to="/list">Calciatori seria A</router-link></a>
    </li>
    <li class="nav-item">
        <a class="nav-link"><router-link to="/teams">Squadre</router-link></a>
    </li>
    <li class="nav-item">
        <a class="nav-link"><router-link to="/myteam">La mia squadra</router-link></a>
    </li>
    <li class="nav-item" id="prova2">
        <a class="nav-link"><router-link to="/account">il mio account</router-link></a>
    </li>

    <!-- Dropdown -->
    <!--<li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">impostazioni</a>
        <a class="dropdown-item" href="#">il mio account</a>
        <a class="dropdown-item" href="#">Logout</a>
      </div>
    </li>-->
    <a id="prova"><i class="fa-brands fa-facebook"></i></a>
  </ul>
</nav>
</template>

<style>
  a {
      color: white;
      text-decoration: none;
  }
  a:hover {
      color: #10BDE8;
  }

  #prova2 {
    color: blue!important;
  }
</style>