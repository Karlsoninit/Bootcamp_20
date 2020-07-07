import React from "react";
import { connect } from "react-redux";
import EditingProfile from "./EditingProfile";

const DropdownMenu = ({ user: { nickName, birthday } }) => {
  return (
    <div>
      <h2>{nickName}</h2>
      <h3>{birthday}</h3>
      <button>editing profile</button>
      <EditingProfile />
    </div>
  );
};

const mSTP = (state) => ({
  user: state.user,
});

export default connect(mSTP)(DropdownMenu);
