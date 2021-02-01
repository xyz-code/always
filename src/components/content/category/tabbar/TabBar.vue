<template>
  <div class="tabbar-wrapper">
    <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="LeetCode" name="first">
      <leet-code></leet-code>
    </el-tab-pane>
    <el-tab-pane label="类别" name="second">
      我是类别<leet-code></leet-code>
    </el-tab-pane>
    <el-tab-pane label="统计" name="third">
      我是统计<leet-code></leet-code>
    </el-tab-pane>
    <el-tab-pane label="测试" name="fourth">
      我是测试<leet-code></leet-code>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
  import LeetCode from '../two/LeetCode'
  export default {
    components:{
      LeetCode
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        this.activeName = tab.name;
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
  .tabbar-wrapper{
    width: var(--blog-content-width);
    margin: 0 auto;
  }
</style>