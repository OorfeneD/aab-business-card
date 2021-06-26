<template>
  <a :href="href" :class="`${wFull ? 'w-full' : ''} ${!big? 'h-10' : 'h-12'} my-1 mt-1 mx-3 rounded-xl bg-green-100 flex items-stretch justify-center`">
    <img :src="src" alt="" :class="`inline-block rounded-xl ${!big? 'h-10 w-10' : 'h-12 w-12'} transform scale-110`">
    <p :class="`inline-flex text-green-800 font-bold  w-full items-center ${ textSmall ? 'px-1 text-xs' : 'px-3'}`">
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
</style>
