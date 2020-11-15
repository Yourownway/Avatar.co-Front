import React, { useContext, useEffect, useState } from "react"

import useProfilUser from "./useProfilUser"
import banner from "../../../assets/profil/banner.png"
import bell from "../../../assets/profil/notification.png"
import badge from "../../../assets/badge/badge"
import ButtonEditProfil from "./atom/ButtonEditProfil"
import { AuthContext } from "../../../../../../App"
import usePageProfil from "./useProfilUser"
export default function ProfilUser({ postsEventsUser }) {
  const [userRequest, setUserRequest] = useState([])
  const [openNotification, setOpenNotification] = useState(false)
  const [open, setOpen] = useState(false)
  let { requette } = usePageProfil()
  const URL = "http://localhost:3006/"

  const authValue = useContext(AuthContext)
  const userData = authValue.reducerState.user
  const {
    handleClickEdit,
    openEdit,
    handleClickCancelEvent,
    handleClickDeclineEvent,
    handleClickValidation,
  } = useProfilUser()
  useEffect(() => {
    console.log("mise a jour ==========>")
    const getRequest = async () => {
      const request = await postsEventsUser.map((post) =>
        post.Events.filter(
          (events) =>
            events.eventValidation === false &&
            events.eventRequest === true &&
            events.eventIsAdmin === false
        )
      )

      setUserRequest(request)
    }
    getRequest()
  }, [postsEventsUser, userRequest.length, requette])

  return (
    <>
      <div className="pageUser-profil">
        <div className="pageUser-profil-header">
          <h1 className="font-menu">PROFIL </h1>
          <h1 className="font-name">{userData.firstName}</h1>
        </div>
        <div className="pageUser-profil-container">
          <div className="pageUser-profil-container-img">
            <img
              src={bell}
              className="pageUser-profil-bell"
              onClick={() => {
                if (open) setOpen(!open)
                setOpenNotification(!openNotification)
              }}
            />
            <img
              className="pageUser-profil-avatar-img"
              src={URL + userData.userImage}
            />
            <img src={banner} className="pageUser-profil-banner-img" />{" "}
            <h1 className="font-name pageUser-profil-banner-h1">
              {userData.firstName}
            </h1>
          </div>

          <div className="pageUser-profil-container-data">
            <div className="pageUser-profil-container-Xpdata">
              <div className="pageUser-profil-badge-container">
                <img className="pageUser-profil-badge" src={badge.badge2.img} />
                <p className="font-badge pageUser-profil-badge-descritpion">
                  "{badge.badge2.name}"
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  XP:<span className="white">{userData.userXp}</span>{" "}
                </p>
                <div className="pageUser-profil-container-Xpbar">
                  <div
                    className="pageUser-profil-content-Xpbar"
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
            </div>
            <div className="pageUser-profil-data">
              <h2>
                Name:
                <span className="font-name white"> {userData.firstName}</span>
              </h2>
              <h2>
                Email:
                <span className="font-name white">{userData.userEmail}</span>
              </h2>
            </div>
            <button
              className="btn btn-edit"
              onClick={() => {
                if (openNotification) setOpenNotification(!openNotification)
                setOpen(!open)
              }}
            >
              Edit
            </button>

            {/* <p> <span>Description:</span>{userData.userDescription}</p> */}
            {/* <UserEditForm userData={userData}/>   */}
          </div>
        </div>

        {/* <h1>Vous avez {userRequest.length} Notification</h1> */}

        <ButtonEditProfil open={open} setOpen={setOpen} userData={userData} />
        {openNotification ? (
          <div>
            <div className="pageUser-profil-notification">
              <div className="pageUser-profil-notification-header">
                <h1 className="font-menu">NOTIFICATION</h1>
                <button
                  className="btn"
                  onClick={() => {
                    setOpenNotification(!openNotification)
                  }}
                >
                  X
                </button>
              </div>
              <div className="notifList">
                {userRequest.length > 0 && postsEventsUser
                  ? userRequest.map((events, i) =>
                      events.map((event) => (
                        <ul>
                          <li className="notifList-li">
                            {event.userId === userData.id ? (
                              <>
                                <div className="notifList-li-top">
                                  <p>
                                    <span className="font-description">
                                      Vous
                                    </span>
                                    souhaitez participer à
                                    {postsEventsUser[i] ? (
                                      <span className="font-description">
                                        {postsEventsUser[i]["postName"]}
                                      </span>
                                    ) : (
                                      <h1>Loading...</h1>
                                    )}
                                  </p>
                                </div>
                                <div className="notifList-li-bottom">
                                  <button
                                    className="btn"
                                    key={event.id}
                                    onClick={() =>
                                      handleClickCancelEvent(
                                        postsEventsUser[i].id,
                                        userData.id
                                      )
                                    }
                                  >
                                    annuler
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="notifList-li-top">
                                  <p>
                                    <span className="font-name">
                                      {event.User.firstName}
                                    </span>
                                    souhaite participer à votre evenement
                                    {postsEventsUser[i] ? (
                                      <span className="font-description">
                                        {postsEventsUser[i]["postName"]}
                                      </span>
                                    ) : null}
                                  </p>

                                  {event.eventComment ? (
                                    <h3>message: {event.eventComment}</h3>
                                  ) : null}
                                </div>
                                <div className="notifList-li-bottom">
                                  <button
                                    className="btn"
                                    onClick={() =>
                                      handleClickDeclineEvent(
                                        postsEventsUser[i].id,
                                        event.userId
                                      )
                                    }
                                  >
                                    Refuser
                                  </button>
                                  <button
                                    className="btn"
                                    onClick={() =>
                                      handleClickValidation(
                                        postsEventsUser[i].id,
                                        event.userId
                                      )
                                    }
                                  >
                                    Accepter
                                  </button>
                                </div>
                              </>
                            )}
                          </li>
                        </ul>
                      ))
                    )
                  : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}
