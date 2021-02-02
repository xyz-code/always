<template>
  <div class="photo-tags-wrapper">
    <div class="demo-image__preview" v-for="(item ,index) in srcList" :key="index">
      <el-image 
        style="width: 346px; height: 475px"
        :src="item.url" 
        :preview-src-list="item.srcList">
      </el-image>
      <h2 class="photo-tags">{{item.tag}}</h2>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {},
  data() {
    return {
        srcList:[
          {
            url: require('assets/img/conna/img7.jpg'),
            srcList: [
            require('assets/img/conna/img8.jpg'),
            require('assets/img/conna/img12.jpg')
            ],
            tag:'柯南'
          },
           {
            url: require('assets/img/conna/img9.jpg'),
            srcList: [
            require('assets/img/conna/img8.jpg'),
            require('assets/img/conna/img12.jpg')
            ],
            tag:'柯南'
          },
           {
            url: require('assets/img/conna/img10.jpg'),
            srcList: [
            require('assets/img/conna/img13.jpg'),
            require('assets/img/conna/img14.jpg')
            ],
            tag:'柯南'
          },
           {
            url: require('assets/img/conna/img11.jpg'),
            srcList: [
            require('assets/img/conna/img15.jpg'),
            require('assets/img/conna/img12.jpg')
            ],
            tag:'柯南'
          }
        ]
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
  .photo-tags-wrapper{
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
  }
  .photo-tags-wrapper .demo-image__preview{
    flex: 1;
    margin: 20px;
  }
  .photo-tags-wrapper .demo-image__preview .photo-tags{
    transform: translateY(-120px);
  }
</style>