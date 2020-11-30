<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Inputtransfer />
          </div>
        </div>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/module/Header.vue'
import Navbar from '@/components/module/Navbar.vue'
import Inputtransfer from '@/components/module/Inputtransfer.vue'
import Footer from '@/components/module/Footer.vue'

export default {
  name: 'Inputamounttransfer',
  components: {
    Header,
    Navbar,
    Inputtransfer,
    Footer
  }
}
</script>

<style scoped>

</style>
