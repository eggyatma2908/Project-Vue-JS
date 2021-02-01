<template>
   <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Topupguide />
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
import Topupguide from '@/components/module/Topupguide.vue'
export default {
  name: 'Transfersuccess',
  components: {
    Header,
    Navbar,
    Footer,
    Topupguide
  }
}
</script>

<style scoped>

</style>
