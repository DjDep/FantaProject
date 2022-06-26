
<template>
<!--<nav class="navbar navbar-expand-sm bg-success navbar-dark p-3">

  <a class="navbar-brand" href="/">

  <ul>
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
  </a>
</nav>-->

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Hidden brand</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
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