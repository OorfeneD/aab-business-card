<template>
  <div class="flex flex-col w-72 items-center">
    <Divider />
    <p class="mt-2 mb-3">
      Контактная информация:
    </p>
    <contact-row href="tel:+79262160558" w-full :src="require('@/assets/icons/icon-mobile-sm.svg')" text="+7 (926) 216-05-58" />
    <contact-row href="mailto:dr.amina.ask@gmail.com" w-full :src="require('@/assets/icons/icon-email-sm.svg')" text="dr.amina.ask@gmail.com" />
    <contact-row
      href="https://yandex.ru/maps/213/moscow/search/ГБУЗ%20«Госпиталь%20Ветеранов%20Войн%202»%20ДЗМ%20Волгоградский%20проспект%2C%20168%2C%20строение%201%2C%20Москва/"
      w-full
      big
      text-small
      :src="require('@/assets/icons/icon-map.svg')"
      text="Москва, Волгоградский проспект, дом 168, строение 1"
    />
    <div class="w-full my-1 h-1" />
    <Divider />
  </div>
</template>

<script>
import ContactRow from './ContactRow.vue'
import Divider from './Divider.vue'
export default {
  components: { Divider, ContactRow }
}
</script>

<style>

</style>
