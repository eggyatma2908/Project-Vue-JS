<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Profileuser />
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
import Profileuser from '@/components/module/Profile.vue'

export default {
  name: 'Profile',
  components: {
    Header,
    Navbar,
    Footer,
    Profileuser
  }
}
</script>

<style lang="scss" scoped>

</style>
