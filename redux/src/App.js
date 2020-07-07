import React, { Component } from "react";
import DropdownMenu from "./components/DropdownMenu";
import { connect } from "react-redux";

class App extends Component {
  state = {
    showInfo: false,
  };

  toogle = () => {
    this.setState((prev) => ({ showInfo: !prev.showInfo }));
  };

  render() {
    const { showInfo } = this.state;
    const { name } = this.props;
    return (
      <>
        <button onClick={this.toogle}>more user info</button>
        <h2>hello, welcome back {name}</h2>
        {showInfo && <DropdownMenu />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    name: state.user.name,
  };
};

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(App);
