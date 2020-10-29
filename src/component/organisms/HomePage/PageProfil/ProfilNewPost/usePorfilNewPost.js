import { useContext, useEffect, useState } from "react"
import axios from "axios"

import { AuthContext } from "../../../../../App"
import { useUpdatePost } from "../../../../Context/ContextProvider"

export default function usePorfilNewPost() {
  const authValue = useContext(AuthContext)
  const reducerUserData = authValue.reducerState.user
  const updatePost = useUpdatePost()
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

      const refreshPosts = async () => {
        const res = await axios("/api/post/allpost")
        updatePost(res.data.post)
      }
      refreshPosts()
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
