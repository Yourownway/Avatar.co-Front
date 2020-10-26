import React,{useContext, useEffect, useState} from 'react'
import UserEditForm from './UserEditForm/UserEditForm'
import useProfilUser from './useProfilUser'
import {useUser} from '../../../../Context/ContextProvider'
import { filterEvent } from '../../../../action'

import { AuthContext } from '../../../../../App'
export default function ProfilUser({eventsPostUser}) {
const [userRequest, setUserRequest] = useState([])
const [profilData,setProfilData] = useState()
    const authValue = useContext(AuthContext)
    const reducerUserData = authValue.reducerState.user
 
    
useEffect(() => {
  let displayUser =     <div>
    <h1>ProfilUser</h1>
     <h2> {reducerUserData.firstName}</h2> 
     <h2> {reducerUserData.userId}</h2>
     <p> XP:{reducerUserData.userXp} </p>
     <p> <span>Description:</span>{reducerUserData.userDescription}</p>
       {/* <UserEditForm reducerUserData={reducerUserData}/>   */}
     </div>
     setProfilData(displayUser)
}, [reducerUserData])
 useEffect(() => {

    filterEvent(eventsPostUser, "eventRequest", setUserRequest, "USER REQUEST")

    // prettier-ignore
    //  &&event["userId"] !== userData.userId
  }, [eventsPostUser])
  console.log("USERREQUEST", userRequest)

  const {  handleClickEdit,openEdit, handleClickCancelEvent,handleClickDeclineEvent,
handleClickValidation } = useProfilUser()
  
    return (
      
         <>

   {profilData}
   
      <div className="profilUser-container">
<img src="https://via.placeholder.com/150"></img>
 
      </div>
<h2>Vous avez : {userRequest.length} Notification </h2>
{userRequest? (userRequest.map(post=> post.map(event=>

  <ul> 
    
 <li>

{ event["userId"]=== reducerUserData.userId ? (<><p>Vous souhaitez participer à {event["Post.postName"]} </p> <button key={event["id"]} onClick={()=>handleClickCancelEvent(event["id"])}>annuler {event["id"]}</button></>):(<><p>{event["User.firstName"]} souhaite participer à votre evenement {event["Post.postName"]} </p>
  <button onClick={()=>handleClickDeclineEvent(event["id"])} >Refuser</button> <button onClick={()=>handleClickValidation(event["id"])} >Accepter</button></>)}
<h3>eventId: {event["id"]}</h3>
 </li> 
  
  </ul>
  ))):null}
  

       <button onClick={handleClickEdit}>editer</button>
           {openEdit ? (
      <div className="post-modale--edit">
             
                <div className="post-modale--edit ">
                  <button onClick={handleClickEdit}>X</button>
                  <UserEditForm reducerUserData={reducerUserData}/>  
          
                     
                </div>
                </div>
                
                ):null} 
                
    </>
    )
}
    