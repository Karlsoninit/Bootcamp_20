import React from "react";

export const hideItem = (BaseComponent) => {
  return class HideItem extends React.Component {
    state = {
      isVisible: true,
    };
    toggler = () => {
      this.setState((prev) => ({ isVisible: !prev.isVisible }));
    };

    render() {
      console.log("this.props", this.props);
      const { isVisible } = this.state;
      return (
        <>
          <button onClick={this.toggler}>hide</button>
          {isVisible ? (
            <BaseComponent {...this.props} />
          ) : (
            <h2>{this.props.task}</h2>
          )}
        </>
      );
    }
  };
};
