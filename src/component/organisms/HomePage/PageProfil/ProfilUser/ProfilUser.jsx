import React from 'react'

import useProfilUser from './useProfilUser'
import {useUser} from '../../../../Context/ContextProvider'
export default function ProfilUser() {

  const { data, handleClickEdit,openEdit} = useProfilUser()
  const userData = useUser()
    return (
         <>
      <div className="profilUser-container">
<img src="https://via.placeholder.com/150"></img>
     {userData&&data ?(<div>
     <h2> {userData.firstName}</h2> 
     <h2> {userData.userId}</h2>
     <p> XP:{userData.userXp} </p>
     <p> <span>Description:</span>{userData.userDescription}</p>
     </div>):null}
        {data.map((user) => (
          <p>{user.firstName}</p>
        ))}
      </div>
      <button onClick={handleClickEdit}>editer</button>
           {openEdit ? (
      <div className="post-modale--edit">
             
                <div className="post-modale--edit ">
                  <button onClick={handleClickEdit}>X</button>
                 
                    {/* <PostForm mapPostData={mapPostData}
                    /> */}
                    
                
                </div>
                </div>):null}
    </>
    )
}
