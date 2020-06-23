import React, { Component } from "react";
import axios from "axios";
import ProductList from "../productList/ProductList";
import ShopingCart from "../shopingCart/ShopingCart";
import SelectSizeProduct from "../selectSizeProduct/SelectSizeProduct";
import AddProduct from "../addProduct/AddProduct";
import { fetchProducts } from "../../services/services";

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

  componentDidMount() {
    // console.log("componentDidMount");
    this.fetcher();
    // (async () => {
    //   const products = await fetchProducts();
    //   this.setState({ currentProducts: products });
    // })();

    if (localStorage.getItem("onlineBasket")) {
      this.setState({
        cartProduct: JSON.parse(localStorage.getItem("onlineBasket")),
      });
    }

    // this.setState({
    //   flag: true,
    //   currentProducts: localStorage.getItem("products")
    //     ? JSON.parse(localStorage.getItem("products"))
    //     : this.props.products,
    // });
  }

  fetcher = async () => {
    console.log("fetcher");
    try {
      const data = await fetchProducts("products");
      this.setState({ currentProducts: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.chooseSize !== this.state.chooseSize) {
      this.filterProductDB();
    }
  }

  filterProductDB = async () => {
    console.log("filterProductDB");
    const data = await fetchProducts("products");
    const sortBySIzeProducts = data.filter((product) =>
      product.availableSizes.includes(this.state.chooseSize)
    );
    this.setState({ sortProductSize: sortBySIzeProducts });
  };

  addToCart = (id) => {
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
