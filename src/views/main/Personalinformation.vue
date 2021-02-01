<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Personalinfo />
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
import Personalinfo from '@/components/module/Personalinformation.vue'

export default {
  name: 'Personalinformation',
  components: {
    Header,
    Navbar,
    Footer,
    Personalinfo
  }
}
</script>

<style scoped>

</style>
