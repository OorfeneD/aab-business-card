<template>
  <div class="container flex flex-col md:flex-row lg:flex-col justify-between md:justify-center items-center md:pb-20">
    <Header />
    <contact-list />
    <Footer class="md:hidden" />
  </div>
</template>

<script>
import ContactList from '~/components/ContactList.vue'
import Header from '~/components/Header.vue'

export default {
  components: { Header, ContactList },
  mounted () {
    if (window) {
      this.resizedWindow()
      window.addEventListener('resize', this.resizedWindow)
    }
  },
  methods: {
    resizedWindow () {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 600px;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  max-height: 100vh;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
@font-face {
  font-family: 'Kontora';
  src: url('~assets/fonts/Kontora SemiBold.otf');
}
p {
  font-family: 'Kontora', sans-serif;
}
</style>
