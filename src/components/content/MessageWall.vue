<template>
  <div class="common-content">
    <div class="content-tip">
      <div class="message-header">
        <h2>留言板</h2>
        <p>沟通交流，拉近你我！</p>
      </div>
      <fu-editor ref="editor" class="editor"></fu-editor>
    </div>
  </div>
</template>

<script>
import FuEditor from 'common/editor/FuEditor'
export default {
  components: {
    FuEditor
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
  },

}
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

  .editor{
    margin-top: 20px;
  }
</style>