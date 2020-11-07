import React from "react";
import useSearchbar from "./useSearchbar";


export default function SearchBar() {
const {searchInput , handleChange} = useSearchbar();

  return (
    <div className="pageTraining-search">
      <input
        onChange={handleChange}
        value={searchInput}
        className="pageTraining-search-input"
        type="text"
        placeholder="appuyer pour rechercher"
      ></input>
      <button>Send</button>
    </div>
  );
}
