<template>
   <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Success />
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
import Success from '@/components/module/Success.vue'
export default {
  name: 'Transfersuccess',
  components: {
    Header,
    Navbar,
    Footer,
    Success
  }
}
</script>

<style scoped>

</style>
