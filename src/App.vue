<script>
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components:{
    TopBar,
    Footer,
  }
}
</script>

<template>
  <div id="app">
    <TopBar/>
    <router-view/>
    <Footer/>
  </div>
</template>
