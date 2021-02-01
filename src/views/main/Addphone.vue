<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Addphonenumber />
          </div>
        </div>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/module/Header.vue'
import Navbar from '@/components/module/Navbar.vue'
import Addphonenumber from '@/components/module/Addphonenumber.vue'
import Footer from '@/components/module/Footer.vue'

export default {
  name: 'Addphone',
  components: {
    Header,
    Navbar,
    Addphonenumber,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
