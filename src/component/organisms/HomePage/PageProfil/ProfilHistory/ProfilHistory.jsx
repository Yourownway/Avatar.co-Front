import React from "react";
import ProfilHistoryEvent from "./ProfilHistoryEvent";
import ProfilNextEvent from "./ProfilNextEvent";


export default function ProfilHistory({ }) {
  return (
    <div>
      <ProfilNextEvent />
      <ProfilHistoryEvent  />
    </div>
  );
}
