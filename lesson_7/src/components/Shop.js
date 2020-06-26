import React from "react";

const Shop = (props) => {
  console.log("props", props);
  return (
    <>
      <h2>Shop</h2>
      <button onClick={() => props.method.push("/shop")}>add new page</button>
      <button onClick={() => props.method.push("/shop/nextPage")}>
        add more page
      </button>
    </>
  );
};

export default Shop;
