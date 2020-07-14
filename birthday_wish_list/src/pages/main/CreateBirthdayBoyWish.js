import React, { useState } from "react";
import Input from "../../ui/Input";
import { useDispatch } from "react-redux";
import { createListWishes } from "../../redux/wishes/wishesOperations";

const CreateBirthdayBoyWish = () => {
  const [wish, setWish] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (wish.trim()) {
      dispatch(createListWishes(wish));
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
