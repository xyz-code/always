<template>
  <div id="photo-wall">
    <div class="photo-wrapper" >
      <div class="line-block" v-for="i in 5" :key="i">      
        <photo-first class="first-style"></photo-first>
        <photo-second class="second-style"></photo-second>
      </div>

    </div>
  </div>
</template>

<script>
import PhotoFirst from './photostyle/PhotoFirst'
import PhotoSecond from './photostyle/PhotoSecond'
export default {
  components: {
    PhotoFirst,
    PhotoSecond
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
  #photo-wall{
    width: var(--blog-content);
  }
  .photo-wrapper{
    width: 1000px;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    .line-block{
      display: flex;
      align-content: center;
      justify-content: center;
    }
    .first-style{
      margin-top: 50px;
      padding: 20px;
    }
    .second-style{
      padding: 20px;
    }
  }
</style>>