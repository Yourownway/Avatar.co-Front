import React from "react"
import usePorfilNewPost from "./usePorfilNewPost"
import FormUserPost from "./atoms/FromUserPost"

export default function ProfilNewPost() {
  const { handleChange, handleSubmit, userPostData } = usePorfilNewPost()
  return (
    <div className="profilUser-newPost">
      <form className="profilUser-newPost-form" onSubmit={handleSubmit}>
        <FormUserPost handleChange={handleChange} userPostData={userPostData} />
        <button className="btn">Valider</button>
      </form>
    </div>
  )
}
