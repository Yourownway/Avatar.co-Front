import React, { useState } from "react"
import axios from "axios"
import { useUpdatePost } from "../../../../Context/ContextProvider"

export default function EditEvent({ postUser, userData, open, setOpen }) {
  const token = localStorage.getItem("token")
  const [eventUpdateData, setEventUpdateData] = useState({ ...postUser })
  const updatePost = useUpdatePost()
  const handleChange = (event) => {
    const { name, value } = event.target
    setEventUpdateData({
      ...eventUpdateData,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    const res = await axios.patch(
      `/api/post/${postUser.id}/${userData.id}/edit`,
      eventUpdateData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    if (res.status === 200) {
      console.log("post edité", res)

      const refreshPosts = async () => {
        const res = await axios("/api/post/allpost")
        updatePost(res.data.post)
      }
      refreshPosts()
    } else {
      console.log("erreur Edit")
    }
  }

  return (
    <div className="postList-li-bottom-controlAdmin-edit">
      <form onSubmit={handleSubmit}>
        <button
          className="btn close"
          onClick={() => {
            setOpen(!open)
          }}
        >
          X
        </button>
        <h2>Nom..?</h2>
        <input
          className="newPost-input"
          onChange={handleChange}
          type="text"
          name="postName"
          placeholder={postUser.postName}
          value={eventUpdateData.postName}
        />
        <h2>Description..?</h2>
        <input
          className="newPost-input"
          onChange={handleChange}
          type="text"
          name="postDescription"
          placeholder={postUser.postDescription}
          value={eventUpdateData.postDescription}
        />
        {/* <input
        onChange={handleChange}
        type="text"
        name="postDate"
        placeholder={postUser.postDate}
        value={eventUpdateData.postDate}
      /> */}
        <h2>Nombre..?</h2>
        <input
          className="newPost-input"
          onChange={handleChange}
          type="text"
          name="postMaxGuest"
          placeholder={postUser.postMaxGuest}
          value={eventUpdateData.postMaxGuest}
        />
        <h2>LVL..?</h2>
        <input
          className="newPost-input"
          onChange={handleChange}
          type="text"
          name="postBadgeRequired"
          placeholder={
            postUser.postBadgeRequired
              ? postUser.postBadgeRequired
              : "Xp requis ?"
          }
          value={eventUpdateData.postBadgeRequired}
        />
        <button className="btn">Envoyer</button>
      </form>
    </div>
  )
}
