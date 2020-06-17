import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
    isShow: false,
  };

  increment = () => {
    this.setState((prev, p) => {
      console.log("prev", prev);
      return { count: prev.count + p.step };
    });
    console.log(this.state.count);
  };

  terminal = () => {
    this.setState((prev) => {
      return { isShow: !prev.isShow };
    });
  };

  replenish = () => {
    this.props.replenishment(this.state.count);
    this.setState({ count: 0 });
  };

  render() {
    console.log("render");

    const { count, isShow } = this.state;
    return (
      <>
        <button onClick={this.terminal}>
          {isShow ? "hide" : "show"} terminal
        </button>
        {isShow && (
          <>
            <button onClick={this.increment}>plus</button>
            <h2>COUNTER: {count}</h2>
            <button onClick={this.replenish}>replenish</button>
          </>
        )}
      </>
    );
  }
}
