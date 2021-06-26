<template>
  <img src="~assets/icons/icon-send.svg" alt="" class="absolute w-10 h-10 top-4 right-4 md:hidden" @click="clicked">
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['addNotification']),
    clicked () {
      if (navigator && navigator.canShare()) {
        navigator.share({
          url: window ? window.location.href : ''
        })
      } else {
        navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
          if (result.state === 'granted' || result.state === 'prompt') {
            navigator.clipboard.writeText(window ? window.location.href : '').then(function () {
              this.addNotification({ notificationText: 'Скопировано в буфер обмена!', lifetime: 5000 })
            }.bind(this), function () {
            })
          }
        })
      }
    }
  }
}
</script>

<style>

</style>
