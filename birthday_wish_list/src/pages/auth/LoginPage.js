import React from "react";
import Input from "../../ui/Input";

const LoginPage = ({ handleSubmitForm, handleChange, name, value }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <Input handleChange={handleChange} name={"email"} value={value.email} />
      <Input
        handleChange={handleChange}
        name={"password"}
        value={value.password}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default LoginPage;
