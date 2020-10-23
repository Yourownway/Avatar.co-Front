import React from "react";
import useProfilHistoryEvent from './useProfilHistoryEvent'
import Post from "../../../../atoms/Post/Post";

// import useProfilHistoryEvent from './useProfilHistoryEvent'
export default function ProfilHistoryEvent() {
   
const {userPostData} = useProfilHistoryEvent()

  return (
    <div className="profilNextEvent-container">
      <h1>HistroyEvent </h1>
    {/* {  userPostData.map((data)=> data.postName)} */}
      <Post postDefaultData={userPostData} /> 

    </div>
  );
}
