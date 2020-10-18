<template>
  <div>
    <p>FRUITS LIST：</p>
    <ul>
      <li v-for="(item, index) in fruits" :key="item.id" @click="remove(index)">
        {{ item.name }} : {{ item.price }}RMB
      </li>
    </ul>
    <form>
      <p>ADD FRUIT TO FRUITS LIST</p>
      ID:<input type="text" v-model="fruit.id" /><br />
      NAME:<input type="text" v-model="fruit.name" /><br />
      PRICE:<input type="text" v-model="fruit.price" /><br />
      <button @click="add()">ADD BTN</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      fruits: [
        {
          id: 1,
          name: "apple",
          price: 10,
        },
        {
          id: 2,
          name: "durian",
          price: 50,
        },
      ],
      fruit: {
        id: "",
        name: "",
        price: "",
      },
    };
  },
  methods: {
    remove(index) {
      this.fruits = this.fruits.filter((value, key) => key !== index);
    },
    add() {      
     
    }
  },
};
</script>

