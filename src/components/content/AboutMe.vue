<template>
  <div class="aboutme-wrapper">
    <!-- 里面内容都写成固定的了哈哈哈 -->
    <div class="quote">续写</div>
    <h2>About me</h2>
    <div class="item">
      <h3>个人信息</h3>
      <p>我是Always，马上就要毕业了！</p>
      <p>我是Always，马上就要毕业了！</p>
      <h3>关于本站
      </h3>
      <p>本站建于2021年2月1日，个人写着学习！</p>
      <br>
      <p>本站结构：</p>
      <p>前端： Vue、element-ui、echarts</p>
      <p>后端： Java、SpringBoot、Swagger</p>
      <h3>关于版权</h3>
      <p>本站采用「 署名-非商业性使用 4.0 国际 (CC BY-NC 4.0)」创作共享协议。 只要在使用时注明出处，那么您可以
        可以对本站所有原创内容进行转载、节选、二次创作，但是您不得对其用于商业目的。 </p>
      <h3>特别说明</h3>
      <p>本站前端开发代码没有考虑对IE浏览器的兼容。</p>
    </div>
  </div>
</template>

<script>
export default {
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
  .aboutme-wrapper{
    max-width: 1000px;
    margin:100px auto;
    background-color: #fff;
    padding: 100px 0;
  }
  .aboutme-wrapper .quote{
    width: 80%;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    background-color: #ebf1fa;
    margin: auto;
    border-left: 3px solid #bfbffa;
    border-radius: 4px;
  }
  .aboutme-wrapper h2{
    font-size: 16px;
    margin: 40px;
  }
  .aboutme-wrapper .item{
    width: 70%;
    margin: auto;
  }
  .aboutme-wrapper .item h3{
    text-align: left;
    line-height: 60px;
    border-bottom: 2px solid #dcdfe6;
    margin-bottom: 20px;
  }
  .aboutme-wrapper .item p{
    padding-left: 20px;
    line-height: 30px;
    text-align: left;
  }
</style>