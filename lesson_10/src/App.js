import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./app.module.css";
console.log("styles", styles);

const moveAnimate = {
  enter: styles.moveEnter,
  enterActive: styles.moveEnterActive,
  exit: styles.moveExit,
  exitActive: styles.moveExitActive,
  enterDone: styles.moveEnterDone,
};

class App extends Component {
  state = {
    isVisible: false,
  };

  handleShowBox = () => {
    this.setState((prev) => ({ isVisible: !prev.isVisible }));
  };

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <button onClick={this.handleShowBox}>show</button>
        <CSSTransition
          in={isVisible}
          timeout={2000}
          classNames={moveAnimate}
          unmountOnExit
        >
          <div style={{ width: 400, height: 400 }}>
            <h2>box</h2>
          </div>
        </CSSTransition>
      </>
    );
  }
}

export default App;
