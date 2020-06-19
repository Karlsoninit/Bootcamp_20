import React from "react";

import ProductListItem from "../productListItem/ProductListItem";

const ProductList = ({ data, onAddToCart }) => {
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
