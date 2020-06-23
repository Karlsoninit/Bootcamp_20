import React from "react";

import ProductListItem from "../productListItem/ProductListItem";

const ProductList = ({ data, onAddToCart }) => {
  console.log("product list render");
  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((product) => (
        <ProductListItem
          key={product.id}
          {...product}
          addToCart={onAddToCart}
        />
      ))}
    </ul>
  );
};

export default ProductList;
