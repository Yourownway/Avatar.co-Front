import React, { useState, useEffect } from "react"
import axios from "axios"
import { usePostData, useUser } from "../../../../Context/ContextProvider"
import {
  getPostUserEvent,
  getPostEvents,
  filterEvent,
} from "../../../../action"
export default function useProfilUser() {
  const [openEdit, setOpenEdit] = useState(false)

  const [userRequest, setUserRequest] = useState([])
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
    } else console.log("error delete post")
  }

  const handleClickDeclineEvent = async (eventId) => {
    const res = await axios.patch(`/api/decline/request/event/${eventId}`)
    if (res) {
      console.log("event refusé")
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
