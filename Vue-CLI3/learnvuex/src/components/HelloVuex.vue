<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLen}}</h2>
  </div>
</template>

<script>
export default {
  name:'HelloVuex',
//   props:{
//     counter:Number
//   }
}
</script>

<style scoped>

</style>