import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  usePostData,
  useEventsPostUser,
  useUpdateEventsPostUser,
  useUser,
} from "../../../../Context/ContextProvider"

export default function useProfilUser() {
  const [openEdit, setOpenEdit] = useState(false)
  const updateEventsPostUser = useUpdateEventsPostUser()
  const eventsPostUser = useEventsPostUser()
  const [userRequest, setUserRequest] = useState([])
  const handleClickEdit = () => {
    setOpenEdit(!openEdit)
  }
  const handleClickCancelEvent = async (postId, userId) => {
    const res = await axios.delete(`/api/event/${postId}/${userId}/cancel`)
    if (res.status === 200) {
      console.log("evenement annuler")
    } else console.log("error delete post")
  }

  const handleClickValidation = async (postId, userId) => {
    const res = await axios.patch(`/api/event/${postId}/${userId}/validate`)
    if (res.status === 200) {
      console.log("Vous avez validez l'utilisateur")
    } else console.log("error delete post")
  }

  const handleClickDeclineEvent = async (postId, userId) => {
    const res = await axios.patch(`/api/event/${userId}/decline`)
    if (res) {
      console.log("utilisateur refusé")
    } else console.log("erreur dans la suppression du post")
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
