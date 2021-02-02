<template>
  <div class="common-content">
    <div class="article-top">
      <h2>{{article.title}}</h2>
      <span>作者：{{article.author}} </span>
      <span>围观群众： {{article.views_num}} </span>
      <span>更新于 {{article.modify_time}}</span>
    </div>
    <div class="article-center" v-html="article.content">
      
    </div>
    <div class="article-bottom"></div>
  </div>
</template>

<script>
import {fetchArticle} from 'network/api/article'
export default {
  components: {},
  props: {
    articleInfo:{
      type:Object
    }
  },
  data() {
    return {
      articleId:null,
      // article:{
      //     id:1,
      //     title:'柯南',
      //     content:'流动的水没有形状',
      //     category:1,
      //     author:'xyz',
      //     views_num:1,
      //     like_num:2,
      //     reply_num:3,
      //     created_time:'2021/1/25',
      //     modify_time:'2021/1/26',
      //   }
      article:{},
    };
  },
  watch: {},
  computed: {},
  methods: {

  },
  beforeCreate() {

  },
  created() {
    this.articleId = this.$route.params.id ;
    fetchArticle(this.articleId).then(res => {
      this.article = res.data;
    })
  },
  mounted() {

  }
};
</script>

<style scoped>
  .article-top{
    margin:20px auto;
  }
  .article-center{
    padding: 40px;
    text-align: left;
    height: 500px;
    border-bottom: 2px solid #dcdfe6;
    border-top:  2px solid #dcdfe6
  }
  .article-bottom{
    height: 300px;
  }
</style>