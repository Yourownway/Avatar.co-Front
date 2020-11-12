import React from "react";
import { Link } from "react-router-dom";

export default function ProfilNav() {
  return (
    <>
      <div className="pageUser-nav">
        <Link className="pageUser-nav-1" to="/Home/Page/Profil/AllEvent">
          ALL EVENT
        </Link>
        <Link className="pageUser-nav-2" to='/Home/Page/Profil/MyEvent'>MY EVENT</Link>
        <Link className="pageUser-nav-3" to="/Home/Page/Profil/NewPost">NEW POST</Link>
      </div>
    </>
  );
}
