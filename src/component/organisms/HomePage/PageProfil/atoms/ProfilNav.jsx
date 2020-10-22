import React from "react";
import { Link } from "react-router-dom";

export default function ProfilNav() {
  return (
    <>
      <div className="profilNav">
        <Link className="navbar-a" to="/Home/Page/Profil/History">
          Mes Entrainement
        </Link>
        <Link to="/Home/Page/Profil/Post">Post</Link>
      </div>
    </>
  );
}
