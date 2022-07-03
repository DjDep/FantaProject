<!-- Footer -->
<template>
<footer class="bg-success text-center text-white fixed-bottom">
     <!-- Section: Text -->
     <section class="mb-4 commento">
      <a class="navbar-brand" href="/">
      <img alt="logo" class="logo" src="@/assets/FantaProjectNew.png" width="150" height="150" />
     </a>
     </section>

  

    <div class="container p-4">

     <div class="row">
     <h5>Created by:</h5>

        <div class="col-lg-4 col-md-4 col-sm-12">
          <p>Dapit Damiano</p>
          <a class="btn btn-primary" href="https://it.linkedin.com/in/damiano-dapit-309395188?original_referer=https%3A%2F%2Fwww.google.com%2F" role="button" target="blank"><i class="fab fa-linkedin-in"></i></a>
        </div> 

        <div class="col-lg-4 col-md-4 col-sm-12">
          <p>Mazzetto Matteo</p>
          <a class="btn btn-primary" href="https://www.instagram.com/matteomazzetto_/" role="button" target="blank"><i class="fab fa-instagram"></i></a>
        </div> 

        <div class="col-lg-4 col-md-4 col-sm-12">
          <p>Favaro Mattia</p>
          <a class="btn btn-primary" href="https://it.linkedin.com/in/mattia-favaro-30aa56227?trk=people-guest_people_search-card" role="button" target="blank"><i class="fab fa-linkedin-in"></i></a>
        </div> 
       </div>
      </div>


    <div class="row">
      <h5>Strumenti:</h5>

        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
         <a class="nav-link"><router-link to="/list">Calciatori seria A</router-link></a>
        </div> 

        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">  
         <a class="nav-link"><router-link to="/teams">Squadre</router-link></a>        
        </div>

        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
         <a class="nav-link"><router-link to="/myteam">La mia squadra</router-link></a>        
        </div> 
       
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <a class="nav-link"><router-link to="/account">Account</router-link></a>
      </div>

    </div>
 
  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
    © 2022 Copyright:
    <a class="text-white" href="#">FantaProject</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->

</template>

<style scoped>
footer{
    height: 33%;
    overflow: scroll;
}
.social{
    background-color: lightgreen;
}

.text-white{
    text-decoration: none;
}
.commento{
    padding: 0px;
    margin: 0px;
}

.creators:hover{
    color:black;
}
.logo{
    margin: 10px;
}
.navbar-nav{
  text-align:right;
}
.nav-item{
  padding:0px;
  margin:0px;
}
.strumenti{
  padding:0px;
  margin:0px;
  width:auto;
  text-align:left;
}
.strumenti, li {
  display:inline;
}
li {
list-style-type: none;
padding: 0px;
margin:0px;
}

</style>