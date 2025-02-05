import { useState, useContext } from "react"
import { AuthContext } from "../../../../App"
import axios from "axios"

import { useHistory } from "react-router-dom"

export default function useSignIn() {
  const authValue = useContext(AuthContext)
  const [inputValues, setValues] = useState({
    userEmail: "",
    userPassword: "",
  })

  let history = useHistory()

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...inputValues,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const res = await axios.post(`/api/signIn`, inputValues)
      if (res) {
        await authValue.reducerDispatch({ type: "SIGNIN", payload: res })

        setValues({
          ...inputValues,
          // isSubmitting: true,
          errorMessage: null,
        })
        history.push("/Home/Page/Profil/AllEvent")
      }
    } catch (error) {
      setValues({
        ...inputValues,
        isSubmitting: false,
        errorMessage: error.response,
      })
    }
  }
  return { handleSubmit, handleChange, inputValues }
}
