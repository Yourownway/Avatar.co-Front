import React,{useEffect, useState} from "react";
import Post from "../../atoms/Post/Post";



export default function ProfilHistoryEvent({ postDefaultData,eventsValidate}) {




  return (
    <div className="postList">


      <Post   postDefaultData={postDefaultData} eventsValidate={eventsValidate}/>

    </div>
  );
}

