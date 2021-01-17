import AFirstDemo from "../demo/AFirstDemo/index";
import IfElseDemo from "../demo/IfElseDemo/index";
import TemplateSyntaxDemo from "../demo/TemplateSyntaxDemo/index";
import Demo from "../demo/index";

export default {
  path: "/demo",
  component: Demo,
  children: [
    {
      path: "AFirstDemo",
      name: "AFirstDemo",
      component: AFirstDemo
    },
    {
      path: "TemplateSyntaxDemo",
      name: "TemplateSyntaxDemo",
      component: TemplateSyntaxDemo
    },
    {
      path: "IfElseDemo",
      name: "IfElseDemo",
      component: IfElseDemo
    }
  ]
};
