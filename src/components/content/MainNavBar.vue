<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left">Always丶</div>
      <div slot="center">
        <div class="menu">
          <a href="javascript:;">
            <i><i class="fa fa-list" aria-hidden="true"></i></i>
          </a>
        </div>
        <ul>
          <!-- <a :style="" href="/home"><li>首页</li></a>
          <a  href="/category"><li>分类</li></a>
          <a  href="/photo"><li>照片墙</li></a>
          <a  href="/time"><li>时间轴</li></a>
          <a  href="/message"><li>留言板</li></a>
          <a  href="/profile"><li>关于我</li></a> -->
          <a v-for="(item,index) in this.navItem" :key="index" @click="aclick(item.url,index)"
          :class="{active:curIndex == index}">
            <li>{{item.text}}</li>
          </a>
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
  props: {
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      navItem:[
        {url:'/home',text:'首页'},
        {url:'/category',text:'分类'},
        {url:'/photo',text:'照片墙'},
        {url:'/time',text:'时间轴'},
        {url:'/message',text:'留言板'},
        {url:'/profile',text:'关于我'},
      ],
      curIndex:0,
    };
  },
  watch: {},
  computed: {
  },
  methods: {
    aclick(path,index){
      this.$router.replace(path);
      this.curIndex = index;
    }
  },
  beforeCreate() {},
  created() {
    console.log(this.$route);
    console.log(this.$router);
    let path = this.$route.path;
    for(let i = 0; i < this.navItem.length; i++){
      if(path === this.navItem[i].url){
        this.curIndex = i;
        console.log('当前索引'+this.curIndex);
      }
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
  @import './css/mainnavbar.css';
  @import '~assets/fa/css/font-awesome.min.css';
  .active{
    color: #6bc30d;
    border-bottom: 1px solid #6bc30d;
  }
</style>