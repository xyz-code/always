<template>
  <div id="home">
    <carousel :pictures="pictures" class="carousel"/>
    <Article></Article>
  </div>
</template>

<script>
import carousel from 'common/others/carousel'
import Article from 'components/common/Article'
export default {
  components: {
    carousel,
    Article
  },
  props: {},
  data() {
    return {
      pictures:[require('assets/img/conna/img1.jpg'),
      require('assets/img/conna/img2.jpg'),
      require('assets/img/conna/img3.jpg'),
      require('assets/img/conna/img4.jpg'),
      require('assets/img/conna/img5.jpg'),
      require('assets/img/conna/img6.jpg')]
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
  #home{
    /* background-image: url('~assets/img/bg/bg1.jpg'); */
  }
  .carousel {
    /* margin-top: 49px; */
    padding-top: 80px;
  }
</style>