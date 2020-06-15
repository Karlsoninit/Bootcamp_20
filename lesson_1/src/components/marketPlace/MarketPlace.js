import React from "react";
import List from "../list/List";
import Close from "../close/Close";

const MarketPlace = ({ products }) => {
  return products.length !== 0 ? (
    <ul>
      {products.map((product) => (
        <List
          key={product.id}
          data={product}
          date={new Date().toLocaleDateString()}
        />
      ))}
    </ul>
  ) : (
    <Close />
  );
};

export default MarketPlace;
