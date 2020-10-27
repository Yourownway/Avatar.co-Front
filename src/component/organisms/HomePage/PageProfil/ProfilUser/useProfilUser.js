import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  usePostData,
  useEventsPostUser,
  useUpdateEventsPostUser,
  useUser,
} from "../../../../Context/ContextProvider"
import {
  getPostUserEvent,
  getPostEvents,
  filterEvent,
} from "../../../../action"
export default function useProfilUser() {
  const [openEdit, setOpenEdit] = useState(false)
  const updateEventsPostUser = useUpdateEventsPostUser()
  const eventsPostUser = useEventsPostUser()
  const [userRequest, setUserRequest] = useState([])
  const handleClickEdit = () => {
    setOpenEdit(!openEdit)
  }
  const handleClickCancelEvent = async (userId, eventId) => {
    const res = await axios.delete(`/api/cancel/event/${eventId}`)
    if (res) {
      const refreshEventPostUser = await axios(
        `/api/event/${userId}/getAllPostUser`
      )
      if (refreshEventPostUser) {
        updateEventsPostUser(refreshEventPostUser.data)
        console.log(eventsPostUser, "refreshEventPostUser")
      }
      console.log(updateEventsPostUser, "!!!!!!!!!!!!!!!!!!!!!!")
    } else console.log("error delete post")
  }

  const handleClickValidation = async (eventId) => {
    const res = await axios.patch(`/api/validate/request/event/${eventId}`)
    if (res) {
    } else console.log("error delete post")
  }

  const handleClickDeclineEvent = async (userId, eventId) => {
    const res = await axios.patch(
      `/api/request/event/${userId}/${eventId}/decline/`
    )
    if (res) {
      console.log("event refusé")
      updateEventsPostUser(res)
    } else console.log("error delete post")
  }

  return {
    handleClickDeclineEvent,
    handleClickValidation,
    handleClickCancelEvent,
    setOpenEdit,
    openEdit,
    handleClickEdit,
    userRequest,
  }
}
