import React, { Component } from "react";
import DropdownMenu from "./components/DropdownMenu";
import { connect } from "react-redux";
import { editingProfile } from "./redux/actions";
import { uploadUserProfile } from "./redux/operations";

class App extends Component {
  state = {
    showInfo: false,
  };

  componentDidMount() {
    this.props.uploadUserProfile();
  }

  toogle = () => {
    this.setState((prev) => ({ showInfo: !prev.showInfo }));
  };

  render() {
    const { showInfo } = this.state;
    const { name } = this.props;
    return (
      <>
        <button onClick={this.toogle}>more user info</button>
        <h2>
          hello, welcome back {this.props.loading ? "wait fetch ...." : name}
        </h2>
        {showInfo && <DropdownMenu />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.session.user.name,
    loading: state.session.loading,
  };
};

const mapDispatchToProps = {
  uploadUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
