<template>
  <div class="flex justify-center items-center flex-col w-full md:w-auto pt-5 mb-5">
    <div class="w-40 h-40 md:w-72 md:h-72 rounded-full border-8 border-white shadow-lg overflow-hidden md:mb-20 lg:mb-0">
      <img src="~assets/images/logo.jpg" alt="Logo image" class="">
    </div>
    <logo-name class="md:hidden" />
  </div>
</template>

<script>
import LogoName from './LogoName.vue'
export default {
  components: { LogoName }
}
</script>

<style scoped>

img {
  width: 100%;
  height: auto;
}
</style>
