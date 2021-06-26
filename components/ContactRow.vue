<template>
  <a :href="href" :target="big ? '_blank' : ''" :class="`w-full ${!big? 'md:w-56 md:text-sm lg:text-base lg:w-64 h-10' : 'md:w-80 lg:text-base lg:w-96 h-12'} my-1 mt-1 mx-3 md:mx-1 rounded-xl bg-green-100 opacity-75 flex items-stretch justify-center`">
    <img :src="src" alt="" :class="`inline-block rounded-xl ${!big? 'h-10 w-10' : 'h-12 w-12'} sq-bg-1 opacity-100`">
    <p :class="`inline-flex text-green-800 font-bold  w-full items-center ${ textSmall ? 'px-1 text-xs lg:text-base' : 'px-3'} opacity-100`">
      {{ text }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    big: {
      type: Boolean,
      default: false
    },
    wFull: {
      type: Boolean,
      default: true
    },
    textSmall: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
img {
  z-index: 2;
}
@font-face {
  font-family: 'Kontora';
  src: url('~assets/fonts/Kontora SemiBold.otf');
}
p {
  font-family: 'Kontora', sans-serif;
}
</style>
