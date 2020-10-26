import React from "react";
import ProfilHistoryEvent from "./ProfilHistoryEvent";
import ProfilNextEvent from "./ProfilNextEvent";


export default function ProfilHistory({eventsPostUser,postUser}) {
  return (
    <div>
      <ProfilNextEvent eventsPostUser={eventsPostUser}/>
      <ProfilHistoryEvent eventsPostUser={eventsPostUser} postUser={postUser}/>
    </div>
  );
}
