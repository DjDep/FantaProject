<template>
<!--Home page del sito con 3 card che permettono il collegamento con le 3 sezioni del sito-->
        <div class="container text-center mx-auto">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <!--Card per il collegamento al listone (elenco dei calciatori)-->
                        <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div class="card homeCards">
                                <img src="@/campioncinoListone.png" class="card-img-top homeImage" alt="Listone">
                                <div class="card-body">
                                    <h5 class="card-title">Listone Calciatori</h5>
                                    <p class="card-text">Qui puoi trovare la lista completa dei calciatori della serie A</p>
                                    <router-link to="/list"><a class="btn btn-primary navButton">Vai alla pagina</a></router-link>
                                </div>
                            </div>
                        </div>
                        <!--Card per il collegamento alla lista delle squadre-->
                        <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div class="card homeCards">
                                <img src="@/logoSerieA.png" class="card-img-top homeImage" alt="Squadre serie A">
                                <div class="card-body">
                                    <h5 class="card-title">Squadre serie A</h5>
                                    <p class="card-text">Qui puoi trovare l'elenco delle squadre di serie A</p>
                                    <router-link to="/teams"><a class="btn btn-primary navButton">Vai alla pagina</a></router-link>
                                </div>
                            </div>
                        </div>
                        <!--Card per il collegamento alla mia squadra-->
                        <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div class="card homeCards">
                                <img src="@/PalloneSerieA.png" class="homeImage correctHeight" alt="La mia squadra">
                                <div class="card-body">
                                    <h5 class="card-title">La mia squadra</h5>
                                    <p class="card-text">Qui puoi trovare tutti i giocatori della tua squadra </p>
                                    <router-link to="/myteam"><a class="btn btn-primary navButton">Vai alla pagina</a></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts">

export default {
    name: "home",

    return: {
        windowWidth:window.innerWidth
    },

    methods: {
    //Assegnazione alla variabile windowWidth della larghezza attuale della finestra
    //La funzione viene chiamata ogni qualvolta la dimensione della finestra cambia (resize)
        onResize() {
            this.windowWidth = window.innerWidth
        }
    },

    //al mount della pagina si aggiunge l'event listener per la funzione onResize 
    mounted() {
        this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
        })
    },
    //rimozione dell'event listener prima del destroy
    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
}


</script>

<style scoped>
.row{
    display:flex;
    flex-direction:row;
    width:100%;
}

.container{
    max-width:100%;
    padding:0.5%;
    
}
.homeImage {
    height: 20rem;
    width: 14rem;
}
.homeCards {
    width: 16rem;
    text-align: center!important;;
    align-items: center;
    margin: 5rem; 
}

.navButton {
    background-color: rgb(0, 135, 68);
    border: rgb(0, 135, 68);
}
</style>