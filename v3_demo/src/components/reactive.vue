<template>
  <div>
    <p>{{ userAge }}</p>
    <button @click="increase">click me! one year later</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "reactive",
  setup() {
    let userAge = reactive(12);
    function increase() {
      console.log(userAge);
      ++userAge;
    }
    return { userAge, increase };
  },
};
</script>