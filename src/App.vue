<template>
  <div id="app">
    <img src="./assets/logo.png">
    <search-bar></search-bar>
    <results v-bind:items="items"></results>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  props: ['items'],
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
