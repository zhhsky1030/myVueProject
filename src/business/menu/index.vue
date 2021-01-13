<template>
  <div>
    <div v-for="(menuItem,key) in menuList" v-bind:key="key">
      <div>
        <a :href="menuItem.path">{{menuItem.label}}</a>
        <div v-for="(menuLiItem,index) in menuItem.children" v-bind:key="index" v-if="menuItem.children">
          <a :href="menuLiItem.path">{{menuLiItem.label}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import menuList from "./menuList";

  export default {
    name: "LeftMenu",
    data () {
      return {
        menuList
      };
    }
  };
</script>

<style scoped>

</style>
