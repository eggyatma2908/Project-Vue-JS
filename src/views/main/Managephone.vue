<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Managephonenumber />
          </div>
        </div>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/module/Header.vue'
import Navbar from '@/components/module/Navbar.vue'
import Managephonenumber from '@/components/module/Managephonenumber.vue'
import Footer from '@/components/module/Footer.vue'

export default {
  name: 'Managephone',
  components: {
    Header,
    Navbar,
    Managephonenumber,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
