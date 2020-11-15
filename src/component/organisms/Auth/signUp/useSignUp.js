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

  // const [display, setDisplay] = useState(false);
  // const [inputData, setInputData] = useState("");

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

      if (res === 200) {
        setInputs({
          ...inputs,
          // isSubmitting: true,
          errorMessage: null,
        })
      }
    } catch (error) {
      console.log(error.response.data.error)
      setInputs({
        ...inputs,
        // isSubmitting: false,
        errorMessage: error.response.data.error,
      })
    }
  }
  return { handleChange, handleSubmit, inputs }
}
