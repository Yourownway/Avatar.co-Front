import React from "react"
import useNextEvent from "./useNextEvent"

export default function NextEvent() {
  const { state } = useNextEvent()
  return (
    <div className="nextEvent-container">
      <div className="nextEvent">
        <h1>NEXT EVENT </h1> <p>{state.postName} </p>
      </div>{" "}
    </div>
  )
}
