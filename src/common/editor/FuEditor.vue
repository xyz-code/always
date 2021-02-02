<template>
  <div id="write">
    <div id='editor'></div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import WangEditor from 'wangeditor'
export default {
  components: {
  },
  props: {
    height:{
      type:Number,
      default:300
    }
  },
  data() {
    return {
      editor:null,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {},
  mounted() {
    this.editor = new WangEditor('#editor')
    this.editor.highlight = hljs
    this.editor.config.zIndex = 500
    this.editor.config.height = this.height;
    this.editor.create()
  }
};
</script>

<style scoped>
  /* cdn方式引入 */
  @import 'http://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css';
  #write{
    max-width: 100%;
  }
</style>