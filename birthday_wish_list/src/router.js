import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/main/Dashboard";
// import BirthdayBoyWishes from "./pages/main/BirthdayBoyWishes";
// import CreateBirthdayBoyWish from "./pages/main/CreateBirthdayBoyWish";
// import WishDescription from "./pages/main/WishDescription";

export const useRouter = (isAuth) => {
  if (!isAuth) {
    return (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Redirect to="/dashboard" />
    </Switch>
  );
};
