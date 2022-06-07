<!-- La mia Squadra-->
<template>
<div class="footbllers">
    <TopBar/>
        <h1>La mia squadra</h1>
    
    <Footer/>
    </div>

</template>

<style scoped>
  
</style>
<script>
import TopBar from '../components/TopBar.vue'
import Footer from '../components/Footer.vue'

export default {
    components:{
        TopBar,
        Footer,
    }
}
</script>