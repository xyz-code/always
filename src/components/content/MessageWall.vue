<template>
  <div class="common-content">
    <div class="content-tip">
      <div class="message-header">
        <h2>留言板</h2>
        <p>沟通交流，拉近你我！</p>
      </div>
      <div class="message-write">
        <VueEmoji class="content" ref="emoji" width="800" heigth="200" @input="onInput"  />
      </div>
    </div>
  </div>
</template>

<script>
import VueEmoji from 'emoji-vue'
export default {
  components: {
     VueEmoji
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {

    onInput(event) {
        //事件。数据包含文本区域的值
        console.log(event);
    },
    clearTextarea(){
      this.$refs.emoji.clear()
    },  
  },
  beforeCreate() {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
  .common-content {
    width: 100%;
    padding: 20px;
  }
  .common-content .content-tip{

  }
  .common-content .content-tip h2 {
    font-size: 32px;
  }
  .common-content .content-tip p{
    font-size: 20px;
    line-height: 40px;
    margin-top: 20px;
  }
  .common-content .message-write{  
    margin: 0 auto;
    margin-top: 70px;
  }
  .common-content .message-write .content{
    line-height: 50px;
  }
</style>