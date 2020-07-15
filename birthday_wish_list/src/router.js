import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import db from "./db/config";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/main/Dashboard";
import authReducer from "./redux/auth/authReducer";
const { actions } = authReducer;
const { loginSuccessful } = actions;

export const useRouter = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  // check user
  db.auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("<-- check user -->", user);
      dispatch(loginSuccessful(user));
    }
    setUser(user);
  });

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
