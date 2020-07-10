import React, { Component } from "react";
import axios from "axios";
import ProductList from "../productList/ProductList";
import ShopingCart from "../shopingCart/ShopingCart";
import SelectSizeProduct from "../selectSizeProduct/SelectSizeProduct";
import AddProduct from "../addProduct/AddProduct";

//replenish to db
const replenishProductDB = (products) => {
  products.forEach((product) => {
    axios.post("https://news-9cced.firebaseio.com/products.json", product);
  });
};

const findProductById = (id, products) =>
  products.find((product) => product.id === id);

const saveStorage = (storageName, state, product) => {
  localStorage.setItem(storageName, JSON.stringify([...state, product]));
};

class Dashboard extends Component {
  state = {
    cartProduct: [],
    sortProductSize: [],
    isOpen: false,
    chooseSize: null,

    currentProducts: [],
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("nextstate", nextState);
  //   console.log("this.state", this.state);
  //   console.log(nextState.chooseSize !== this.state.chooseSize);

  //   return nextState.chooseSize !== this.state.chooseSize;
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   return { currentProducts: props.products };
  // }

  componentDidMount() {
    console.log("componentDidMount");

    if (localStorage.getItem("onlineBasket")) {
      this.setState({
        cartProduct: JSON.parse(localStorage.getItem("onlineBasket")),
      });
    }

    this.setState({
      flag: true,
      currentProducts: localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : this.props.products,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("prevState", prevState);
    console.log("this.state", this.state);
    if (prevState.chooseSize !== this.state.chooseSize) {
      console.log("---- start filter ----");
      const sortBySIzeProducts = this.state.currentProducts.filter((product) =>
        product.availableSizes.includes(this.state.chooseSize)
      );
      this.setState({ sortProductSize: sortBySIzeProducts });
    }
  }

  addToCart = (id) => {
    console.log(
      this.state.cartProduct.reduce((acc, product) => (acc += product.price), 0)
    );
    const chooseProduct = {
      ...findProductById(id, this.state.currentProducts),
      chooseCart: true,
    };

    this.setState((prev) => {
      return { cartProduct: [...prev.cartProduct, chooseProduct] };
    });

    saveStorage("onlineBasket", this.state.cartProduct, chooseProduct);
  };

  sortBySize = ({ value }) => {
    this.setState({ chooseSize: value });
  };

  showAllProrducts = () => {
    this.setState({ sortProductSize: [], chooseSize: null });
  };

  toogleCart = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  updateProduct = (product) => {
    this.setState((prev) => {
      return {
        currentProducts: [...prev.currentProducts, product],
      };
    });
    saveStorage("products", this.state.currentProducts, product);
  };

  buyProducts = () => {
    localStorage.removeItem("onlineBasket");
    this.setState({ cartProduct: [] });
  };

  render() {
    console.log("render");
    const {
      cartProduct,
      sortProductSize,
      isOpen,
      flag,
      currentProducts,
    } = this.state;

    return (
      <>
        <AddProduct onUpdateProduct={this.updateProduct} />
        <ShopingCart
          onhandleBuyProducts={this.buyProducts}
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
