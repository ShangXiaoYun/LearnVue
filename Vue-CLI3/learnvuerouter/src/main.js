import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//将router对象传入到Vue实例对象中
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log(router);
