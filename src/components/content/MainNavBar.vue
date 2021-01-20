<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left">always </div>
      <div slot="center">
        <div class="menu">
          <a href="javascript:;">
            <i><i class="fa fa-list" aria-hidden="true"></i></i>
          </a>
        </div>
        <ul>
          <a href="#"><li>首页</li></a>
          <a href="#"><li>分类</li></a>
          <a href="#"><li>照片墙</li></a>
          <a href="#"><li>时间轴</li></a>
          <a href="#"><li>留言板</li></a>
          <a href="#"><li>关于我</li></a>
        </ul>
      </div>
      <div slot="right">
        <a href="javascript:;">
          <i class="fa fa-user" aria-hidden="true"></i>
        </a>
      </div>

    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/home/NavBar'
export default {
  components: {
    NavBar
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

<style scoped>
  @import './css/mainnavbar.css';
  @import '~assets/fa/css/font-awesome.min.css'
</style>