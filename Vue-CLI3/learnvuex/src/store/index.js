import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

import moduleA from './modules/moduleA.js'

//1、安装插件
Vue.use(Vuex)

//2、创建对象
const state = {
  /*
  这些属性都会加入到响应式系统中，而响应式系统会监听属性的变化，
  当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新
  */
  counter:1000,
  students:[
    {id:110,name:'Sophie',age:18},
    {id:111,name:'Tom',age:10},
    {id:112,name:'AJ',age:28},
    {id:113,name:'Kate',age:17},
    {id:114,name:'Hip',age:22}
  ],
  info:{
    name:'kobe',
    age:40,
    height:1.88
  }
}

const store =  new Vuex.Store({
  state,
  getters,
  mutations,
  //异步操作
  actions,
  modules: {
   a:moduleA
  }
})

//3、导出
export default store
