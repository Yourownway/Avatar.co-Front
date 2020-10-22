import React from "react";
import SearchBar from "../atoms/ShearchBar/SearchBar";
import Nav from '../atoms/Nav'

export default function Header() {
  return (
    <>
      <div className="header">
        <Nav/>
        <h1 className="logo">Sport.co</h1>
      </div>
      <SearchBar/>
    </>
  );
}
