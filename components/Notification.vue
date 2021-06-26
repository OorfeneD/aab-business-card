<template>
  <div :class="`absolute p-2 bottom-2 sq-notification bg-gray-700 text-white w-56 rounded-xl text-sm text-center ${ clicked ? 'hidden' : ''}`" @click="clickedAction">
    <slot>Привет!</slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    clicked: false
  }),
  methods: {
    clickedAction () {
      this.clicked = true
    }
  }
}
</script>

<style>
.sq-notification {
  transform: translateX(-50%);
  left: 50%;
}
</style>
