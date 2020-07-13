import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../../ui/Input";
import { userSignIn } from "../../../redux/auth/authOpearations";

const initialState = {
  email: "",
  nickName: "",
  password: "",
};

const RegisterPage = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(userSignIn(state));
    setState(initialState);
  };

  const handleChange = ({ target: { name, value } }) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        handleChange={handleChange}
        name={"nickName"}
        value={state.nickName}
      />
      <Input handleChange={handleChange} name={"email"} value={state.email} />
      <Input
        handleChange={handleChange}
        name={"password"}
        value={state.password}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default RegisterPage;
