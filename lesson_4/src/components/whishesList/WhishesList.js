import React from "react";
import WishesListItem from "../wishesListItem/WishesListItem";
import DefaultWishPage from "../defaultWishPage/DefaultWishPage";

const WhishesList = ({ wishes, deleteWish }) => {
  return wishes.length !== 0 ? (
    wishes.map((wish) => (
      <WishesListItem deleteWish={deleteWish} key={wish.id} {...wish} />
    ))
  ) : (
    <DefaultWishPage />
  );
};

export default WhishesList;
