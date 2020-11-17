import React from "react"
import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <div className="navDesktop">
      <ul className="navDesktop-ul">
        <li className="navDesktop-li">
          <NavLink
            activeClassName="selected"
            className="navDesktop-a"
            to="/Home/Page/Profil/Actu"
          >
            ACTU
          </NavLink>
        </li>
        <li className="navDesktop-li">
          <NavLink
            activeClassName="selected"
            className="navDesktop-a"
            to="/Home/Page/Profil/AllEvent"
            exact
          >
            PROFIL
          </NavLink>
        </li>
        <li className="navDesktop-li">
          <NavLink
            activeClassName="selected"
            className="navbar-a"
            to="/Home/Page/Training"
            exact
          >
            TRAINING
          </NavLink>
        </li>
        <li className="navDesktop-li"></li>
      </ul>
      <div className="navDesktop-logo">
        <h1>
          Avatar<span className="green">.co</span>
        </h1>
      </div>
    </div>
  )
}
