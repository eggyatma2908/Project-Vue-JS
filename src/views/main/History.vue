<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Transactionhistory />
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
import Transactionhistory from '@/components/module/Transactionhistory.vue'

export default {
  name: 'History',
  components: {
    Header,
    Navbar,
    Footer,
    Transactionhistory
  }
}
</script>

<style scoped>

</style>
