import React from "react";
import { NavLink } from "react-router-dom";


export default function Nav() {
 
  return (
    <div className="navDesktop">
      <ul className="navDesktop-ul">
        <li className="navDesktop-li">
           <NavLink
            activeClassName="navDesktop-a-current"
            className="navDesktop-a"
            to="/Home/Page/Profil/AllEvent"
            exact
          >ACTU</NavLink>
        </li>
                <li className="navDesktop-li">
          <NavLink
            activeClassName="navDesktop-a-current"
            className="navDesktop-a"
            to="/Home/Page/Profil/AllEvent"
            exact
          >
            PROFIL
          </NavLink>
        </li>
        <li className="navDesktop-li">
          <NavLink
            activeClassName="navbar-a-current"
            className="navbar-a"
            to="/Home/Page/Training" 
            exact
          >
            TRAINING
          </NavLink>
        </li>
         <li className="navDesktop-li">
          {/* <NavLink
            activeClassName="navbar-a-current"
            className="navbar-a"
            to="/Home/Page/Coaching"
            exact
          >
            COACHING
          </NavLink> */}
        </li>
      </ul>
        <div className="navDesktop-logo"><h1>Sport.co</h1></div> 
    </div>
  );
}
