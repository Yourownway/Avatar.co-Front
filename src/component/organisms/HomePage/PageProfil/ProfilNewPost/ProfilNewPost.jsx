import React from 'react'
import usePorfilNewPost from './usePorfilNewPost'
import FormUserPost from "./FromUserPost";
export default function ProfilNewPost() {
    const { handleChange, handleSubmit,userPostData } = usePorfilNewPost()
    return (
      
                <div className="profilPostEvent-container">
      <form id="profil-event-post" onSubmit={handleSubmit}>
        <FormUserPost handleChange={handleChange} userPostData={userPostData} />
        <button>Valider</button>
      </form>
        </div>
    )
}
