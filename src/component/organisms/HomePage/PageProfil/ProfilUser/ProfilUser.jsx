import React,{useEffect, useState} from 'react'

import useProfilUser from './useProfilUser'
import {useUser} from '../../../../Context/ContextProvider'
import { filterEvent } from '../../../../action'
export default function ProfilUser({eventsPostUser}) {
const [userRequest, setUserRequest] = useState([])
 useEffect(() => {
    console.log("=========================")

    filterEvent(eventsPostUser, "eventRequest", setUserRequest, "USER REQUEST")

    // prettier-ignore
    //  &&event["userId"] !== userData.userId
  }, [eventsPostUser])
  console.log("USERREQUEST", userRequest)


  const {  handleClickEdit,openEdit, handleClickCancelEvent,handleClickDeclineEvent,
handleClickValidation } = useProfilUser()
  const userData = useUser()
    return (
      
         <>
   
   
      <div className="profilUser-container">
<img src="https://via.placeholder.com/150"></img>
     {userData?(<div>
     <h2> {userData.firstName}</h2> 
     <h2> {userData.userId}</h2>
     <p> XP:{userData.userXp} </p>
     <p> <span>Description:</span>{userData.userDescription}</p>
     </div>):null}
      </div>
<h2>Vous avez : {userRequest.length} Notification </h2>
{userRequest? (userRequest.map(post=> post.map(event=>

  <ul> 
    
 <li>
<h1>userId {userData.userId}</h1>
{ event["userId"]=== userData.userId ? (<><p>Vous souhaitez participer à {event["Post.postName"]} </p> <button key={event["id"]} onClick={()=>handleClickCancelEvent(event["id"])}>annuler {event["id"]}</button></>):(<><p>{event["User.firstName"]} souhaite participer à votre evenement {event["Post.postName"]} </p>
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
                 {/* <UserForm />   */}
                    {/* <PostForm mapPostData={mapPostData}
                    /> */}
                </div>
                </div>
                
                ):null}
                
    </>
    )
}
    