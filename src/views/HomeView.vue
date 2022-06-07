<!-- Home -->
<script>
import TheWelcome from '@/components/TheWelcome.vue'
import Footer from '@/components/Footer.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  components: {
    TopBar,
    Footer,
  }
}
</script>

<template>
  <main>
    <div>
          <TopBar />
    <Footer />
    </div>

    
  </main>
</template>

<style scoped>
</style>
