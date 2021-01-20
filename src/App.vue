<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
  </div>
</template>

<script>
import MainNavBar from 'components/content/MainNavBar'
export default {
  name: 'App',
  components: {
    MainNavBar
  }
}
</script>

<style>
@import './assets/css/base.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
