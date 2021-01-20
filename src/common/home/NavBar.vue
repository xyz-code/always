<template>
  <div class="nav-wrapper">
    <div id="nav-bar">
      <div class="left"> <slot name="left"></slot> </div>
      <div class="center"> <slot name="center"></slot> </div>
      <div class="right"> <slot name="right"></slot> </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
  .nav-wrapper{
    width: 100%;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    background-color:  rgba(224, 224, 224, .6);
  }
  #nav-bar{
    margin: 0 auto;
    display: flex;
    max-width: 1200px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    text-align: center;
  }
  .left{
    flex: 1;
    text-align: center;
    flex-flow: row;
    padding: 0px 10px;
  }
  .right{
    flex: 1;
    padding: 0px 10px;
  }
  .center{
    flex: 5;
  }
</style>