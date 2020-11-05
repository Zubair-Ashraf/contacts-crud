import { Register, Login, ResetPassword, Home, Shop } from "pages";

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
];

export default routes;
