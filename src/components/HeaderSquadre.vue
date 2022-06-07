<!-- creazione di un component per la navigazione tramite i loghi delle squadre -->
<template>

<!-- 
<b-container class="navbarHS">
<b-row> 
    <b-col class="submenu-itemHS">
        <b-img class="iconHS" thumbnail src="https://content.fantacalcio.it/web/img/team/atalanta.png" alt="Atalanta" href="#"></b-img>
    </b-col>
    <b-col class="submenu-itemHS">
        <b-img class="iconHS" thumbnail src="https://content.fantacalcio.it/web/img/team/bologna.png" alt="Bologna"href="#"></b-img>
    </b-col>
    <b-col class="submenu-itemHS">
        <b-img class="iconHS" thumbnail src="https://content.fantacalcio.it/web/img/team/inter.png" alt="Inter"href="#"></b-img>
    </b-col>
</b-row>
</b-container>
-->
<!--

//Questo è un possibile ciclo
    <template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <div>Item: {{ item.title }}</div> //nome squadra
      <div>Price: {{ item.price }}</div> //link foto
    </div>
  </div>
</template>

<script>
export default {
  name: 'YouComp',
  data() {
    return {
      items: [ //API delle squadre
        { title: 'Americano', price: '32$' },
        { title: 'Espresso', price: '40$' },
        { title: 'Cappuccino', price: '20$' },
      ],
    };
  },
};
</script>
-->

<ul class="nav justify-content-center">
    <li class="nav-item submenu-items">
        <a class="nav-link">
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
    <li class="nav-item submenu-items">
        <a class="nav-link">
             <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/inter.png" alt="Inter" href="#">
        </a>
    </li>
     <li class="nav-item submenu-items">
        <a class="nav-link">
             <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/napoli.png" alt="Napoli" href="#">
        </a>
    </li>
    <li class="nav-item submenu-items">
        <a class="nav-link">
             <img class="iconHS" src="https://content.fantacalcio.it/web/img/team/verona.png" alt="HellasVerona" href="#">
        </a>
    </li>
    
    </ul>
</template>

<script >

</script>

<style >

.nav-link {
    padding:0px;
    margin: 10px;
    height: auto;
    width: auto;

}
.submenu-items:hover{
    background-color:lightblue;
}

.iconHS { /* logo/icona */
    height: 55px;
    width: 55px;
    margin:  0px;
    padding:0px;
}
.justify-content-center {
    background-color: lightgreen;
    margin: 0px;
    padding: 0px;

}


</style>