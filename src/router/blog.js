import EditBlog from "@/scene/blog/editBlog/index";
import Blog from "@/scene/blog/index";

export default {
  path: "/blog",
  component: Blog,
  children: [
    {
      path: "EditBlog",
      name: "EditBlog",
      component: EditBlog
    }
  ]
};
