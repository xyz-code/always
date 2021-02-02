<template>
  <div id="photo-wall">
    <div class="photo-wrapper" >
      <photo-tags></photo-tags>    
    </div>
  </div>
</template>

<script>
import PhotoTags from './photostyle/PhotoTags'

export default {
  components: {
    PhotoTags
  },
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

<style lang="less" scoped>
  *{
    background-color: white;
  }
  #photo-wall{
    max-width: var(--blog-content);
  }

</style>>