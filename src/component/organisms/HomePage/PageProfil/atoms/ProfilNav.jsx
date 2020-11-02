import React from "react";
import { Link } from "react-router-dom";

export default function ProfilNav() {
  return (
    <>
      <div className="profilNav">
        <Link className="navbar-a" to="/Home/Page/Profil/AllEvent">
          All Event
        </Link>
        <Link to='/Home/Page/Profil/MyEvent'>MyEvent</Link>
        <Link to="/Home/Page/Profil/NewPost">New Post</Link>
      </div>
    </>
  );
}
