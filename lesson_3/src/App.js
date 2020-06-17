import React, { Component } from "react";
import Counter from "./components/counter/Counter";
import Shop from "./components/shop/Shop";

const check = (balance, total) => (balance > total ? balance - total : balance);

class App extends Component {
  state = {
    balance: 0,
  };

  buyProduct = (product, amount) => {
    console.log(product, amount);
    const total = product.price * amount;
    if (this.state.balance > total) {
      this.setState((prev) => ({ balance: check(prev.balance, total) }));
    }
  };

  replenishment = (param) => {
    console.log("app balance ", param);
    this.setState((prev) => ({ balance: prev.balance + param }));
  };

  render() {
    return (
      <>
        <h1>{this.state.balance}</h1>
        <Counter step={12} replenishment={this.replenishment} />
        <Shop buyProduct={this.buyProduct} />
      </>
    );
  }
}

export default App;
