<template>
  <div>
    <div>
      <h1>{{ count }}</h1>
      <button @click="change_count">点我</button>
    </div>
    <div>
      <h1>{{ alice.name }}</h1>
      <h1>{{ alice.age }}</h1>
      <button @click="change_obj">change Object</button>
    </div>
  </div>
</template>

<script>
import useChangeObj from "./composition_tiny_js/change_obj";
import useChangeCount from "./composition_tiny_js/count";
export default {
  name: "Composition",
  setup() {
    let { count, change_count } = useChangeCount();
    let { alice, change_obj } = useChangeObj();
    return { count, change_count, alice, change_obj };
  },
};
</script>
