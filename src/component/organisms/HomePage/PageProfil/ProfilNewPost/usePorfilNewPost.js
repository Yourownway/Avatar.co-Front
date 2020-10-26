import { useEffect, useState } from "react"
import axios from "axios"
import { useUser } from "../../../../Context/ContextProvider"

export default function usePorfilNewPost() {
  const [userPostData, setuserPostData] = useState({})
  const userData = useUser()
  useEffect(() => {
    if (userData) {
      setuserPostData({ ...userPostData, userId: userData.userId })
    }
  }, [userData]) // eslint-disable-line react-hooks/exhaustive-deps

  console.log("userPostData", userPostData)

  const handleChange = (event) => {
    const { name, value } = event.target
    setuserPostData({
      ...userPostData,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("event", event)
    console.log("userPostData", userPostData)
    const res = await axios.post("/api/post", userPostData)
    console.log("res", res.status)
    if (res.status === 200) {
      console.log("status 200")
      await alert("post envoyer avec succes")
    }

    setuserPostData({
      ...userPostData,
      postName: "",
      postUserRole: "",
      postDescription: "",
      postDate: "",
      postMaxGuest: "",
      parcId: "",
      categoryId: "",
    })
    console.log("userPostData", userPostData)
  }

  return { handleChange, handleSubmit, userPostData }
}
