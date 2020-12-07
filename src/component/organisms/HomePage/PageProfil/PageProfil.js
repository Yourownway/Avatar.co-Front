import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { AuthContext } from "../../../../App"
import {
  usePostData,
  useUpdateNextEvent,
} from "../../../Context/ContextProvider"

import ProfilNav from "./molecules/ProfilNav/ProfilNav"

import ProfilAllEvent from "./molecules/ProfilEvent/ProfilAllEvent"
import ProfilNewPost from "./molecules/ProfilEvent/ProfilNewPost"
import ProfilUser from "./molecules/ProfilUser/ProfilUser"

import ProfilMyEvent from "./molecules/ProfilEvent/ProfilMyEvent"
import useMediaQuery from "../../../utils/useMediaQuery"

export default function PageProfil() {
  const tablette = useMediaQuery("(max-width : 768px)")
  const authValue = useContext(AuthContext)
  const userData = authValue.reducerState.user

  const PostData = usePostData()

  const updateNextEvent = useUpdateNextEvent()
  const [postId, setPostId] = useState([])
  const [postsEventsUser, setPostsEventsUser] = useState([])
  const [usersProfilValidate, setUsersProfilValidate] = useState([])
  const [postsAdmin, setPostsAdmin] = useState([])
  const [validateAdmin, setValidateAdmin] = useState([])

  useEffect(() => {
    const fetchAllPostUser = async () => {
      try {
        const res = await axios.get(`/api/event/${userData.id}/postId`)

        setPostId(res.data)
        if (postId.length > 0) {
          // je recupere les post ou l'user paticipe ou a crée avec les events de tout les users
          await axios
            .all(
              postId.map((postId) =>
                axios.get(`/api/post/${postId.postId}/postById`)
              )
            )
            .then(async (results) => {
              const getData = await results.map((res) => res.data)

              setPostsEventsUser(getData)

              updateNextEvent(getData[0])
              if (getData.length > 0) {
                //recupere tout les events valider
                const getValidation = await getData.map((event) =>
                  event.Events.filter(
                    (eventData) => eventData.eventValidation === true
                  )
                )

                setUsersProfilValidate(getValidation)
              }
              if (getData.length > 0) {
                const getAdmin = await getData.filter(
                  (data) => data.userId === userData.id
                )

                setPostsAdmin(getAdmin)
                if (getAdmin.length > 0) {
                  const getAdminValidation = await getAdmin.map((event) =>
                    event.Events.filter(
                      (eventData) => eventData.eventValidation === true
                    )
                  )
                  setValidateAdmin(getAdminValidation)
                }
              }
            })
        }
      } catch (error) {
        console.log(error, "error")
      }
    }
    fetchAllPostUser()
  }, [
    userData,
    postId.length,
    postsEventsUser.length,
    usersProfilValidate.length,
    PostData,
  ]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="pageUser">
        <div className="pageUser-event">
          <ProfilNav />

          <Switch>
            <Route path="/Home/Page/Profil/AllEvent" exact>
              <ProfilAllEvent
                postDefaultData={postsEventsUser}
                eventsValidate={usersProfilValidate}
              />
            </Route>

            <Route path="/Home/Page/Profil/MyEvent" exact>
              <ProfilMyEvent
                postDefaultData={postsAdmin}
                eventsValidate={validateAdmin}
              />
            </Route>

            <Route
              path="/Home/Page/Profil/NewPost"
              exact
              component={ProfilNewPost}
            />
            <Route path="/Home/Page/Profil" exact>
              <div className="profilUser">
                <ProfilUser postsEventsUser={postsEventsUser} />
              </div>
            </Route>
          </Switch>
        </div>

        {/* mettre une condition avec une route  */}
        {tablette || window.location.pathname === "/Home/Page/Profil" ? null : (
          <ProfilUser postsEventsUser={postsEventsUser} />
        )}
      </div>
    </>
  )
}
