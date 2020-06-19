import React, { Component } from "react";
import ProductList from "../productList/ProductList";

const ShopingCart = ({ isOpen, onCartProduct, toogleCart }) => {
  return (
    <>
      <div style={{ width: 100, height: 100 }} onClick={toogleCart}>
        <img
          style={{ width: "100%" }}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mangoextensions.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F1200x1200%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fj%2Fajaxaddtocartsite.jpg&f=1&nofb=1"
          alt="imageCart"
        />
      </div>
      {/* <button onClick={this.toogleCart}>open cart</button> */}
      {isOpen && <ProductList data={onCartProduct} />}
    </>
  );
};

export default ShopingCart;
