<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="change_count">点我</button>
    <h1>{{ alice.name }}</h1>
    <h1>{{ alice.age }}</h1>
    <button @click="change_obj">change Object</button>
  </div>
</template>

<script>
import {ref,reactive} from 'vue';
export default {
  name: "Composition",
  setup(){
    let count = ref(0);
    function change_count(){
      count.value +=1;
    }
    const obj = {
      name:'Alice',
      age:18
    }
    const alice = reactive(obj);
    function change_obj(){
      alice.name = 'tom'
      alice.age = 20
    }
    return{count, change_count,alice,change_obj}
  }
};
</script>
