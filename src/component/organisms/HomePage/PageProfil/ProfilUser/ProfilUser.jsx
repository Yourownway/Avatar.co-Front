import React,{useContext, useEffect, useState} from 'react'
import UserEditForm from './UserEditForm/UserEditForm'
import useProfilUser from './useProfilUser'
import {useEventsPostUser, useUser} from '../../../../Context/ContextProvider'
import { filterEvent } from '../../../../action'

import { AuthContext } from '../../../../../App'
export default function ProfilUser() {
const [userRequest, setUserRequest] = useState([])

    const authValue = useContext(AuthContext)
    const reducerUserData = authValue.reducerState.user


  const {  handleClickEdit,openEdit, handleClickCancelEvent,handleClickDeclineEvent,
handleClickValidation } = useProfilUser()
  
    return (
      
         <>

   <div>
   
      <div className="profilUser-container">
<img src="https://via.placeholder.com/150"></img>
    <h1>ProfilUser</h1>
     <h2> {reducerUserData.firstName}</h2> 
     <h2> {reducerUserData.userId}</h2>
     <p> XP:{reducerUserData.userXp} </p>
     <p> <span>Description:</span>{reducerUserData.userDescription}</p>
       {/* <UserEditForm reducerUserData={reducerUserData}/>   */}
     </div>





      </div>

  
                
    </>
    )
}
    