import React from "react";
import List from "../list/List";
import Close from "../close/Close";
// import Wrapper from "../wrapper/Wrapper";
import MediaCard from "../../ui/Card";
import PropTypes from "prop-types";

const MarketPlace = ({ products }) => {
  return products.length !== 0 ? (
    <ul>
      {products.map((product) => (
        // <MediaCard key={product.id} data={product} />
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

MarketPlace.propTypes = {
  products: PropTypes.array,
};

export default MarketPlace;

// <Wrapper key={product.id} title={"T-SHIRT"}>
{
  /* <List data={product} date={new Date().toLocaleDateString()} /> */
}
{
  /* </Wrapper> */
}
