<template>
  <div id="app">
    <router-link to="/home">首页</router-link> 
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return {
      userId:'list'
    }
  },
  methods:{
    homeClick(){
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log("homeClick")
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log("aboutClick")
    }
  }
}
</script>

<style>
</style>
