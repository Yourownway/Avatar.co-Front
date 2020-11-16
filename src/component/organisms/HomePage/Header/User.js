import React, { useContext } from "react"
import { AuthContext } from "../../../../App"
import badges from "../assets/badge/badge"
import { useHistory } from "react-router-dom"
export default function User() {
  const authValue = useContext(AuthContext)
  const userData = authValue.reducerState.user
  let history = useHistory()
  return (
    <div className="user">
      <div
        className="user-container"
        onClick={() => history.push("/Home/Page/Profil/")}
      >
        <div className="header-user-data">
          <h1 className="header-user-name font-name ">{userData.firstName}</h1>{" "}
          <p className="font-description">
            {" "}
            XP:<span className="white">{userData.userXp}</span>{" "}
          </p>
          <div className="header-user-container-Xpbar">
            <div
              className="header-user-content-Xpbar"
              style={{
                width:
                  `${userData.userXp}`.substring(
                    1,
                    `${userData.userXp}`.length - 1
                  ) + "%",
              }}
            ></div>
          </div>
        </div>
        {userData.userBadge ? (
          <div className="header-user-badge">
            <img
              className="header-user-badge-img "
              src={badges[`${userData.userBadge}`].img}
            />
            <p className="font-badge header-user-badge-descritpion">
              "{badges[`${userData.userBadge}`].name}"
            </p>{" "}
          </div>
        ) : null}
      </div>
    </div>
  )
}
