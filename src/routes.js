import ShowBlogs from "./components/ShowBlogs";
import AddBlog from "./components/AddBlog";
import Article from "./components/Article";

export default [
  { path: "/", component: ShowBlogs },
  { path: "/add", component: AddBlog },
  { path: "/article/:id", component: Article },
];
