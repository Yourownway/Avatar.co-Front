import React from "react";

import Post from "../../atoms/Post/Post";
// import useProfilHistoryEvent from './useProfilHistoryEvent'
export default function ProfilHistoryEvent({userPost}) {
   


  return (
    <div className="profilNextEvent-container">
      <h1>HistroyEvent </h1>
      {userPost ? <Post postDefaultData={userPost} /> : null}
    </div>
  );
}
