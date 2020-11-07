import React from "react";
import SearchBar from "../atoms/ShearchBar/SearchBar";
import Nav from '../atoms/Nav'

import User from "./User";
import NextEvent from "./NextEvent";
import useMediaQuery from "../../../utils/useMediaQuery";
import NavPhone from "../atoms/NavPhone";

export default function Header() {
  const phone = useMediaQuery("(max-width : 425px)")
  return (
    <>
      <div className="header">
       
      
  
  {phone?(<><NavPhone/>
   <NextEvent />
  </>): (<> <Nav/>
  
 <NextEvent /><User/></>
   )}
 

        
      </div>
    </>
  );
}
