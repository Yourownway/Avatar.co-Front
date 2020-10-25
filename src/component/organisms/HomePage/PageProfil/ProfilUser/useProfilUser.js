import { useState, useEffect } from "react"
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

  const [userEvent, setUserEvent] = useState([])
  const [postEvents, setPostEvents] = useState([])
  const [userRequest, setUserRequest] = useState([])
  // j'applique les fonction dans l'ordre de mes post
  // recupere les evenement du User Admin et requette
  useEffect(() => {
    getPostUserEvent(postData, userData, setUserEvent, "Events.userId")
  }, [userData, postData])

  //recupere tableau tout les evenement lié au postid pour ensuite filtré les requete et les validation
  useEffect(() => {
    getPostEvents(userEvent, setPostEvents)
  }, [userData, userEvent, postData])
  //filtre les event par validation
  useEffect(() => {
    console.log("=========================")

    filterEvent(
      postEvents,
      "eventRequest",
      setUserRequest,)
    // prettier-ignore
    //  &&event["userId"] !== userData.userId
  }, [postEvents])

  const handleClickEdit = () => {
    setOpenEdit(!openEdit)
  }

  return {
    data,
    openEdit,
    handleClickEdit,
    userRequest,
  }
}
