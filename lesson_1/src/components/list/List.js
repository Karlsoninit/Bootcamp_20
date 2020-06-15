import React from "react";

const List = ({ data, date }) => {
  console.log("data", data);

  return (
    <li>
      <h1>{date}</h1>
      <h2>{data.title}</h2>
      <img
        src={require(`../../../assets/products/${data.sku}_1.jpg`)}
        alt="productImage"
      />
    </li>
  );
};

export default List;
