import React, { useEffect } from "react";
import ProfilHistoryEvent from "./ProfilHistoryEvent";
import ProfilNextEvent from "./ProfilNextEvent";


export default function ProfilHistory({ postDefaultData,eventsValidate}) {


  return (
    <div className='profilHistory-Container'>
      <ProfilNextEvent />
      <ProfilHistoryEvent postDefaultData={postDefaultData} eventsValidate={eventsValidate} />
    </div>
  );
}
