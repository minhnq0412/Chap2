import React from "react";
import { useDropDown } from "./dropdown-context";

const Search = () => {
  const {onChange} = useDropDown();
  return (
    <input
      className="p-2 outline-none w-full rounded border border-gray-200"
      type="text"
      placeholder="Search"
      onChange={onChange}
    ></input>
  );
};

export default Search;
