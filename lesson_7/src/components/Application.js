import React from "react";

const MyComponent = (props) => {
  console.log("props myComponent", props);
  return <h2>MyComponent</h2>;
};

class Application extends React.Component {
  state = {
    flag: false,
  };

  componentDidMount() {
    const change =
      `${window.location.origin}${window.location.pathname}` ===
      "http://localhost:3000/home";

    console.log(change);
    if (change) {
      this.setState({ flag: true });
    }
  }

  render() {
    console.log("props Applicastion", this.props);
    const { flag } = this.state;
    return flag ? (
      <MyComponent {...this.props} />
    ) : (
      <>
        <h2>Application</h2>
        <button onClick={() => this.props.method.push("home")}>
          go to home
        </button>
      </>
    );
  }
}

export default Application;
