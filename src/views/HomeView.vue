<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="card homeCards">
                    <img src="@/campioncinoListone.png" class="card-img-top homeImage" alt="Listone">
                    <div class="card-body">
                        <h5 class="card-title">Listone Calciatori</h5>
                        <p class="card-text">Qui puoi trovare la lista completa dei calciatori della serie A</p>
                        <router-link to="/list"><a class="btn btn-primary navButton">Vai alla pagina</a></router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="card homeCards">
                    <img src="@/logoSerieA.png" class="card-img-top homeImage" alt="Squadre serie A">
                    <div class="card-body">
                        <h5 class="card-title">Squadre serie A</h5>
                        <p class="card-text">Qui puoi trovare l'elenco delle squadre di serie A</p>
                        <router-link to="/teams"><a class="btn btn-primary navButton">Vai alla pagina</a></router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="card homeCards">
                    <img src="@/NewLogoTeam.png" class=" card-img-top homeImage" alt="La mia squadra">
                    <div class="card-body">
                        <h5 class="card-title">La mia squadra</h5>
                        <p class="card-text">Qui puoi trovare tutti i giocatori della tua squadra </p>
                        <router-link to="/myteam"><a class="btn btn-primary navButton">Vai alla pagina</a></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import db from '../main.js'

export default {
    name: "home",

    }

</script>

<style scoped>
    .homeImage {
        height: 20rem;
        width: 14rem;
    }

    .homeCards {
        width: 18rem;
        text-align: center!important;;
        align-items: center;
        margin: 5rem;
    }

    .navButton {
        background-color: rgb(0, 135, 68);
        border: rgb(0, 135, 68);
    }

</style>