import React, { useState, useEffect } from "react"
import axios from "axios"
import { usePostData, useUser } from "../../../../Context/ContextProvider"
import {
  getPostUserEvent,
  getPostEvents,
  filterEvent,
} from "../../../../action"
export default function useProfilUser() {
  const [data, setData] = useState([])
  const [openEdit, setOpenEdit] = useState(false)
  const userData = useUser()
  const postData = usePostData()

  const [recount, setRecount] = useState()

  const [userEvent, setUserEvent] = useState([])
  const [postEvents, setPostEvents] = useState([])
  const [userRequest, setUserRequest] = useState([])
  // j'applique les fonction dans l'ordre de mes post
  // recupere les evenement du User Admin et requette
  useEffect(() => {
    getPostUserEvent(postData, userData, setUserEvent, "Events.userId")
  }, [userData, postData, openEdit])

  //recupere tableau tout les evenement lié au postid pour ensuite filtré les requete et les validation
  useEffect(() => {
    getPostEvents(userEvent, setPostEvents)
  }, [userData, userEvent, postData, openEdit])
  //filtre les event par validation
  useEffect(() => {
    console.log("=========================")

    filterEvent(postEvents, "eventRequest", setUserRequest, "USER REQUEST")

    // prettier-ignore
    //  &&event["userId"] !== userData.userId
  }, [postEvents, userData, openEdit])
  console.log("USERREQUEST", userRequest)

  useEffect(() => {
    const element = (
      <div>
        {userRequest
          ? userRequest.map((post) =>
              post.map((event) => (
                <ul>
                  <li>
                    <h1>userId {userData.userId}</h1>
                    {event["userId"] === userData.userId ? (
                      <>
                        <p>
                          Vous souhaitez participer à {event["Post.postName"]}{" "}
                        </p>{" "}
                        <button
                          key={event["id"]}
                          onClick={() => handleClickCancelEvent(event["id"])}
                        >
                          annuler {event["id"]}
                        </button>
                      </>
                    ) : (
                      <>
                        <p>
                          {event["User.firstName"]} souhaite participer à votre
                          evenement {event["Post.postName"]}{" "}
                        </p>
                        <button
                          onClick={() => handleClickDeclineEvent(event["id"])}
                        >
                          Refuser
                        </button>{" "}
                        <button
                          onClick={() => handleClickValidation(event["id"])}
                        >
                          Accepter
                        </button>
                      </>
                    )}
                    <h3>eventId: {event["id"]}</h3>
                  </li>
                </ul>
              ))
            )
          : null}
      </div>
    )
    setRecount(element)
  }, [openEdit])

  const handleClickEdit = () => {
    setOpenEdit(!openEdit)
  }
  const handleClickCancelEvent = async (eventId) => {
    const res = await axios.delete(`/api/cancel/event/${eventId}`)
    if (res) {
      console.log("event annuler", res)
      setUserRequest([...userRequest])
    } else console.log("error delete post")
  }

  const handleClickValidation = async (eventId) => {
    const res = await axios.patch(`/api/validate/request/event/${eventId}`)
    if (res) {
      console.log("event valider")
    } else console.log("error delete post")
  }

  const handleClickDeclineEvent = async (eventId) => {
    const res = await axios.patch(`/api/decline/request/event/${eventId}`)
    if (res) {
      console.log("event refusé")
    } else console.log("error delete post")
  }

  return {
    data,
    handleClickDeclineEvent,
    handleClickValidation,
    handleClickCancelEvent,
    setOpenEdit,
    openEdit,
    handleClickEdit,
    userRequest,
    recount,
  }
}
