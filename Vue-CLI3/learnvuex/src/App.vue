<template>
  <div id="app">
    <h2>--------App内容：modules中的内容---------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改</button>

    <h2>--------App内容：info对象的内容是否是响应式---------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>------------App内容-------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <!-- <button @click="$store.state.counter++">+</button> -->
    <!-- <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="subtraction">-</button>
    <button @click="addStudent">添加学生</button>

    <h2>----------App内容：getters相关信息---------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <!-- <h2>{{more20Stu}}</h2> -->
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLen}}</h2>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>

    <h2>---------------Hello Vuex内容----------------</h2>
    <!-- <hello-vuex :counter="counter"/> -->
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
import {INCREMENT} from './store/mutations-types.js'

export default {
  name:'App',
  components:{
    HelloVuex
  },
  data(){
    return {
      message:'Hello,Sophie'
    }
  },
  methods:{
    addition(){
      this.$store.commit(INCREMENT)
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //payload载荷 ：一个对象
      //1、普通的提交风格
      // this.$store.commit('incrementCount',count)
      //2、特殊的提交风格
      this.$store.commit({
        type:'incrementCount',
        count
      })
    },
    addStudent(){
      const stu = {id:115,name:'Hel',age:30} 
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是携带的信息',
      //   success: ()=>{
      //     console.log('里面已经完成了');
      //   }
      // })
      this.$store
        .dispatch('aUpdateInfo','我是携带的信息')
        .then(res => {
          console.log(res);
          console.log('里面完成了提交');
        })
    },
    updateName(){
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  },
  // computed:{
  //   more20Stu(){
  //     return this.$store.state.students.filter(s=>{
  //       return s.age >= 20
  //     })
  //   }
  // }
}
</script>

