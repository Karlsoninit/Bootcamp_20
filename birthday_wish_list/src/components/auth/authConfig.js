import { lazy } from "react";

export default [
  {
    path: "/login",
    label: "Login",
    component: lazy(() =>
      import("../../pages/auth/LoginPage" /* webpackChunkName:"LoginPage" */)
    ),
    exact: false,
  },
  {
    path: "/register",
    label: "Register",
    component: lazy(() =>
      import(
        "../../pages/auth/RegisterPage" /* webpackChunkName:"RegisterPage" */
      )
    ),
    exact: false,
  },
];
