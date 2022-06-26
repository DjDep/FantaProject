<template><!-- Footer -->
<footer class="text-center text-lg-start bg-light text-muted position-sticky">
  <!-- Section: Social media 
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="me-5 d-none d-lg-block">
      <span>This page is created by:</span>
    </div>
    

    
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://it.linkedin.com/in/damiano-dapit-309395188?original_referer=https%3A%2F%2Fwww.google.com%2F" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="all-item">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <a class="navbar-brand" href="/">
           <img alt="logo" class="logo" src="@/assets/FantaProjectNew.png" width="150" height="150" /></a>
          <p class="testo">
            Il fantacalcio è un gioco fantasport sul calcio, consistente nell'organizzare e 
            gestire squadre virtuali formate da calciatori reali.
          </p>
        </div>
        <!-- Grid column -->

        <!-- 
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
         -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 link-utili">
          <!-- Links -->
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
            <a class="nav-link footer-a"><router-link class=" text-secondary text-decoration-none" to="/account">Account</router-link></a>
          </p>
          <p>
            <a class="nav-link footer-a"><router-link class=" text-secondary text-decoration-none" to="/myteam">La mia squadra</router-link></a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Contact -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-contact">
          <!-- Links concact -->
          <h6 class="text-uppercase text-dark fw-bold mb-4">
            Contact
          </h6>
          

          <!--Contatto di Damiano (Linkedin)-->
            <a href="https://it.linkedin.com/in/damiano-dapit-309395188?original_referer=https%3A%2F%2Fwww.google.com%2F" class="me-4 text-reset text-decoration-none" target="blank">
             <p><i class="fab fa-linkedin me-3" ></i> Dapit Damiano</p>
            </a>

           <!--Contatto di Mattia (Linkedin)-->
            <a href="https://it.linkedin.com/in/mattia-favaro-30aa56227?trk=people-guest_people_search-card" class="me-4 text-reset text-decoration-none" target="blank">
             <p><i class="fab fa-linkedin me-3" ></i> Favaro Mattia</p>
            </a>

            <!--Contatto di Matteo (Instagram)-->
            <a href="https://www.instagram.com/matteomazzetto_/" class="me-4 text-reset text-decoration-none" target="blank">
             <p><i class="fab fa-instagram me-3" ></i> Mazzetto Matteo</p>
            </a>

        </div>
          <!--
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        
        -->

        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4 text-light" style="background-color: rgb(0,135,68);">
    © 2022 Copyright:
    <a class="text-light fw-bold text-decoration-none" href="#">FantaProject.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
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

</style>
