import React from "react";
import { connect } from "react-redux";
import EditingProfile from "./EditingProfile";

const DropdownMenu = ({ user: { nickName, birthday } }) => {
  return (
    <div>
      <h2>{nickName}</h2>
      <h3>{birthday}</h3>
      <h3>{nickName}</h3>
      <button>update profile</button>
      <EditingProfile />
    </div>
  );
};

const mSTP = (state) => ({
  user: state.session.user,
});

export default connect(mSTP)(DropdownMenu);
