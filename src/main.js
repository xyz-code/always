import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.config.productionTip = false


Vue.use(Element, { size: 'small', zIndex: 100 });

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
