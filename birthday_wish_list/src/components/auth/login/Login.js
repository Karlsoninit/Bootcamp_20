import React from "react";
import Input from "../../../ui/Input";

const RegisterPage = () => {
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
  };

  const handleChange = () => {};

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        handleChange={handleChange}
        name={"nickName"}
        // value={value.nickName}
      />
      <Input
        handleChange={handleChange}
        name={"email"}
        //   value={value.email}
      />
      <Input
        handleChange={handleChange}
        name={"password"}
        // value={value.password}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default RegisterPage;
