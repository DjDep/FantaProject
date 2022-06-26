<script>
import TopBarMatte from '@/components/TopBarMatte.vue';
import Footer from '@/components/Footer.vue';

export default {
  components:{
    TopBarMatte,
    Footer,
  }
}
</script>

<template>
  <div id="app">
  <TopBarMatte/>
  <router-view/>
  <Footer/>
  </div>
</template>
