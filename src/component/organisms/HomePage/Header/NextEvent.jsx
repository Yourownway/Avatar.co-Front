import React from 'react'
import useNextEvent from './useNextEvent'

export default function NextEvent() {
    const {state} = useNextEvent()
      return (
    <div className="profilNextEvent-container">
      <h1>ProfilNextEvent </h1> <p>{state.postName} </p>
    </div>
  );
}
