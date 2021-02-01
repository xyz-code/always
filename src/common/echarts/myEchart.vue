<template>
  <div >
    <div id="main" style="width: 1000px; height:1000px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import timu from './timu.json'
export default {
  name:'MyEcharts',
  components: {
  },
  props: {},
  data() {
    return {

    };
  },
  watch: {},
  computed: {},
  beforeCreate() {},
  methods:{
    
    runmyChart(graph) {
      var myChart = echarts.init(document.getElementById('main')); 
      var option;
      myChart.hideLoading();

      graph.nodes.forEach(function (node) {
          node.label = {
              show: node.symbolSize > 30
          };
      });
      option = {
          title: {
              text: 'Leetcode 题目分类',
              subtext: 'Default layout',
              top: 'top',
              left: 'center'
          },
          tooltip: {},
          legend: [{
              // selectedMode: 'single',
              data: graph.categories.map(function (a) {
                  return a.name;
              }),
              top:80,
          }],
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
              {
                  name: 'Les Miserables',
                  type: 'graph',
                  layout: 'none',
                  data: graph.nodes,
                  links: graph.links,
                  categories: graph.categories,
                  roam: true,
                  label: {
                      position: 'right',
                      formatter: '{b}'
                  },
                  lineStyle: {
                      color: 'source',
                      curveness: 0.3
                  },
                  emphasis: {
                      focus: 'adjacency',
                      lineStyle: {
                          width: 20
                      }
                  }
              }
          ]
      };
      myChart.setOption(option);
    }
  },
  created() {
  },
  mounted() {
    console.log('hhh1');
    this.runmyChart(timu);
  }
  
}
</script>

<style scoped>
</style>