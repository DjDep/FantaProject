<script>
</script>

<template>
<nav class="navbar navbar-expand-sm bg-success navbar-dark p-3">
  <!-- Brand -->
  <a class="navbar-brand" href="/">
    <img alt="logo" class="logo" src="@/assets/logoFP.png" width="80" height="80" />
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
  </ul>
</nav>
</template>

<style scoped>
  a {
      color: white;
      text-decoration: none;
  }
  a:hover {
      color: #10BDE8;
  }
</style>