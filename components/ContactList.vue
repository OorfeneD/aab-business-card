<template>
  <div class="flex flex-col w-72 items-center sq-w-120">
    <Divider class="md:hidden" />
    <p class="mt-2 mb-3 md:hidden">
      Контактная информация:
    </p>
    <logo-name class="hidden md:flex" />
    <floating-socials class="hidden lg:flex" />
    <div class="flex flex-col justify-center w-full items-center md:flex-row md:flex-wrap">
      <contact-row href="tel:+79262160558" :src="require('@/assets/icons/icon-mobile-sm.svg')" text="+7 (926) 216-05-58" @click="phoneClick" />
      <contact-row href="mailto:dr.amina.ask@gmail.com" :src="require('@/assets/icons/icon-email-sm.svg')" text="dr.amina.ask@gmail.com" @click="phoneClick" />
      <contact-row
        href="https://yandex.ru/maps/213/moscow/search/ГБУЗ%20«Госпиталь%20Ветеранов%20Войн%202»%20ДЗМ%20Волгоградский%20проспект%2C%20168%2C%20строение%201%2C%20Москва/"
        big
        text-small
        :src="require('@/assets/icons/icon-map.svg')"
        :text="`Москва, Волгоградский проспект, дом 168, строение 1`"
        class="lg:mt-5"
      />
    </div>
    <div class="w-full my-1 h-1 md:hidden" />
    <Divider class="md:hidden" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ContactRow from './ContactRow.vue'
import Divider from './Divider.vue'
import FloatingSocials from './FloatingSocials.vue'
import LogoName from './LogoName.vue'

export default {
  components: { Divider, ContactRow, LogoName, FloatingSocials },
  methods: {
    ...mapActions(['addNotification']),
    phoneClick (event) {
      if (window) {
        if (window.innerWidth > 768) {
          navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
            if (result.state === 'granted' || result.state === 'prompt') {
              navigator.clipboard.writeText(event.target.innerText).then(function () {
                this.addNotification({ notificationText: 'Скопировано в буфер обмена!', lifetime: 5000 })
              }.bind(this), function () {
              })
            }
          })
          event.preventDefault()
          return false
        }
      }
    },
    mailClick (event) {
      if (window) {
        if (window.innerWidth > 768) {
          navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
            if (result.state === 'granted' || result.state === 'prompt') {
              navigator.clipboard.writeText(event.target.innerText).then(function () {
                this.addNotification('Скопировано в буфер обмена!', 5000)
              }, function () {
              })
            }
          })
          event.preventDefault()
          return false
        }
      }
    }
  }
}
</script>

<style>
@media screen and (min-width: 768px) {
  .sq-w-120 {
    width: 42rem;
  }
}
</style>
