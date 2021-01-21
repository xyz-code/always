<template>
   <div class="block">
    <el-carousel height="300px" class="carousel">
      <el-carousel-item class="carousel-item" v-for="(item,index) in pictures"  :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    pictures:{
      type:Array,
      default(){
        return [];
      },
      required: true
    }
  },
  data() {
    return {
    };
  },
  watch: {

  },
  computed: {},
  methods: {},
  beforeCreate() {
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
  .block{
    max-width: 800px;
    margin: 0 auto;    
  }
  .block .carousel{
    width: 100%;
  }
  .block .carousel .carousel-item img{
    width: 100%;
  }
</style>