import axios from "axios"
import React, { useContext, useEffect, useReducer, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { AuthContext } from "../../../../App"
import { usePostData } from "../../../Context/ContextProvider"

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
  const [postId, setPostId] = useState([])
  const [postsEventsUser, setPostsEventsUser] = useState([])
  const [usersProfilValidate, setUsersProfilValidate] = useState([])
  const [postsAdmin, setPostsAdmin] = useState([])
  const [validateAdmin, setValidateAdmin] = useState([])

  const token = localStorage.getItem("token")
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  useEffect(() => {
    const fetchAllPostUser = async () => {
      try {
        const res = await axios.get(`/api/event/${userData.id}/postId`)
        setPostId(res.data)
        if (postId.length > 0) {
          // je recupere les post ou l'user paticipe ou a crée avec les events de tout les users
          const res = await axios
            .all(
              postId.map((postId) =>
                axios.get(`/api/post/${postId.postId}/postById`)
              )
            )
            .then(async (results) => {
              const getData = await results.map((res) => res.data)

              setPostsEventsUser(getData)

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
                console.log("getData", getData)
                const getAdmin = await getData.filter(
                  (data) => data.userId === userData.id
                )

                console.log(getAdmin, "ici")

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
  ])
  console.log(userData, "la")
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
              <ProfilUser postsEventsUser={postsEventsUser} />
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
