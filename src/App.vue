<template>
  <div id="app">
    <Header/>
    <!--<img src="./assets/logo.png" alt="">-->
    <router-view/>
  </div>
</template>

<script>
  import Header from "./business/header/index";

  export default {
    name: "App",
    components: { Header }
  };
</script>
