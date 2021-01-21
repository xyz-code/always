<template>
  <div>
    <div class="foot-wrapper clear-fix">
      <div class="main">
        <div class="content">
          <div class="contactme">
            <p>联系我</p>
            <p>QQ:904629516</p>
            <p>Email:904629516@qq.com</p>
          </div>
          <div class="line"></div>
          <div class="look">
            <p>关注公众号</p>
            <img src="~assets/img/profile/prowx.png" alt="">
          </div>
           <div class="line"></div>
          <div class="question">
            <p>问题交流</p>
            <img src="~assets/img/profile/prowx.png" alt="">
          </div>
           <div class="line"></div>
          <div class="summary">
            <p>博客信息</p> <br>
            <span>文章总数： 篇</span>
            <span>访问总数： 次</span>
            <span>评论总数： 条</span>
            <span>留言总数： 条</span>
          </div>
        </div>
        <div class="info">
          <p>网站名称：Always</p>
          <p><a href="javascript:;">备案号：晋B12245</a></p>
        </div>
      </div>
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
  .foot-wrapper{
    background-color: #1B1C1D;
    opacity: 0.9;
    color: white;
  }
  span{
    display: block;
    font-size: 16px; 
    padding: 3px; 
  }
  span:nth-child(6){
    margin-bottom: 20px;
  }
  .main{
    height: 100%;
    max-width: var(--blog-width);
    display: flex;
    margin: 0 auto;
    flex-flow: column;
    font-size: 24px;
  }
  .main .content{
    margin-top: 35px;
    flex: 4;
    display: flex;
    justify-content: space-around;
    align-content: center;
    border-bottom: 1px solid rgba(224, 224, 224, .6);
  }
  .main .content .line{
    height: 200px;
    width: 1px;
    background-color: rgba(224, 224, 224, .6);
  }
  .main .content .contactme{
    padding: 20px;
    flex: 1;
    text-align: left;
    line-height: 50px;
    box-sizing: border-box;
  }
  .main .content .look{
    flex: 1;
  }
  .main img{
    margin-top: 10px;
    border-radius: 10px;
    width: 150px;
    margin-bottom: 20px;
  }
  .main .content .look img{
    
  }
  .main .content .question{
     flex: 1;
   }
  .main .content .summary{
    flex: 1;
  }
  .main .info{
    flex: 1;
    font-size: 14px;
  }
  .main .info p{
    margin:10px;
  }
  @media screen{
    @media (max-width:798px){
        .main .content{
          flex-flow: column;
        }
         .main .content .contactme{
           text-align: center;
         }
        .main .content .line{
          height: 1px;
          width: 100%;
          margin: 20px auto;
        }
    }
  }
</style>