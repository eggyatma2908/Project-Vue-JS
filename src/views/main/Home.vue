<template>
  <div>
    <Header />
      <main>
        <div class="container">
          <div class="row mt-4">
            <Navbar />
            <Main />
          </div>
        </div>
      </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/module/Header.vue'
import Navbar from '@/components/module/Navbar.vue'
import Footer from '@/components/module/Footer.vue'
import Main from '@/components/module/Main.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
    Footer,
    Main
  }
}
</script>
