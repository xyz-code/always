<template>
  <div class="common-content">
    <div class="block">
  <el-timeline>
    <el-timeline-item v-for="(item,index) in activeList"  :timestamp="item.time" placement="bottom"  :key="index">
      <el-card>
        <h4>{{item.h4}}</h4>
        <p>{{item.p}}</p>
        <img src="" alt="">
      </el-card>
    </el-timeline-item>
  </el-timeline>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        reverse: true,
        activeList:[
          {
            h4:'创建blog',
            p:'xyz sumbit 2021/1/20',
            img:'',
            time:'2021/1/20'
          },
          {
            h4:'开始开发blog后台',
            p:'xyz sumbit 2021/1/25',
            img:'',
            time:'2021/1/25'
          },
          {
            h4:'前后端结合',
            p:'xyz sumbit 2021/1/31',
            img:'',
            time:'2021/1/31'
          }
        ]
      };
    },
    methods:{

    },
    computed:{

    }
  };
</script>
<style scoped>
  .block{
    width: 60%;
    margin: 50px auto;
  }
  .block p{
    margin-top: 20px;
  }
</style>