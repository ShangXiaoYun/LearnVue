<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"Home",
  data(){
    return {
      message:'你好呀',
      path:'/home/news'
    }
  },
  created(){
    console.log('created')
    document.title = '首页'
  },
  // mounted(){
  //   console.log("mounted");
  // },
  // updated(){
  //   console.log("updated");
  // }
  destroyed(){
    console.log("destroyed");
  },
  //这两个函数只有再该组件被保持了状态，使用了keep-alive时，才是有效的
  activated(){
    console.log("activated");
    this.$router.push(this.path)
  },
  deactivated(){
    console.log("deactivated");
  },
  //组件内导航
  beforeRouteLeave(to,from,next){
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>