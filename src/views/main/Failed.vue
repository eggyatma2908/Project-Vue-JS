<template>
   <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Failed />
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
import Failed from '@/components/module/Failed.vue'
export default {
  name: 'Transferfailed',
  components: {
    Header,
    Navbar,
    Footer,
    Failed
  }
}
</script>

<style scoped>

</style>
