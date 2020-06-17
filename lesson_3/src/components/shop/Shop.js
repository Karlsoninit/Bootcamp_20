import React from "react";

const products = {
  milk: {
    price: 30,
    name: "Milk",
  },
  apple: {
    price: 25,
    name: "Apple",
  },
  coffe: {
    price: 130,
    name: "Coffe",
  },
};

const Shop = ({ buyProduct }) => {
  console.log("Shop");
  return (
    <>
      <div>
        <h2>apple</h2>
        <button onClick={() => buyProduct(products.apple, 11)}>
          buy: {products.apple.name}
        </button>
      </div>
      <div>
        <h2>milk</h2>
        <button>buy: {products.milk.name}</button>
      </div>
      <div>
        <h2>coffe</h2>
        <button>buy: {products.coffe.name}</button>
      </div>
    </>
  );
};

export default Shop;
