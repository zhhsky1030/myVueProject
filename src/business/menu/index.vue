<template>
  <Ant-menu
      mode="inline"
      :default-selected-keys="['0']"
      :default-open-keys="['0']"
      :style="{ height: '100%', borderRight: 0 }"
  >
    <template v-for="(menuItem,key) in menuList">
      <Ant-menu-sub v-bind:key="key">
        <span slot="title"><Ant-icon type="user"/>{{menuItem.label}}</span>
        <template v-if="menuItem.children" v-for="(menuLiItem,index) in menuItem.children">
          <Ant-menu-item v-bind:key="index"><router-link :to="menuLiItem.path">{{menuLiItem.label}}</router-link></Ant-menu-item>
        </template>
      </Ant-menu-sub>
    </template>
  </Ant-menu>
</template>

<script>
  import menuList from "./menuList";
  import { Icon, Menu } from "ant-design-vue";

  export default {
    name: "LeftMenu",
    components: {
      "Ant-icon": Icon,
      "Ant-menu": Menu,
      "Ant-menu-sub": Menu.SubMenu,
      "Ant-menu-item": Menu.Item
    },
    data () {
      return {
        menuList
      };
    }
  };
</script>

<style scoped>

</style>
