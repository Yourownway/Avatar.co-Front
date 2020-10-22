import React from 'react'

import useProfilUser from './useProfilUser'
import {useUser} from '../../../../Context/ContextProvider'
export default function ProfilUser() {

  const { data} = useProfilUser()
  const {userData} = useUser()
    return (
         <>
      <div className="profilUser-container">

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
    </>
    )
}
