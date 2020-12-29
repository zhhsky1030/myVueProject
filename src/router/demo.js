import AFirstDemo from "../demo/AFirstDemo/index";
import IfElseDemo from "../demo/IfElseDemo/index";
import Demo from "../demo/index";
import Left from "../business/menu/index";

export default {
  path: "/demo",
  component: Demo,
  children: [
    {
      path: "AFirstDemo",
      name: "AFirstDemo",
      components: {
        leftMenu: Left,
        right: AFirstDemo
      }
    },
    {
      path: "IfElseDemo",
      name: "IfElseDemo",
      components: {
        leftMenu: Left,
        right: IfElseDemo
      }
    }
  ]
};
