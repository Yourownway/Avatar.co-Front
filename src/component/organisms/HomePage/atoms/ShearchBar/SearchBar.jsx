import React from "react";
import useSearchbar from "./useSearchbar";


export default function SearchBar() {
const {searchInput , handleChange} = useSearchbar();

  return (
    <div className="header-searchBar-container">
      <input
        onChange={handleChange}
        value={searchInput}
        className="header-searchBar"
        type="text"
        placeholder="appuyer pour rechercher"
      ></input>
      <button>Send</button>
    </div>
  );
}
