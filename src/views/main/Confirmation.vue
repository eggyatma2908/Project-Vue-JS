<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Confirmationtransfer />
          </div>
        </div>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/module/Header.vue'
import Navbar from '@/components/module/Navbar.vue'
import Confirmationtransfer from '@/components/module/Confirmationtransfer.vue'
import Footer from '@/components/module/Footer.vue'

export default {
  name: 'Confirmation',
  components: {
    Header,
    Navbar,
    Confirmationtransfer,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
