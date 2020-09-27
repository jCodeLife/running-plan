<template>
  <div class="wrap">
    <section>
      <h6>商品列表</h6>
      <table>
        <thead>
          <td>序号</td>
          <td>名称</td>
          <td>单价</td>
          <td>折扣</td>
          <td>折后价</td>
        </thead>
        <tbody>
          <tr
            v-for="(fruit, index) in fruits"
            :key="fruit.id"
            @click="remove_item(index)"
          >
            <td>{{ fruit.id }}</td>
            <td>{{ fruit.fruit_name }}</td>
            <td>{{ fruit.price }}</td>
            <td>{{ fruit.discount }}</td>
            <td>{{ (fruit.price * fruit.discount).toFixed(2) }}元/斤</td>
          </tr>
        </tbody>
      </table>
      <br />
    </section>
    <section>
      <h6>如果想添加一个商品，请输入：</h6>
      <form>
        商品序号：<input type="text" v-model="f.id" /><br />
        商品名称：<input type="text" v-model="f.fruit_name" /><br />
        单价价格：<input type="text" v-model="f.price" /><br />
        打折折扣：<input type="text" v-model="f.discount" /><br />
        <button @click="add_item">添加</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      fruits: [
        { id: 1, fruit_name: "apple", price: 10, discount: 0.8 },
        { id: 2, fruit_name: "banana", price: 3, discount: 0.7 },
        { id: 3, fruit_name: "orange", price: 5, discount: 0.5 },
        { id: 4, fruit_name: "durain", price: 50, discount: 0.8 },
      ],
      f: {
        id: 5,
        fruit_name: "",
        price: "",
        discount: "",
      },
    };
  },
  methods: {
    remove_item(index) {
      this.fruits = this.fruits.filter((item, key) => index !== key);
    },
    add_item(e) {
      e.preventDefault();
      let temp = Object.assign({}, this.f);
      this.fruits.push(temp);
      this.f.id = this.fruits.length + 1;
      this.f.fruit_name = "";
      this.f.price = "";
      this.f.discount = "";
    },
  },
};
</script>

