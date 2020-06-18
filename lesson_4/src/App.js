import React, { Component } from "react";
import Form from "./components/form/Form";
import WhishesList from "./components/whishesList/WhishesList";

class App extends Component {
  state = {
    wishes: [],
  };

  getWishes = (wish) => {
    console.log("wish", wish);
    this.setState((prev) => ({ wishes: [...prev.wishes, wish] }));
  };

  deleteWish = (id) => {
    this.setState((prev) => ({
      wishes: prev.wishes.filter((wish) => wish.id !== id),
    }));
  };

  render() {
    const { wishes } = this.state;
    return (
      <>
        <Form getWishes={this.getWishes} />
        <WhishesList wishes={wishes} deleteWish={this.deleteWish} />
      </>
    );
  }
}

export default App;
