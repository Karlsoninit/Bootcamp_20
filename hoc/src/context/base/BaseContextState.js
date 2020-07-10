import React, { Component } from "react";
import { BaseContext } from "./BaseContext";

class BaseContextState extends Component {
  state = {
    subscription: true,
  };

  render() {
    const { subscription } = this.state;
    return (
      <BaseContext.Provider value={{ subscription }}>
        {this.props.children}
      </BaseContext.Provider>
    );
  }
}

export default BaseContextState;
