<template>
  <div class="d-flex container">
    <div v-if="$route.fullPath==='/demo'">
      <router-link to="/demo/AFirstDemo">AFirstDemo</router-link>
      <router-link to="/demo/IfElseDemo">IfElseDemo</router-link>
    </div>
    <router-view/>
    <div class="leftMenu">
      <router-view name="leftMenu"/>
    </div>
    <div class="content">
      <router-view name="right"/>
    </div>
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
