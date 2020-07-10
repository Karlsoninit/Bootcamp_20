import React, { Component } from "react";
import { ApplicationContext } from "./ApplicationContext";

class ContextState extends Component {
  state = {
    theme: false,
  };

  changeTheme = () => {
    this.setState((prev) => ({ theme: !prev.theme }));
  };

  render() {
    const { theme } = this.state;
    return (
      <ApplicationContext.Provider
        value={{ theme, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ApplicationContext.Provider>
    );
  }
}

export default ContextState;
