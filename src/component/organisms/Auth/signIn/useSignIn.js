import { useState, useContext } from "react"
import { AuthContext } from "../../../../App"
import axios from "axios"

import { useUserUpdate, useUser } from "../../../Context/ContextProvider"
import { useHistory } from "react-router-dom"

export default function useSignIn() {
  const authValue = useContext(AuthContext)
  const [inputValues, setValues] = useState({
    userEmail: "",
    userPassword: "",
    // isSubmitting: false,
    // errorMessage: null,
  })

  let history = useHistory()
  const updateUser = useUserUpdate()
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
        // localStorage.setItem("token", res.data.Token);
        await authValue.reducerDispatch({ type: "SIGNIN", payload: res })

        console.log("state", res.data.id)
        setValues({
          ...inputValues,
          // isSubmitting: true,
          // errorMessage: null,
        })
        // history.push("/Home")
      }
    } catch (error) {
      setValues({
        ...inputValues,
      })
    }
  }
  return { handleSubmit, handleChange, inputValues }
}
