<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import MainNavBar from 'components/content/MainNavBar'
import Footer from 'common/footer/Footer'
export default {
  name: 'App',
  components: {
    MainNavBar,
    Footer,
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

  /*背景图片设置*/
  background-image: url('~assets/img/bg/bg3.jpg');
  background-repeat:no-repeat;
  background-size:100%;
  
  background-attachment:fixed;
  color: #2c3e50;
  background-color: rgba(224, 224, 224, 0.6);
}
</style>
