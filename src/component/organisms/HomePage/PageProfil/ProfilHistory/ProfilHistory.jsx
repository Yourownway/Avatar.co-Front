import React, { useEffect } from "react";
import ProfilHistoryEvent from "./ProfilHistoryEvent";
import ProfilNextEvent from "./ProfilNextEvent";


export default function ProfilHistory({allPostUser, eventsPostUser}) {


  return (
    <div className='profilHistory-Container'>
      <ProfilNextEvent />
      <ProfilHistoryEvent eventsPostUser={eventsPostUser} allPostUser={allPostUser} />
    </div>
  );
}
