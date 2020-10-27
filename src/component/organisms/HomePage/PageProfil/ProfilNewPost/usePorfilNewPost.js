import { useContext, useEffect, useState } from "react"
import axios from "axios"

import { AuthContext } from "../../../../../App"

export default function usePorfilNewPost() {
  const authValue = useContext(AuthContext)
  const reducerUserData = authValue.reducerState.user

  const [userPostData, setuserPostData] = useState({})

  useEffect(() => {
    setuserPostData({ ...userPostData, userId: reducerUserData.id })
  }, [reducerUserData]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (event) => {
    const { name, value } = event.target
    setuserPostData({
      ...userPostData,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    const res = await axios.post("/api/post", userPostData)

    if (res.status === 200) {
      await alert("post envoyer avec succes")
    }

    setuserPostData({
      ...userPostData,
      postName: "",

      postDescription: "",
      postDate: "",
      postMaxGuest: "",
      parcId: "",
      categoryId: "",
    })
  }

  return { handleChange, handleSubmit, userPostData }
}
