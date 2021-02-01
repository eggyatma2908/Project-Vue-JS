<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Searchreceiver />
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
import Searchreceiver from '@/components/module/Searchreceiver.vue'

export default {
  name: 'Transfer',
  components: {
    Header,
    Navbar,
    Footer,
    Searchreceiver
  }
}
</script>

<style scoped>

</style>
