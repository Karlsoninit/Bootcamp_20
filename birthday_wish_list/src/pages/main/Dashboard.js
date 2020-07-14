import React from "react";
import { useDispatch } from "react-redux";
import { userSignOut } from "../../redux/auth/authOpearations";
import { Route, Link } from "react-router-dom";
import CreateBirthdayBoyWish from "./CreateBirthdayBoyWish";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Dashboard</h2>
      <button
        onClick={() => {
          dispatch(userSignOut());
        }}
      >
        logout
      </button>
      <Link to="/dashboard/createWish">create</Link>
      <Route path="/dashboard/createWish">
        <CreateBirthdayBoyWish />
      </Route>
    </>
  );
};

export default Dashboard;
