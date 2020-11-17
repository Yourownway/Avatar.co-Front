import React, { useState } from "react"
import User from "../Header/User"
import { NavLink } from "react-router-dom"

export default function NavPhone() {
  const [open, setOpen] = useState(false)
  return (
    <div className="navPhone">
      <div className="navPhone-burger" onClick={() => setOpen(!open)}>
        <div className="navPhone-burger-1"></div>
        <div className="navPhone-burger-2"></div>
        <div className="navPhone-burger-3"></div>
      </div>

      <User />

      {open ? (
        <div className="navPhone-menu">
          <ul className="navPhone-ul">
            <li className="navPhone-li">
              <NavLink
                activeClassName="selected"
                className="navPhone-a"
                to="/Home/Page/Actu"
                exact
              >
                ACTU
              </NavLink>
            </li>
            <li className="navPhone-li">
              <NavLink
                className="navPhone-a"
                to="/Home/Page/Profil/AllEvent"
                activeClassName="selected"
                exact
              >
                PROFIL
              </NavLink>
            </li>
            <li className="navPhone-li">
              <NavLink
                className="navbar-a"
                to="/Home/Page/Training"
                activeClassName="selected"
                exact
              >
                TRAINING
              </NavLink>
            </li>
            <li className="navPhone-li"></li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}
