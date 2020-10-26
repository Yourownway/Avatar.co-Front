import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {
  usePostData,
  useSearchUpdate,
  useSearch,
} from "../../../../Context/ContextProvider"
import usePageTraining from "../../PageTraining/usePageTraining"

export default function useSearchbar() {
  const postData = usePostData()
  const updateSearch = useSearchUpdate()
  const searchData = useSearch()
  const [searchInput, setSearchDataInput] = useState("")
  const history = useHistory()
  const URL = window.location.href

  const handleChange = (e) => {
    setSearchDataInput(e.target.value)
    console.log("ICCCII", postData)
  }
  useEffect(() => {
    if (searchInput !== "") {
      console.log("effect", postData)
      console.log("eefect2", postData[1].postName)
      history.push("/Home/Page/Training/Search/" + searchInput)
      // history.push("/Home/Page/Training")
      const FiltreByPostName = async () => {
        const res = postData.filter((post) => {
          if (post["Events.eventIsAdmin"] === 1)
            return (
              post.postName.toLowerCase().includes(searchInput.toLowerCase()) ||
              post["User.firstName"]
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            )

          // post["postName"].toLowerCase().includes(searchInput.toLowerCase())
        })
        // if (Object.keys(res).length === 0 && searchInput !== " ") {
        //   updateSearch([])
        //   console.log("================aucun resulat trouvé=================")
        // }
        console.log("res", searchInput)

        updateSearch(res)
      }
      FiltreByPostName()
    } else {
      updateSearch([])
      history.push("/Home/Page/Training/")
    }

    // else if (searchInput === "" || URL !== window.location.href) {
    //   setSearchData();
    // }
  }, [searchInput, postData]) // eslint-disable-line react-hooks/exhaustive-deps
  console.log("wawawaawa", searchData)
  return { searchInput, handleChange }
}
