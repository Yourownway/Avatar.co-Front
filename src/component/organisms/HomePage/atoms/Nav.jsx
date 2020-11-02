import React from "react";
import { NavLink } from "react-router-dom";


export default function Nav() {
 
  return (
    <div className="navbar">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <NavLink
            activeClassName="navbar-a-current"
            className="navbar-a"
            to="/Home/Page/Profil/AllEvent"
            exact
          >
            Profil
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink
            activeClassName="navbar-a-current"
            className="navbar-a"
            to="/Home/Page/Training" 
            exact
          >
            Training
          </NavLink>
        </li>
         <li className="navbar-li">
          <NavLink
            activeClassName="navbar-a-current"
            className="navbar-a"
            to="/Home/Page/Coaching"
            exact
          >
            Coaching
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
