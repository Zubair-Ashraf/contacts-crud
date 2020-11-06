import {
  Register,
  Login,
  ResetPassword,
  Home,
  Shop,
  ProductDetail,
} from "pages";

const routes = [
  {
    component: Login,
    path: "/login",
    isPublic: true,
  },
  {
    component: Register,
    path: "/register",
    isPublic: true,
  },
  {
    component: ResetPassword,
    path: "/reset-password",
    isPublic: true,
  },
  {
    component: Home,
    path: "/",
    isPublic: true,
  },
  {
    component: Shop,
    path: "/shop",
    isPublic: true,
  },
  {
    component: ProductDetail,
    path: "/product/:name",
    isPublic: true,
  },
];

export default routes;
