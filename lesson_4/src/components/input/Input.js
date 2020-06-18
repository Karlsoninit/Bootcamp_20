import React from "react";

const Input = ({ inputLabel, name, value, onChange, placeholder }) => {
  return (
    <label>
      {inputLabel}
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
