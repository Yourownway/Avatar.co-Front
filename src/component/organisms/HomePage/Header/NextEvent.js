import React from "react"
import { useNextEvent } from "../../../Context/ContextProvider"
import Moment from "react-moment"
import "moment-timezone"
import "moment/locale/fr"
export default function NextEvent() {
  const nextEvent = useNextEvent()
  console.log(nextEvent)
  return (
    <div className="nextEvent-container">
      <div className="nextEvent">
        {nextEvent ? (
          <>
            <h1>NEXT EVENT </h1>{" "}
            <div className=" nextEvent-description font-description">
              <p>{nextEvent.Parc.parcName}</p>
              {"                "}
              <p
                // style={{ textTransform: "capitalize" }}
                className="font-description red"
              >
                <Moment locale="de" fromNow>
                  {nextEvent.postDate}
                </Moment>
              </p>{" "}
              <p>{nextEvent.postName}</p>
            </div>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>{" "}
    </div>
  )
}
