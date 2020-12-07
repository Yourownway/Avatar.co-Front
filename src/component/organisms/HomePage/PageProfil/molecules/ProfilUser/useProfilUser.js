import { useState } from "react"
import axios from "axios"
import { useUpdatePost } from "../../../../../Context/ContextProvider"
const token = localStorage.getItem("token")

export default function useProfilUser() {
  const [openEdit, setOpenEdit] = useState(false)

  const updatePost = useUpdatePost()
  const [userRequest, setUserRequest] = useState([])

  const handleClickEdit = () => {
    setOpenEdit(!openEdit)
  }
  const handleClickCancelEvent = async (postId, userId) => {
    const res = await axios.delete(`/api/event/${postId}/${userId}/cancel`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (res.status === 200) {
      console.log("evenement annuler")

      const refreshPosts = async () => {
        const res = await axios("/api/post/allpost")
        await updatePost(res.data.post)
      }
      refreshPosts()
    } else console.log("error delete post")
  }

  const handleClickValidation = async (postId, userId) => {
    try {
      const res = await axios.patch(`/api/event/${postId}/${userId}/validate`)
      if (res.status === 200) {
        console.log("Vous avez validez l'utilisateur")
        const refreshPosts = async () => {
          const res = await axios("/api/post/allpost")
          updatePost(res.data.post)
        }
        refreshPosts()
      } else console.log("error delete post")
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickDeclineEvent = async (postId, userId) => {
    try {
      const res = await axios.patch(`/api/event/${userId}/decline`)
      if (res.status === 200) {
        console.log("utilisateur refusé")
        const refreshPosts = async () => {
          const res = await axios("/api/post/allpost")
          updatePost(res.data.post)
        }
        refreshPosts()
      } else console.log("erreur dans la suppression du post")
    } catch (error) {
      console.log(error)
    }
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
