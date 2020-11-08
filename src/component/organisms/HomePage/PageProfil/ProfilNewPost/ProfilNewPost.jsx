import React, { useContext } from 'react'
import usePorfilNewPost from './usePorfilNewPost'
import FormUserPost from "./FromUserPost";
import { AuthContext } from '../../../../../App';
export default function ProfilNewPost() {
    const authValue = useContext(AuthContext)
 const userData = authValue.reducerState.user
    const { handleChange, handleSubmit,userPostData } = usePorfilNewPost()
    return (
      
                <div className="profilUser-newPost">
                

                
      <form className="profilUser-newPost-form" onSubmit={handleSubmit}>
        <FormUserPost handleChange={handleChange} userPostData={userPostData} />
        <button>Valider</button>
      </form> 
       </div>
 
    )
}
