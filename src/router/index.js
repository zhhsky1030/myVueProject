import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Login from "../business/profile/Login";
import AFirstDemo from "../demo/AFirstDemo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/AFirstDemo",
      component: AFirstDemo
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
