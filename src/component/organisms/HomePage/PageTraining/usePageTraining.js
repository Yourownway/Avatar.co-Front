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

  useEffect(() => {
    const FilterData = async () => {
      const res = await postData.filter(
        (post) => post["User.id"] === post["Events.userId"]
      )
      await setPostFilter(res)
    }
    FilterData()
  }, [postData, categories])
  console.log(postData, "POSTTTTTTTFFILLLLTERR")
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/categories")

      setCategories(res.data.Categories)
    }
    fetchCategories()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = async (e) => {
    setSelect(e.target.value)
  }
  return { categories, select, handleChange, postFilter }
}
