import React, { useState } from "react"
import axios from "axios"
import { useUpdatePost } from "../../../../Context/ContextProvider"

export default function NewEvent({ post, userData, setOpen, open }) {
  const [state, setState] = useState({})
  const updatePost = useUpdatePost()
  const handleChange = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleClickCreateEvent = async (post) => {
    try {
      const res = await axios.post(
        `/api/event/${post.id}/${userData.id}/new`,
        state
      )
      if (res) {
        console.log("Vous participer à l'event de" + post.User.firstName)
        setOpen(!open)
        const fetchData = async () => {
          const res = await axios("/api/post/allpost")
          updatePost(res.data.post)
        }
        fetchData()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="modale-newEvent-container">
      <h3>Ajouter un commentaire?</h3>
      <div className="modale-newEvent-form">
        <input
          value={state.value}
          name="eventComment"
          onChange={handleChange}
        />

        <button
          className="modale-newEvent-btn"
          onClick={() => handleClickCreateEvent(post)}
        >
          Envoyer
        </button>
      </div>
    </div>
  )
}
