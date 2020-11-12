import { useState, useEffect } from "react"

import ContextPost from "../../../Context/ContextPost"

import axios from "axios"
import { usePostData } from "../../../Context/ContextProvider"

export default function usePageTraining() {
  const postData = usePostData()
  const [categories, setCategories] = useState([])
  const [select, setSelect] = useState("")

  // suprimer les doublons à l'affichage
  const [postFilter, setPostFilter] = useState([])

  const handleChange = async (e) => {
    setSelect(e.target.value)
  }
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/categories")
      console.log(res, "fetchCategories")
      setCategories(res.data.Categories)
    }
    fetchCategories()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { categories, select, handleChange, postFilter }
}
