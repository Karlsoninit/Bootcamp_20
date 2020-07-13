import React from "react";
import { useDispatch } from "react-redux";
import {
  userSignOut,
  AuthStateChanged,
} from "../../redux/auth/authOpearations";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Dashboard</h2>
      <button
        onClick={() => {
          dispatch(userSignOut());
          dispatch(AuthStateChanged());
        }}
      >
        logout
      </button>
    </>
  );
};

export default Dashboard;
