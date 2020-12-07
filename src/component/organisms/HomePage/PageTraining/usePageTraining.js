import { useState, useEffect } from "react"

import axios from "axios"

export default function usePageTraining() {
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
