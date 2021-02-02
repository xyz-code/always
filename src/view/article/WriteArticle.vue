<template>
  <div class="common-content">
    <input  class="title-bar" type="text" placeholder="请输入标题" v-model="title">
    <fu-editor ref="editor" :height="Number(350)"></fu-editor>
    <button @click="putArticle">提交</button>
  </div>
</template>

<script>
import FuEditor from 'common/editor/FuEditor'
import {CreateArticle} from 'network/api/article'
export default {
  components: {
    FuEditor
  },
  props: {},
  data() {
    return {
      content:null,
      title:null,
    };
  },
  watch: {},
  computed: {},
  methods: {
    putArticle(){ 
      let article = {}
      article.title = this.title;
      article.content =  this.$refs.editor.editor.txt.html();
      CreateArticle(article).then(res => {
        console.log(res);
      }).then(err => {
        console.log(err);
      })
      console.log(article);
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
  .title-bar{
    padding: 10px;
    margin: 20px;
  }
</style>