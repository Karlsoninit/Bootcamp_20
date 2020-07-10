import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import AuthPage from "./pages/auth/AuthPage";

const Loading = () => {
  return <h2>Loading ...</h2>;
};

const LoadableHomePage = Loadable({
  loader: () => import("./pages/HomePage" /* webpackChunkName: "HomePage" */),
  loading: Loading,
});

const LoadableCommentsPage = Loadable({
  loader: () =>
    import("./pages/CommentsPage" /* webpackChunkName: "CommentsPage" */),
  loading: Loading,
});

const LoadableArticlePage = Loadable({
  loader: () =>
    import("./pages/ArticlePage" /* webpackChunkName: "ArticlePage" */),
  loading: Loading,
});

const routing = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: <LoadableHomePage />,
  },
  {
    path: "/comments",
    label: "Comments",
    exact: false,
    component: <LoadableCommentsPage />,
  },
  {
    path: "/:id",
    label: "ArticlePage",
    exact: false,
    component: <LoadableArticlePage />,
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
