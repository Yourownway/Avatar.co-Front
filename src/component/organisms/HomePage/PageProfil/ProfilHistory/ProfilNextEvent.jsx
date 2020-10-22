import React from 'react'
import useProfilNextEvent from './useProfilNextEvent'

export default function ProfilNextEvent() {
    const {state} = useProfilNextEvent()
      return (
    <div className="profilNextEvent-container">
      <h1>ProfilNextEvent </h1> <p>{state.postName} </p>
    </div>
  );
}
