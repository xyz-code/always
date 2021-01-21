<template>
  <div>
    <div id="box1" class="box1" >
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
      <div class="img4"></div>
      <div class="img5"></div>
      <div class="img6"></div>
      <div class="content"><slot name="content"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {},
  mounted() {
    var box1 = document.getElementById('box1');
    box1.onmousedown = function(event){
    var ol = event.clientX - box1.offsetLeft;
    var ot = event.clientY - box1.offsetTop;
    document.onmousemove = function(event){
      box1.setCapture;
      var left = event.clientX;
      var top = event.clientY;
      box1.style.left = left - ol + 'px';
      box1.style.top = top - ot + 'px';
    }
    document.onmouseup = function(){
      //取消捕获
      box1.releaseCapture ;    
      //取消onmousemove
      document.onmousemove = null;
      document.onmouseup = null;
    }
    return false;
    }
  }
};
</script>

<style scoped>
  .box1{
    width: 200px;
    height: 200px;
    /* overflow: hidden; */
    position: absolute;
    /* background-color: burlywood; */
    /*设置3d变形效果*/
    transform-style: preserve-3d;
    /* transform: rotateX(45deg) rotateZ(45deg); */
    animation: rotate 15s 0s infinite;
    left: 0px;
    right: 0px;
    top: 0px;
  }
  .box1 > div{
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  .img1{
    background-color: red;
    transform: rotateX(90deg) translateZ(100px);
    position: absolute;
  }
  .img2{
    position: absolute;
    transform: rotateX(-90deg) translateZ(100px);
    background-color: orange;
  }
  .img3{
    position: absolute;
    transform: rotateY(90deg) translateZ(100px);
    background-color: yellow;
  }
  .img4{
    position: absolute;
    transform: rotateY(-90deg) translateZ(100px);
    background-color: green;
  }
  .img5{
    position: absolute;
    transform: rotateX(0deg) translateZ(100px);
    background-color: blue;
  }
  .img6{
    position: absolute;
    transform: rotateX(180deg) translateZ(100px);
    background-color: purple; 
  }
  .content{
    position: absolute;
    text-align: center;
    line-height: 200px;
    font-size: 100px;
    color: white;
  }
  @keyframes rotate{
    from{
      transform: rotateX(0) rotateZ(0);
    }
    to{
      transform: rotateX(1turn) rotateZ(1turn);
    }
  }
</style>