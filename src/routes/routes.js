import { Register, Login, ResetPassword, Home } from "pages";

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
];

export default routes;
