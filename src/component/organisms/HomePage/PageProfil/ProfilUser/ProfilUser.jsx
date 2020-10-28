import React,{useContext, useEffect, useState} from 'react'

import useProfilUser from './useProfilUser'


import ButtonEditProfil from './atom/ButtonEditProfil'
import { AuthContext } from '../../../../../App'
export default function ProfilUser({postsEventsUser}) {
const [userRequest, setUserRequest] = useState([])
const [openNotification,setOpenNotification]= useState(false)

    const authValue = useContext(AuthContext)
    const userData = authValue.reducerState.user
  const {  handleClickEdit,openEdit, handleClickCancelEvent,handleClickDeclineEvent,
handleClickValidation } = useProfilUser()
useEffect(() => {
const getRequest = async()=>{
  const request = await postsEventsUser.map(post=>post.Events.filter(events=>events.eventValidation===false&&events.eventRequest===true&&events.eventIsAdmin===false))

setUserRequest(request)
}
getRequest()


}, [userData,postsEventsUser,userRequest.length])

console.log(postsEventsUser,'req')

  
    return (
      
         <>

   <div>
   
      <div className="profilUser-container">
<img src="https://via.placeholder.com/150"></img>
    <h1>ProfilUser</h1>
     <h2> {userData.firstName}</h2> 
     <h2> {userData.userId}</h2>
     <p> XP:{userData.userXp} </p>
     <p> <span>Description:</span>{userData.userDescription}</p>
       {/* <UserEditForm userData={userData}/>   */}


       
         <ButtonEditProfil userData={userData}/>
           
     </div>

  

    
    
    <h1>Vous avez {userRequest.length} Notification</h1>
    <button onClick={()=>(setOpenNotification(!openNotification))}>Notification</button>
    {openNotification?(
    
    <div>
      <button onClick={()=>{setOpenNotification(!openNotification)}}>X</button>
      {userRequest.length>0? (userRequest.map((events,i)=>events.map(event=>
  <ul> 
    
 <li>

{ event.userId=== userData.id ?
 (
 <>   
        <p>Vous souhaitez participer à {postsEventsUser[i].postName} </p> 

        <button key={event.id} onClick={()=>handleClickCancelEvent(postsEventsUser[i].id,userData.id)}> annuler </button>
 
 </>
 ):(
 <>
         <p>{event.User.firstName} souhaite participer à votre evenement {postsEventsUser[i].postName} </p>
        {event.eventComment? (<h3>message: {event.eventComment}</h3>):null} 

        <button onClick={()=>handleClickDeclineEvent(postsEventsUser[i].id,event.userId)} >Refuser</button> 
        <button onClick={()=>handleClickValidation(postsEventsUser[i].id,event.userId)} >Accepter</button>

</>)}

 
 </li> 
  
 
  </ul>
 ) )):null} 
</div>):null}




      </div>

  
                
    </>
    )
}
    