import React, { useContext } from 'react'
import usePorfilNewPost from './usePorfilNewPost'
import FormUserPost from "./FromUserPost";
import { AuthContext } from '../../../../../App';
export default function ProfilNewPost() {
    const authValue = useContext(AuthContext)
 const userData = authValue.reducerState.user
    const { handleChange, handleSubmit,userPostData } = usePorfilNewPost()
    return (
      
                <div className="profilPostEvent-container">
                  {<h1>id{userData.id}</h1>}
      <form id="profil-event-post" onSubmit={handleSubmit}>
        <FormUserPost handleChange={handleChange} userPostData={userPostData} />
        <button>Valider</button>
      </form>
        </div>
    )
}
