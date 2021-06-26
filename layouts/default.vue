<template>
  <div>
    <div class="sq-bg-f" />
    <div class="sq-bg-s" />
    <Nuxt />
  </div>
</template>

<style>
.sq-bg-f {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('~assets/icons/mobile/background-atop.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  font-size: 0;
}
.sq-bg-s {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('~assets/icons/mobile/background-down.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
  font-size: 0;
}
@media screen and (min-width: 768px) {
  .sq-bg-f {
    background-image: url('~assets/icons/tablet/background-atop.svg');
  }
  .sq-bg-s {
    background-image: url('~assets/icons/tablet/background-down.svg');
  }
}
@media screen and (min-width: 1024px) {
  .sq-bg-f {
    background-image: url('~assets/icons/desktop/background-right.svg');
    background-position: right;
  }
  .sq-bg-s {
    background-position: left;
    background-image: url('~assets/icons/desktop/background-left.svg');
  }
}
.sq-bg-1 {
  background-color: #5BA8A6;
  opacity: 0.95;
}
.sq-bg-2 {
  background-color: #5BA8A6;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
