<template>
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
        <Ant-menu
            mode="inline"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
        >
          <Ant-menu-sub key="sub1">
            <span slot="title"><Ant-icon type="user"/>subnav 1</span>
            <Ant-menu-item key="1">
              option1
            </Ant-menu-item>
            <Ant-menu-item key="2">
              option2
            </Ant-menu-item>
            <Ant-menu-item key="3">
              option3
            </Ant-menu-item>
            <Ant-menu-item key="4">
              option4
            </Ant-menu-item>
          </Ant-menu-sub>
        </Ant-menu>
      </Ant-sider>
      <Ant-layout style="padding: 0 24px 24px">
        <Ant-breadcrumb style="margin: 16px 0">
          <Ant-breadcrumb-item>Home</Ant-breadcrumb-item>
          <Ant-breadcrumb-item>List</Ant-breadcrumb-item>
          <Ant-breadcrumb-item>App</Ant-breadcrumb-item>
        </Ant-breadcrumb>
        <Ant-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          Content
        </Ant-content>
      </Ant-layout>
    </Ant-layout>
  </Ant-layout>
</template>

<script>
  import { Layout, Menu, Breadcrumb, Icon } from "ant-design-vue";

  export default {
    name: "Index",
    components: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
