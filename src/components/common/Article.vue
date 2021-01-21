<template>
  <div>
    <article-item v-for="item in articles" :key="item">
      
    </article-item>
  </div>
</template>

<script>
import ArticleItem from './ArticleItem'
export default {
  components: {
    ArticleItem
  },
  props: {},
  data() {
    return {
      articles:['你好','你好','我是谁啊']
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

<style scoped >
</style>