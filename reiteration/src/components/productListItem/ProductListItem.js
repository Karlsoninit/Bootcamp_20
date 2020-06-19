import React from "react";
import styles from "./productListItem.module.css";

const ProductListItem = ({ id, title, sku, addToCart, chooseCart }) => {
  return (
    <li className={styles.productContainer}>
      <img
        className={styles.productImage}
        src={require(`../../../assets/products/${sku}_${
          chooseCart ? 2 : 1
        }.jpg`)}
        alt="products"
      />
      <h2 className={styles.title}>{title}</h2>

      {!chooseCart && <button onClick={() => addToCart(id)}>BUY</button>}
    </li>
  );
};

export default ProductListItem;
