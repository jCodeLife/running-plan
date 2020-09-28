<template>
  <div>
    <h1>{{ age }}</h1>
    <button @click="change_age">点我</button>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  name: "Composition",
  setup(){
    let age = ref(18);
    function change_age(){
      age.value +=1;
      console.log(age)
    }
    return{age, change_age}
  }
};
</script>
