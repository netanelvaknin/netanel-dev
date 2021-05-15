import { lazy } from "react";
const Homepage = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Admin = lazy(() => import("../pages/admin/Admin"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const Login = lazy(() => import("../pages/admin/login/Login"));
const Post = lazy(() => import("../pages/post/Post"));

export const pageRoutes = [
  { path: "/", component: <Homepage />, exact: true },
  { path: "/about", component: <About />, exact: false },
  { path: "/admin", component: <Admin />, exact: false },
  { path: "/admin/login", component: <Login />, exact: false },
  { path: "/blog", component: <Blog />, exact: true },
  { path: "/blog/:id", component: <Post />, exact: true },
];
