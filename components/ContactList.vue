<template>
  <div class="flex flex-col w-72 items-center">
    <Divider />
    <p class="mt-5">
      Контактная информация:
    </p>
    <a href="tel:+7 (926) 216-05-58" class="w-full h-10 my-1 mt-5 px-5 flex items-stretch justify-center">
      <img src="~assets/icons/icon-mobile-sm.svg" alt="" class="inline-block rounded-xl h-10 w-10">
      <p class="inline-flex text-green-800 font-bold bg-green-100 w-full items-center px-3">
        +7 (926) 216-05-58
      </p>
    </a>
    <a href="mailto:dr.amina.ask@gmail.com" class="w-full h-10 my-1 px-5 flex items-stretch">
      <img src="~assets/icons/icon-email-sm.svg" alt="" class="inline-block rounded-xl h-10 w-10">
      <p class="inline-flex text-green-800 font-bold bg-green-100 w-full items-center px-3">
        dr.amina.ask@gmail.com
      </p>
    </a>
    <a href="https://yandex.ru/maps/213/moscow/search/ГБУЗ%20«Госпиталь%20Ветеранов%20Войн%202»%20ДЗМ%20Волгоградский%20проспект%2C%20168%2C%20строение%201%2C%20Москва/" target="_blank" class="w-full h-12 my-1 mb-5 px-5 flex items-stretch justify-center">
      <img src="~assets/icons/icon-map.svg" alt="" class="inline-block rounded-xl h-12 w-12">
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
