<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style lang="scss">
  @import './assets/main.scss';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.3;
    text-align: center;
    margin: 40px 0;
  }
</style>
