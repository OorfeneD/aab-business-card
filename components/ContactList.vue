<template>
  <div class="flex flex-col w-72 items-center">
    <Divider />
    <p class="mt-5">
      Контактная информация:
    </p>
    <a href="tel:+7 (926) 216-05-58" class="w-full h-10 my-1 mt-5 px-5 flex items-stretch justify-center">
      <img src="https://picsum.photos/100" alt="" class="inline-block rounded-xl bg-green-900 h-10 w-10 absolute">
      <p class="inline-flex text-green-800 font-bold bg-green-100 w-full items-center px-3">
        +7 (926) 216-05-58
      </p>
    </a>
    <a href="mailto:dr.amina.ask@gmail.com" class="w-full h-10 my-1 px-5 flex items-stretch">
      <img src="https://picsum.photos/100" alt="" class="inline-block rounded-xl bg-green-900 h-10 w-10 absolute">
      <p class="inline-flex text-green-800 font-bold bg-green-100 w-full items-center px-3">
        dr.amina.ask@gmail.com
      </p>
    </a>
    <a href="http://www.google.com/maps/place/Волгоградский+пр-т.,+168,+Москва,+Россия,+109472/" target="_blank" class="w-full h-12 my-1 mb-5 px-5 flex items-stretch justify-center">
      <img src="https://picsum.photos/100" alt="" class="inline-block rounded-xl bg-green-900 h-12 w-12">
      <p class="inline-flex text-green-800 font-bold bg-green-100 w-full items-center px-1 text-xs">
        Москва, Волгоградский проспект, дом 168, строение 1
      </p>
    </a>
    <Divider />
  </div>
</template>

<script>
import Divider from './Divider.vue'
export default {
  components: { Divider }
}
</script>

<style>

</style>
