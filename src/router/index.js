import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Login from "../business/profile/Login";
import Demo from "../demo/index";
import AFirstDemo from "../demo/AFirstDemo/index";
import IfElseDemo from "../demo/IfElseDemo/index";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/demo",
      component: Demo,
      children: [
        {
          path: "AFirstDemo",
          name: "AFirstDemo",
          component: AFirstDemo
        },
        {
          path: "IfElseDemo",
          name: "IfElseDemo",
          component: IfElseDemo
        }
      ]
    }
  ]
});
