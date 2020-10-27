import { useContext, useEffect, useState } from "react"

import axios from "axios"
import { AuthContext } from "../../../App"

export default function usePost() {
  const authValue = useContext(AuthContext)
  const userData = authValue.reducerState.user
  const [openModal, setOpenModal] = useState()

  const handleClickOpenEventEdit = () => {
    setOpenModal(!openModal)
  }
  const handleClickCloseEventEdit = () => {
    setOpenModal(null)
  }
  const handleClickEventDelelet = () => {}
  const handleClickEventRequest = (postId) => {
    const fetchEventRequest = async () => {
      axios.post("/api/event/send/request", {
        userId: userData.id,
        postId: postId,
      })
    }
    fetchEventRequest()
  }
  const handleClickDeleteEventRequest = () => {}
  return {
    userData,
    openModal,

    handleClickEventDelelet,
    handleClickEventRequest,
    handleClickDeleteEventRequest,
    handleClickCloseEventEdit,
    handleClickOpenEventEdit,
  }
}
