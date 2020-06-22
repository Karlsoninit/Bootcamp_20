import React, { Component } from "react";

import ProductList from "../productList/ProductList";
import ShopingCart from "../shopingCart/ShopingCart";
import SelectSizeProduct from "../selectSizeProduct/SelectSizeProduct";
import AddProduct from "../addProduct/AddProduct";

const findProductById = (id, products) =>
  products.find((product) => product.id === id);

class Dashboard extends Component {
  state = {
    cartProduct: [],
    sortProductSize: [],
    isOpen: false,
    chooseSize: null,
    flag: false,
    currentProducts: [],
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("nextstate", nextState);
  //   console.log("this.state", this.state);
  //   console.log(nextState.chooseSize !== this.state.chooseSize);

  //   return nextState.chooseSize !== this.state.chooseSize;
  // }

  componentDidMount() {
    console.log("componentDidMount");
    // if (localStorage.getItem("products")) {
    //   this.setState({
    //     flag: true,
    //     currentProducts: JSON.parse(localStorage.getItem("products")),
    //   });
    // } else {
    //   this.setState({
    //     flag: true,
    //     currentProducts: this.props.products,
    //   });
    // }

    this.setState({
      flag: true,
      currentProducts: localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : this.props.products,
    });
  }

  addToCart = (id) => {
    console.log();
    const chooseProduct = {
      ...findProductById(id, this.state.currentProducts),
      chooseCart: true,
    };

    this.setState((prev) => {
      return { cartProduct: [...prev.cartProduct, chooseProduct] };
    });
  };

  sortBySize = ({ value }) => {
    console.log("size", value);
    this.setState({ chooseSize: value });
    const sortBySIzeProducts = this.state.currentProducts.filter((product) =>
      product.availableSizes.includes(value)
    );
    this.setState({ sortProductSize: sortBySIzeProducts });
  };

  showAllProrducts = () => {
    this.setState({ sortProductSize: [], chooseSize: null });
  };

  toogleCart = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  updateProduct = (product) => {
    this.setState((prev) => {
      localStorage.setItem(
        "products",
        JSON.stringify([...prev.currentProducts, product])
      );
      return {
        currentProducts: [...prev.currentProducts, product],
      };
    });
  };

  render() {
    const {
      cartProduct,
      sortProductSize,
      isOpen,
      flag,
      currentProducts,
    } = this.state;
    console.log("render dashboard");
    console.log("show flag", flag);
    console.log("this.state.currentProducts", this.state.currentProducts);
    console.log("------------");
    return (
      <>
        <AddProduct onUpdateProduct={this.updateProduct} />
        <ShopingCart
          onCartProduct={cartProduct}
          isOpen={isOpen}
          toogleCart={this.toogleCart}
        />
        {!isOpen && (
          <>
            <SelectSizeProduct
              data={currentProducts}
              onSortBySize={this.sortBySize}
            />
            <button onClick={this.showAllProrducts}>
              show all currentProducts size
            </button>
          </>
        )}

        <ProductList
          data={
            sortProductSize.length !== 0 ? sortProductSize : currentProducts
          }
          onAddToCart={this.addToCart}
        />
      </>
    );
  }
}

export default Dashboard;
