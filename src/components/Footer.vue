<template>
<!--Footer-->
<footer class="text-center text-lg-start bg-light text-muted position-sticky">
  <section class="all-item">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <!--logo e breve descrizione-->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <a class="navbar-brand" href="/">
           <img alt="logo" class="logo" src="@/assets/FantaProjectNew.png" width="150" height="150" /></a>
          <p class="testo">
            Il fantacalcio è un gioco fantasport sul calcio, consistente nell'organizzare e 
            gestire squadre virtuali formate da calciatori reali.
          </p>
        </div>

        <!--Link principali del sito-->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 link-utili">
          <h6 class="text-uppercase fw-bold mb-4 text-dark">
            Link utili
          </h6>
          <p>
            <a class="nav-link footer-a"><router-link class=" text-secondary text-decoration-none" to="/list">Calciatori Serie A</router-link></a>
          </p>
          <p>
            <a class="nav-link footer-a"><router-link class=" text-secondary text-decoration-none" to="/teams">Squadre</router-link></a>        
          </p>
          <p>
            <a class="nav-link footer-a"><router-link class=" text-secondary text-decoration-none" to="/myteam">La mia squadra</router-link></a>
          </p>
        </div>
        <!-- Contatti-->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-contact">
          <h6 class="text-uppercase text-dark fw-bold mb-4">
            Contact
          </h6>
            <a href="https://it.linkedin.com/in/damiano-dapit-309395188?original_referer=https%3A%2F%2Fwww.google.com%2F" class="me-4 text-reset text-decoration-none" target="blank">
             <p>
              <i class="fab fa-linkedin me-3" ></i> 
              Dapit Damiano
              </p>
            </a>
            <a href="https://it.linkedin.com/in/mattia-favaro-30aa56227?trk=people-guest_people_search-card" class="me-4 text-reset text-decoration-none" target="blank">
             <p>
              <i class="fab fa-linkedin me-3" ></i>
              Favaro Mattia
              </p>
            </a>
            <a href="https://www.instagram.com/matteomazzetto_/" class="me-4 text-reset text-decoration-none" target="blank">
             <p>
              <i class="fab fa-instagram me-3" ></i> 
              Mazzetto Matteo
              </p>
            </a>
        </div>
      </div>
    </div>
  </section>

  <!--Copyright-->
  <div class="text-center p-4 text-light copyright">
    © 2022 Copyright:
    <a class="text-light fw-bold text-decoration-none">FantaProject.com</a>
  </div>
</footer>
</template>

<style scoped>
  .logo{
      padding: 0px;
      margin:0px;
  }

  .testo{
      margin:10px;
  }

  .link-utili,
  .text-contact{
    padding: 20px;
    
  }

  a.nav-link{
    padding:0px;
  }

  .copyright{
    background-color: rgb(0,135,68);
  }

</style>
