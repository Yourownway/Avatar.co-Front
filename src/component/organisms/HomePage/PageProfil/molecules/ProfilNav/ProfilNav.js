import React from "react"
import { NavLink } from "react-router-dom"

export default function ProfilNav() {
  return (
    <>
      <div className="pageUser-nav">
        <NavLink
          activeClassName="selected"
          className="pageUser-nav-1"
          to="/Home/Page/Profil/AllEvent"
        >
          ALL EVENT
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="pageUser-nav-2"
          to="/Home/Page/Profil/MyEvent"
        >
          MY EVENT
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="pageUser-nav-3"
          to="/Home/Page/Profil/NewPost"
        >
          NEW POST
        </NavLink>
      </div>
    </>
  )
}
