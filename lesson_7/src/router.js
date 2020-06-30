import React from "react";

import { Switch, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import CommentsPage from "./pages/CommentsPage";
import AuthPage from "./pages/auth/AuthPage";

const routing = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: <HomePage />,
  },
  {
    path: "/comments",
    label: "Comments",
    exact: false,
    component: <CommentsPage />,
  },
  {
    path: "/:id",
    label: "ArticlePage",
    exact: false,
    component: <ArticlePage />,
  },
];

export const pathCreate = (path) =>
  routing.find((route) => route.label === path).path;

export const useRouter = (isAuth) => {
  if (!isAuth) {
    return (
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return (
    <Switch>
      {routing.map((route) => (
        <Route key={route.label} exact={route.exact} path={route.path}>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

// <Route exact path="/">
// <HomePage token={isAuth} />
// </Route>
// <Route path="/comments">
// <CommentsPage />
// </Route>
// <Route
// path="/:id"
// render={(props) => <ArticlePage {...props} token={isAuth} />}
// />
