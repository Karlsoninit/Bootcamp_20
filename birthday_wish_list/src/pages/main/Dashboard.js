import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSignOut } from "../../redux/auth/authOpearations";
import { Route, Link } from "react-router-dom";
import CreateBirthdayBoyWish from "./CreateBirthdayBoyWish";
import {
  checkUserCollectionId,
  getAllUsersWisheCollection,
} from "../../redux/wishes/wishesOperations";
import UserList from "../../components/userList/UserList";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserCollectionId());
    dispatch(getAllUsersWisheCollection());
  }, []);
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
      <UserList />
    </>
  );
};

export default Dashboard;
