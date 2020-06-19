import React, { Component } from "react";
import products from "../../products.json";
import ProductList from "../productList/ProductList";
import ShopingCart from "../shopingCart/ShopingCart";
import SelectSizeProduct from "../selectSizeProduct/SelectSizeProduct";

const findProductById = (id) => products.find((product) => product.id === id);

class Dashboard extends Component {
  state = {
    cartProduct: [],
    sortProductSize: [],
    isOpen: false,
  };

  addToCart = (id) => {
    console.log();
    const chooseProduct = { ...findProductById(id), chooseCart: true };

    this.setState((prev) => ({
      cartProduct: [...prev.cartProduct, chooseProduct],
    }));
  };

  sortBySize = ({ value }) => {
    console.log("size", value);
    const sortBySIzeProducts = products.filter((product) =>
      product.availableSizes.includes(value)
    );
    this.setState({ sortProductSize: sortBySIzeProducts });
  };

  showAllProrducts = () => {
    this.setState({ sortProductSize: [] });
  };

  toogleCart = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  render() {
    const { cartProduct, sortProductSize, isOpen } = this.state;
    return (
      <>
        <ShopingCart
          onCartProduct={cartProduct}
          isOpen={isOpen}
          toogleCart={this.toogleCart}
        />
        {!isOpen && (
          <>
            <SelectSizeProduct data={products} onSortBySize={this.sortBySize} />
            <button onClick={this.showAllProrducts}>
              show all products size
            </button>
          </>
        )}

        <ProductList
          data={sortProductSize.length !== 0 ? sortProductSize : products}
          onAddToCart={this.addToCart}
        />
      </>
    );
  }
}

export default Dashboard;
