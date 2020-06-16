import React from "react";
import PropTypes from "prop-types";
import { Container, Image } from "./listStyles";

const transformString = (num) => (typeof num === "string" ? Number(num) : num);

const List = ({ data: { title, sku } }) => {
  const change = transformString(sku);
  return (
    <Container image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDH6tZrTUpfY%2Fmaxresdefault.jpg&f=1&nofb=1">
      <h2>{title}</h2>
      <Image image={require(`../../../assets/products/${change}_1.jpg`)} />
    </Container>
  );
};

List.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    sku: PropTypes.number,
  }),
};

export default List;
