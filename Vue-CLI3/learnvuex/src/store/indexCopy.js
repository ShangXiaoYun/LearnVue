import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types.js'

//1、安装插件
Vue.use(Vuex)

//2、创建对象
const moduleA = {
  state:{
    name:'zhangsan'
  },
  getters:{
    fullname(state){
      return state.name + '1111'
    },
    fullname2(state,getters){
      return getters.fullname + '2222'
    },
    fullname3(state,getters,rootState){
      return getters.fullname2 + rootState.counter
    }
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('updateName','wangwu')
      },1000)
    }
  }
}

const store =  new Vuex.Store({
  state: {
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
  },
  getters: {
    powerCounter(state){
      return state.counter * state.counter
    },
    more20Stu(state){
      return state.students.filter(s => s.age >= 20)
    },
    more20StuLen(state,getters){
      return getters.more20Stu.length
    },
    moreAgeStu(state){
      return function(age){
        return state.students.filter(s => s.age >= age)  
      }
    }
  },
  mutations: {
    //方法
    [INCREMENT](state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    // incrementCount(state,count){
    //   state.counter += count
    // },
    incrementCount(state,payload){
      state.counter += payload.count
    },
    addStudent(state,stu){
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name = 'Sophie'
      // state.info['address'] = '洛杉矶'
      // Vue.set(state.info,'address','洛杉矶')
      //该方式做不到响应式
      // delete state.info.age
      // Vue.delete(state.info,'age')
    }
  },
  //异步操作
  actions: {
    //context:上下文
    // aUpdateInfo(context,payload){
    //   setTimeout(()=>{
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   },1000)
    // }

    // aUpdateInfo(context,payload){
    //   setTimeout(()=>{
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   },1000)
    // }

    aUpdateInfo(context,payload){
      return new Promise((resolve,reject) => {
        setTimeout(()=>{
          context.commit('updateInfo')
          console.log(payload);
          resolve('1111111')
        },1000)
      })
    }
  },
  modules: {
   a:moduleA
  }
})

//3、导出
export default store
