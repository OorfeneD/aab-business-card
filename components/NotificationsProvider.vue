<template>
  <div class="absolute top-0 left-0 w-screen h-screen pointer-events-none">
    <notification v-for="notification, index in notifications" :key="index">
      {{ notification.text }}
    </notification>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Notification from './Notification.vue'
export default {
  components: { Notification },
  computed: {
    ...mapGetters(['notifications'])
  }
}
</script>

<style>

</style>
