<template>
  <div id="category">
    <tab-bar class="tab-bar"></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/content/category/tabbar/TabBar'
export default {
  components: {
    TabBar
  },
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

<style lang="less" scoped>
  #category {
    margin-top: 49px;
    margin-bottom: 200px;
  }
  #category .tab-bar{
    padding-top: 60px;
  }
</style>