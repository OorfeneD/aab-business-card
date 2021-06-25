<template>
  <div class="flex justify-center items-center flex-col w-full pt-5 mb-5">
    <div class="w-40 h-40 rounded-full border-8 border-white shadow-lg overflow-hidden">
      <img src="~assets/images/logo.jpg" alt="Logo image" class="">
    </div>
    <p class="font-bold text-xl text-green-700 mt-1 sq-name">
      Аскерова Амина Джамаловна
    </p>
    <p class="">
      Врач-акушер-гинеколог
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@font-face {
  font-family: 'Kontora bolder';
  src: url('~assets/fonts/Kontora Bold.otf');
}
@font-face {
  font-family: 'Kontora';
  src: url('~assets/fonts/Kontora SemiBold.otf');
}
@font-face {
  font-family: 'OpenSans';
  src: url('~assets/fonts/OpenSans-Regular.ttf');
}
img {
  width: 100%;
  height: auto;
}
p {
  font-family: 'OpenSans' sans-serif;
}
.sq-name {
  font-family: 'Kontora bolder';
}
</style>
