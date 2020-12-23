<template>
  <div>
    {{text}}
    <div>
      <p>if 语法块区域</p>
      <p v-if="ifElse">此时属性值为true</p>
      <p v-else>此时属性值为false</p>
      <button v-on:click="changeIfElse">点一下 就切换</button>
    </div>
    <div>
      <p>for 语法块区域</p>
      <ul v-for="item in detail" v-bind:key="item">
        <li>{{ item.sex }}</li>
        <li>{{ item.like }}</li>
        <li>{{ item.age }}</li>
      </ul>
    </div>
    <div>
      <input v-model="formData.message" placeholder="edit me">
      <p>Message is: {{ formData.message }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AFirstDemo",
    data () {
      return {
        text: "这是我的第一个vue实例",
        ifElse: true,
        detail: [
          {
            sex: "男",
            like: "女",
            age: "23"
          },
          {
            sex: "man",
            like: "woman",
            age: "23"
          }
        ],
        formData: {
          message: ""
        }
      };
    },
    created () {
      this.text += " 证明created方法被执行";
    },
    methods: {
      changeIfElse: function () {
        this.ifElse = !this.ifElse;
      }
    }
  };
</script>

<style scoped>

</style>
