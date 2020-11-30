<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <History />
          </div>
        </div>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/module/Header.vue'
import Navbar from '@/components/module/Navbar.vue'
import Footer from '@/components/module/Footer.vue'
import History from '@/components/module/History.vue'

export default {
  name: 'History',
  components: {
    Header,
    Navbar,
    Footer,
    History
  }
}
</script>

<style scoped>

</style>
