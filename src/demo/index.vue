<template>
  <div class="d-flex container">
    <div v-if="$route.fullPath==='/demo'">
      <a target="_blank" href="https://www.php.cn/js/js-vuejs-syntax.html">Vue.js基础教程（官方手册）</a>
      <a target="_blank" href="https://vue3js.cn/docs/zh/guide/list.html">Vue3 中文官方文档</a>
      <a target="_blank" href="https://www.antdv.com/components/table-cn/">ant-Design-Vue 中文官方文档</a>
      <a target="_blank" href="https://vuex.vuejs.org/zh/guide/">VUEX 中文官方文档</a>
      <a target="_blank" href="https://www.cnblogs.com/WindrunnerMax/p/13024711.html">Js中fetch方法</a>
      <a target="_blank" href="https://docs.github.com/cn/github/getting-started-with-github/exploring-projects-on-github">在 GitHub 上探索项目</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Demo",
    data () {
      return {
        path: ""
      };
    }
  };
</script>

<style lang="less" scoped>

</style>
