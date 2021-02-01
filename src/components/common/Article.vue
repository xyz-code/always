<template>
  <div>
    <article-item v-for="(item,index) in articles" :article="item"
    :key="index" @click.native="toArticle(item.id)">      
    </article-item>
  </div>
</template>

<script>
import ArticleItem from './ArticleItem'
import {fetchList} from 'network/api/article'

export default {
  components: {
    ArticleItem
  },
  props: {},
  data() {
    return {
      articles:[],
    };
  },
  watch: {},
  computed: {},
  methods: {
    toArticle(id){
      this.$router.push('/article/' + id)
    }
  },
  beforeCreate() {},
  created() {
        

  },
  mounted() {
    console.log(typeof fetchList);
    fetchList().then(res =>{
      res.data.forEach(data => {
        this.articles.push(data)
        console.log(data);
      })
    })
  }
};
</script>

<style scoped >
</style>