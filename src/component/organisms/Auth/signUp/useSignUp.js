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

  const handleSubmit = async (event, display, setDisplay) => {
    event.preventDefault()
    try {
      const res = await axios.post(`api/SignUp`, inputs)
      console.log(res, "res")
      if (res === 200) {
        setInputs({
          ...inputs,
          isSubmitting: true,
          errorMessage: null,
        })
      } else {
        console(res, "res")
      }
    } catch (error) {
      setInputs({
        ...inputs,
        isSubmitting: false,
        errorMessage: error.response,
      })
    }
  }
  return { handleChange, handleSubmit, inputs }
}
