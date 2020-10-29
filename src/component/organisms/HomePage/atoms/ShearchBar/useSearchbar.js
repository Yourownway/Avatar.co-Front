import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {
  usePostData,
  useSearchUpdate,
  useSearch,
} from "../../../../Context/ContextProvider"

export default function useSearchbar() {
  const postData = usePostData()
  const updateSearch = useSearchUpdate()
  const searchData = useSearch()
  const [searchInput, setSearchDataInput] = useState("")
  const history = useHistory()
  const URL = window.location.href

  const handleChange = (e) => {
    setSearchDataInput(e.target.value)
  }
  useEffect(() => {
    if (searchInput.length !== 0) {
      //resoudre le probleme du slug
      history.push("/Home/Page/Training/Search/" + searchInput)
      // history.push("/Home/Page/Training")
      const FiltreByPostName = async () => {
        const res = postData.filter((post) => {
          return (
            post.postName.toLowerCase().includes(searchInput.toLowerCase()) ||
            post.User.firstName
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
        })

        updateSearch(res)
      }
      FiltreByPostName()
    }
  }, [searchInput]) // eslint-disable-line react-hooks/exhaustive-deps
  console.log("postData", searchData)

  return { searchInput, handleChange }
}
