import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  usePostData,
  useEventsPostUser,
  useUpdateEventsPostUser,
  useUser,
  useUpdatePost,
} from "../../../../Context/ContextProvider"

export default function useProfilUser() {
  const [openEdit, setOpenEdit] = useState(false)
  const updateEventsPostUser = useUpdateEventsPostUser()
  const eventsPostUser = useEventsPostUser()
  const updatePost = useUpdatePost()
  const [userRequest, setUserRequest] = useState([])
  let requette = ""
  const handleClickEdit = () => {
    setOpenEdit(!openEdit)
  }
  const handleClickCancelEvent = async (postId, userId) => {
    requette = `/api/event/${postId}/${userId}/cancel`
    const res = await axios.delete(requette)
    if (res.status === 200) {
      console.log("evenement annuler")
      const refreshPosts = async () => {
        const res = await axios("/api/post/allpost")
        updatePost(res.data.post)
      }
      refreshPosts()
    } else console.log("error delete post")
  }

  const handleClickValidation = async (postId, userId) => {
    const res = await axios.patch(`/api/event/${postId}/${userId}/validate`)
    if (res.status === 200) {
      console.log("Vous avez validez l'utilisateur")
      const refreshPosts = async () => {
        const res = await axios("/api/post/allpost")
        updatePost(res.data.post)
      }
      refreshPosts()
    } else console.log("error delete post")
  }

  const handleClickDeclineEvent = async (postId, userId) => {
    const res = await axios.patch(`/api/event/${userId}/decline`)
    if (res) {
      console.log("utilisateur refusé")
      const refreshPosts = async () => {
        const res = await axios("/api/post/allpost")
        updatePost(res.data.post)
      }
      refreshPosts()
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
    requette,
  }
}
