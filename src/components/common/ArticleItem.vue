<template>
  <div>
    <article id="article-item">
      <div class="img-area">
        <a>
          <img src="~assets/img/carousel/carousel1.jpg" alt="">
        </a>
      </div>
      <div class="article-area">
        <a>
          <h2 class="title">{{article.title}}</h2>
        </a>
        <div class="icon-area">
          <i class="fa fa-clock-o" aria-hidden="true">{{article.modify_time}}</i>
          <i class="fa fa-eye" aria-hidden="true">{{article.views_num}}</i>
          <i class="fa fa-commenting-o" aria-hidden="true">{{article.reply_num}}</i>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    article:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      
    };
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
  #article-item{
    max-width: 700px;
    background-color: #eee;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    opacity: 0.6;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
  }
  .img-area{
    flex: 1;  
  }
  .img-area img{
    width: 100%;
    border-radius: 20px;
  }
  .img-area, .article-area title{
    cursor: pointer;
  }
  .article-area{
    flex: 2;
    display: flex;
    flex-flow: column;
    position: relative;
  }
  .article-area .title{
    color: black;
    position: absolute;
    left: 20px;
    top: -50px;
  }
  .article-area .icon-area{
    display: flex;
  }
  .article-area .icon-area i{
    flex: 0;
    margin: 10px 20px;
  }
</style>