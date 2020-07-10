import React from "react";
import Input from "../../ui/Input";

const Search = ({ onGetSearchValue }) => {
  return (
    <>
      <Input onGetSearchValue={onGetSearchValue} />
    </>
  );
};
export default Search;
