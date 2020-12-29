<template>
  <div>
    <div v-if="$route.fullPath==='/demo'">
      <router-link to="/demo/AFirstDemo">AFirstDemo</router-link>
      <router-link to="/demo/IfElseDemo">IfElseDemo</router-link>
    </div>
    <router-view/>
    <div>
      <router-view name="left"/>
    </div>
    <div>
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

<style scoped>

</style>
