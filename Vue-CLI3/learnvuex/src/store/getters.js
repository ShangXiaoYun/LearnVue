export default{
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
}