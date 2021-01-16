<template>
  <div>
    <h1>IfElseDemo</h1>
    <p>vue v-if的进阶实例</p>
    <div class="practiceBox">
      <div class="itemBox">
        <h4>在 &lt;template&gt; 元素上使用 v-if 条件渲染分组</h4>
        <button v-on:click="changeFlag('level1')">切换判断状态</button>
        <template v-if="level1">
          <p>诶嘿，我判断成功了，但我只用了一个p标签</p>
        </template>
        <template v-else>
          <p>呜呜呜~我判断失败了，但我也只用了一个p标签</p>
        </template>
      </div>
      <div class="itemBox">
        <h4>在 &lt;template&gt; 元素上使用 v-else-if 条件渲染分组</h4>
        <input v-model="inputBind2"/>
        <button v-on:click="getInputStr(inputBind2)">切换判断状态</button>
        <template v-if="level2==='A'">
          <p>诶嘿，我判断这个值是A，但我只用了一个p标签</p>x
        </template>
        <template v-else-if="level2==='B'">
          <p>诶嘿，我判断这个值是B，但我只用了一个p标签</p>
        </template>
        <template v-else-if="level2==='C'">
          <p>诶嘿，我判断这个值是C，但我只用了一个p标签</p>
        </template>
        <template v-else>
          <p>呜呜呜~我不知道你输了个什么玩意，只知道是{{level2}}，但我也只用了一个p标签</p>
        </template>
      </div>
      <div class="itemBox">
        <h4>用 key 管理可复用的元素</h4>
        <p>Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。</p>
        <p>但仍要注意的是如果为输入框绑定了v-model，则输入框的值在切换时仍会遵从绑定的变量值</p>
        <button v-on:click="changeFlag('level3')">切换判断状态</button>
        <h5>以下为没有绑定key的例子</h5>
        <template v-if="level3">
          <label>Username</label>
          <input placeholder="Enter your username">
        </template>
        <template v-else>
          <label>Email</label>
          <input placeholder="Enter your email address">
        </template>
        <h5>以下为绑定了key的例子</h5>
        <template v-if="level3">
          <label>Username</label>
          <input placeholder="Enter your username" key="username">
        </template>
        <template v-else>
          <label>Email</label>
          <input placeholder="Enter your email address" key="email">
        </template>
      </div>
      <div class="itemBox">
        <h4>v-show</h4>
        <p>带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。</p>
        <button v-on:click="changeFlag('level4')">切换判断状态</button>
        <template v-if="level4">
          <p>诶嘿，我判断成功了，但我只用了一个p标签</p>
        </template>
        <template v-else>
          <p>呜呜呜~我判断失败了，但我也只用了一个p标签</p>
        </template>
        <p v-show="level4">我就是v-show哒！！！</p>
      </div>
    </div>
    <h4>总结</h4>
    <p>
      好像也没啥好总结的
    </p>
  </div>
</template>

<script>
  export default {
    name: "IfElseDemo",
    data () {
      return {
        level1: true,
        level2: "A",
        inputBind2: "A",
        level3: true,
        level4: true,
        level5: true,
        level6: true,
        level7: true
      };
    },
    methods: {
      changeFlag: function (name) {
        this[name] = !this[name];
      },
      getInputStr: function (str) {
        this.level2 = str;
      }
    }
  };
</script>

<style scoped>

</style>
