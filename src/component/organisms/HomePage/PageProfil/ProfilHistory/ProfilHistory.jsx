import React from "react";
import ProfilHistoryEvent from "./ProfilHistoryEvent";
import ProfilNextEvent from "./ProfilNextEvent";


export default function ProfilHistory({ userPost }) {
  return (
    <div>
      <ProfilNextEvent />
      <ProfilHistoryEvent userPost={userPost} />
    </div>
  );
}
