import React, { Component } from "react";
import { connect } from "react-redux";
// import { editingProfile } from "../redux/reducers";
import { updateProfile } from "../redux/operations";

const initialState = {
  name: "",
  age: "",
  birthday: "",
  nickName: "",
  id: "",
};

class EditingProfile extends Component {
  state = initialState;

  componentDidMount() {
    this.setState(this.props.user);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("this.state", this.state);
    this.props.updateProfile(this.state);
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { nickName, birthday } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="editing nickname"
          value={nickName}
          name="nickName"
          onChange={this.handleChange}
        />
        <input
          type="date"
          placeholder="editing birthday"
          value={birthday}
          name="birthday"
          onChange={this.handleChange}
        />
        <button>CHANGE</button>
      </form>
    );
  }
}

const mSTP = (state) => ({
  user: state.session.user,
});

const mDTP = {
  updateProfile,
};

export default connect(mSTP, mDTP)(EditingProfile);
