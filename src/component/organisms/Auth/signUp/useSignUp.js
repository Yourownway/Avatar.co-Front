import { useState } from "react"
import axios from "axios"

export default function useSignUp() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    // isSubmitting: false,
    // errorMessage: null,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post(`api/SignUp`, inputs)

      if (res) {
        alert("Welcome!")
        setInputs({
          ...inputs,
          // isSubmitting: true,
          errorMessage: null,
        })
      }
    } catch (error) {
      console.log(error)
      setInputs({
        ...inputs,
        // isSubmitting: false,
        errorMessage: error.response.data.error,
      })
    }
  }
  return { handleChange, handleSubmit, inputs }
}
