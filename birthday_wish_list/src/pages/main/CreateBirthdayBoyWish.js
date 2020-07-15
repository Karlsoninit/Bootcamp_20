import React, { useState } from "react";
import Input from "../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  createListWishes,
  checkUserCollectionId,
} from "../../redux/wishes/wishesOperations";

const CreateBirthdayBoyWish = () => {
  const [wish, setWish] = useState("");
  const { collectionId } = useSelector((state) => state.wishes);
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (wish.trim()) {
      dispatch(createListWishes(wish));
    }

    if (!collectionId) {
      dispatch(checkUserCollectionId());
    }
  };

  const handleChange = ({ target: { value } }) => {
    setWish(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="wish" handleChange={handleChange} />
    </form>
  );
};

export default CreateBirthdayBoyWish;
