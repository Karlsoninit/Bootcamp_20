import React from "react";
import Sold from "../sold/Sold";

const Wrapper = ({ children, title }) => {
  const availableSizes = children.props.data.availableSizes.length;
  console.log("availableSizes", availableSizes);
  return (
    <>
      <h2>{title}</h2>
      {availableSizes !== 0 ? children : <Sold />}
      <button>more size info</button>
    </>
  );
};

export default Wrapper;
