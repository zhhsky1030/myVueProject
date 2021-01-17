<template>
  <div>
    <h1>TemplateSyntaxDemo</h1>
    <p>vue 模板语法的进阶实例</p>
    <p>
      在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。
      如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，直接写渲染 (render) 函数，使用可选的 JSX 语法。
    </p>
    <p><b>小爷真的不喜欢JavaScript的原始力量，所以我用模板，嘤嘤嘤（一拳一个嘤嘤怪）</b></p>
    <button @click="getDiv">获取代码</button>
    <div class="practiceBox" ref="domss">
      <div class="itemBox">
        <h5>文本</h5>
        <p>数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：{{aaa}}</p>
      </div>
    </div>
    <ShowCode :code="domHtml"/>
  </div>
</template>

<script>
  import ShowCode from "@/business/commen/showCode";

  export default {
    name: "TemplateSyntaxDemo",
    components: {
      ShowCode: ShowCode
    },
    data () {
      return {
        domHtml: "",
        aaa: "<span>Message: {{ msg }}</span>"
      };
    },
    methods: {
      getDiv () {
        console.log(this.$refs.domss.innerHTML);
        this.domHtml = this.$refs.domss.innerHTML;
      }
    }
  };
</script>

<style scoped>

</style>
