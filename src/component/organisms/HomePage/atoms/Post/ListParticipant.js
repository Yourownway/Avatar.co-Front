import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../../App"
export default function ListParticipant({ users, post }) {
  const [open, setOpen] = useState(false)
  const URL = "http://localhost:3006/"
  const authValue = useContext(AuthContext)
  const userData = authValue.reducerState.user

  return (
    <>
      <div className="postList-li-bottom-guestContainer">
        <div className="postList-li-bottom-guest">
          <h3 className="red font-name postList-li-bottom-info">
            Participant{" "}
          </h3>

          <button
            className="list participant"
            onClick={() => {
              setOpen(!open)
            }}
          >
            Voir les Participant!
          </button>
        </div>
        <div className="postList-li-bottom-guestNumber">
          {" "}
          <span className="red">{users ? users.length : 0} </span>/
          {post.postMaxGuest}
        </div>
      </div>
      {open ? (
        <div className="postList-li-bottom-guestList">
          {" "}
          <ul>
            {users.map((user) => (
              <li>
                {user.User.userImage ? (
                  <img alt="user Avatar" src={URL + user.User.userImage} />
                ) : null}{" "}
                {user.User.id === userData.id ? (
                  <div>
                    <p className="yellow"> {user.User.firstName} </p>
                    <p className="yellow"> Xp: {user.User.userXp} </p>{" "}
                  </div>
                ) : (
                  <div>
                    <p> {user.User.firstName} </p>
                    <p> Xp: {user.User.userXp} </p>
                  </div>
                )}
              </li>
            ))}
          </ul>{" "}
        </div>
      ) : null}
    </>
  )
}
