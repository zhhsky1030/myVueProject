<template>
  <div id="app">
    <!--<img src="./assets/logo.png" alt="">-->
    <Ant-layout id="top-side">
      <Ant-header class="header">
        <div class="logo"/>
        <Ant-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['2']"
            :style="{ lineHeight: '64px' }"
        >
          <Ant-menu-item key="1">
            nav 1
          </Ant-menu-item>
          <Ant-menu-item key="2">
            nav 2
          </Ant-menu-item>
          <Ant-menu-item key="3">
            nav 3
          </Ant-menu-item>
        </Ant-menu>
      </Ant-header>
      <Ant-layout>
        <Ant-sider width="200" style="background: #fff">
          <HMenu/>
        </Ant-sider>
        <Ant-layout style="padding: 0 24px 24px">
          <Ant-breadcrumb style="margin: 16px 0">
            <Ant-breadcrumb-item>Home</Ant-breadcrumb-item>
            <Ant-breadcrumb-item>List</Ant-breadcrumb-item>
            <Ant-breadcrumb-item>App</Ant-breadcrumb-item>
          </Ant-breadcrumb>
          <Ant-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            <router-view/>
          </Ant-content>
        </Ant-layout>
      </Ant-layout>
    </Ant-layout>
  </div>
</template>

<script>
  import { Breadcrumb, Icon, Layout, Menu } from "ant-design-vue";
  import HMenu from "./business/menu/index";

  export default {
    name: "App",
    components: {
      "HMenu": HMenu,
      "Ant-icon": Icon,
      "Ant-breadcrumb": Breadcrumb,
      "Ant-breadcrumb-item": Breadcrumb.Item,
      "Ant-layout": Layout,
      "Ant-header": Layout.Header,
      "Ant-sider": Layout.Sider,
      "Ant-content": Layout.Content,
      "Ant-menu": Menu,
      "Ant-menu-sub": Menu.SubMenu,
      "Ant-menu-item": Menu.Item
    },
    data () {
      return {
        collapsed: false
      };
    }
  };
</script>

<style lang="less" scoped>
#top-side {
  .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
}
</style>
