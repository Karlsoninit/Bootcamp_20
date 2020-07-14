import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import db from "./db/config";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/main/Dashboard";
import authReducer from "./redux/auth/authReducer";
const { actions } = authReducer;
const { loginSuccessful } = actions;

export const useRouter = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  // change user
  db.auth.onAuthStateChanged((user) => {
    console.log("user change", user);
    if (user) {
      dispatch(loginSuccessful(user));
    }
    setUser(user);
  });

  // const { uid } = useSelector((state) => state.session.user);
  if (!user) {
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
