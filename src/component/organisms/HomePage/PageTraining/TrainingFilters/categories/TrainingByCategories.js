import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Post from "../../../atoms/Post/Post"
import { usePostData } from "../../../../../Context/ContextProvider"
import usePageTraining from "../../usePageTraining"
import axios from "axios"

export default function TrainingPostCategorie({ categories }) {
  const [postByCategorie, setPostByCategorie] = useState([])
  const [validateCategorie, setValidateCategorie] = useState([])
  const [postsEventsByCategorie, setPostEventsByCatagorie] = useState([])

  const postData = usePostData()
  const categorie = useParams()

  useEffect(() => {
    const filterByCategorie = async () => {
      const getId = categories.filter(
        (data) => data.categoryName === categorie.name
      )[0]
      if (getId) {
        const res = await axios.get(`/api/post/${getId.id}/category`)
        console.log(res.data.post)
        if (res.data.post.length > 0) {
          setPostByCategorie(res.data.post)
          const getEvents = res.data.post.map((post) => post["Events"])
          if (getEvents) {
            setPostEventsByCatagorie(getEvents)
            const getValidation = await getEvents.map((events) =>
              events.filter(
                (eventData) => eventData["eventValidation"] === true
              )
            )
            if (getValidation) {
              setValidateCategorie(getValidation)
            }
          }
        }
      }
    }

    filterByCategorie()
  }, [categorie.name])

  return (
    <>
      <Post
        postDefaultData={postByCategorie}
        eventsValidate={validateCategorie}
      />
    </>
  )
}
