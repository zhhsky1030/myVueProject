<template>
  <div>
    {{text}}
    <div>
      <p>if 语法块区域</p>
      <p v-if="ifElse">此时属性值为true</p>
      <p v-else>此时属性值为false</p>
      <Button type="primary" v-on:click="changeIfElse">点一下 就切换></Button>
    </div>
    <div>
      <p>for 语法块区域</p>
      <ul v-for="(item,i) in detail" v-bind:key="i">
        <li>{{item.sex}}</li>
        <li>{{item.like}}</li>
        <li>{{item.age}}</li>
      </ul>
    </div>
    <div>
      <label><Input placeholder="edit me" v-model="formData.message"/></label>
      <p>Message is: {{formData.message}}</p>
    </div>
  </div>
</template>

<script>
  import { Button, Input } from "ant-design-vue";

  export default {
    name: "AFirstDemo",
    components: {
      Button: Button,
      Input: Input
    },
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
