<template>
  <div :class="`flex-row justify-evenly items-center ${ absolute ? 'absolute top-5 right-5 p-2 w-36' : 'w-48 px-4 mb-5 mt-2' }`">
    <a href="https://instagram.com/dr_amina_askerova/" target="_blank" rel="noopener noreferrer">
      <img src="~assets/icons/icon-inst.svg" alt="" class="w-12 h-12 rounded-xl sq-shadow sq-bg-1">
    </a>
    <a href="https://www.facebook.com/amina.askerova.7" target="_blank" rel="noopener noreferrer">
      <img src="~assets/icons/icon-facebook.svg" alt="" class="w-12 h-12 rounded-xl sq-shadow sq-bg-1">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    absolute: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
