<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
</script>

<template>
    
    <div class="footbllers">

    <TopBar />
        <ul class="nav justify-content-center">
        <li class="nav-item submenu-items">
            <a class="nav-link submenu-itemHS">
                <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/atalanta.png" alt="Atalanta" href="#">
            </a>
        </li>
        <li class="nav-item submenu-items">
            <a class="nav-link">
                <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/bologna.png" alt="Bologna" href="#">
            </a>
        </li>
        <li class="nav-item submenu-items">
            <a class="nav-link">
                <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/venezia.png" alt="Venezia" href="#">
            </a>
        </li>
        <li class="nav-item submenu-items">
            <a class="nav-link">
                <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/salernitana.png" alt="Salernitana" href="#">
            </a>
        </li>
        </ul>
        <h1>Pagina delle squadre </h1>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


.nav-link {
    padding:0px;
    margin: 10px;

}

.iconHS { /* logo/icona */
    height: 50px;
    width: 50px;
    margin:  0px;
}
</style>




