import React from "react";
import MarketPlace from "./marketPlace/MarketPlace";
import products from "../products.json";
import Close from "./close/Close";

console.log(products);

const App = () => {
  return (
    <>
      <MarketPlace products={products} />
    </>
  );
};

export default App;
