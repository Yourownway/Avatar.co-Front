import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Post from "../../../atoms/Post/Post"

import axios from "axios"

export default function TrainingPostCategorie({ categories }) {
  const [postByCategorie, setPostByCategorie] = useState([])
  const [validateCategorie, setValidateCategorie] = useState([])

  const categorie = useParams()

  useEffect(() => {
    const filterByCategorie = async () => {
      const getId = categories.filter(
        (data) => data.categoryName === categorie.name
      )[0]
      if (getId) {
        const res = await axios.get(`/api/post/${getId.id}/category`)

        if (res.data.post.length > 0) {
          setPostByCategorie(res.data.post)
          const getEvents = res.data.post.map((post) => post["Events"])
          if (getEvents) {
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
  }, [categorie.name]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Post
        postDefaultData={postByCategorie}
        eventsValidate={validateCategorie}
      />
    </>
  )
}
