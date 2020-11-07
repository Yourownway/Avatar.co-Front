import React,{useContext, useEffect, useState} from 'react'

import useProfilUser from './useProfilUser'


import ButtonEditProfil from './atom/ButtonEditProfil'
import { AuthContext } from '../../../../../App'
import usePageProfil from './useProfilUser'
export default function ProfilUser({postsEventsUser}) {
const [userRequest, setUserRequest] = useState([])
const [openNotification,setOpenNotification]= useState(false)
let {requette} = usePageProfil()

    const authValue = useContext(AuthContext)
    const userData = authValue.reducerState.user
  const {  handleClickEdit,openEdit, handleClickCancelEvent,handleClickDeclineEvent,
handleClickValidation } = useProfilUser()
useEffect(() => {
  console.log('mise a jour ==========>')
const getRequest = async()=>{
  const request = await postsEventsUser.map(post=>post.Events.filter(events=>events.eventValidation===false&&events.eventRequest===true&&events.eventIsAdmin===false))

setUserRequest(request)
}
getRequest()


}, [postsEventsUser,userRequest.length,requette])

console.log(postsEventsUser,'req')

  
    return (
      
         <>

   <div className="pageUser-profil">
   
      
        <div className="pageUser-profil-header">
          <h1 className='font-description'>Profil de <span className='font-name'>{userData.firstName}</span></h1>
        </div>
        <div className="pageUser-profil-container" >
          <div className="pageUser-profil-container-img"></div>

<div className='pageUser-profil-container-data'>


<p> XP:{userData.userXp} </p>
     <h2>Name:<span className="font-name white">{userData.firstName}</span> </h2> 
   <h2>Email:<span className="font-name white">{userData.userEmail}</span> </h2> 
     
     {/* <p> <span>Description:</span>{userData.userDescription}</p> */}
       {/* <UserEditForm userData={userData}/>   */}


         </div>    
        
    
     </div>
 <ButtonEditProfil userData={userData}/>
  

    
    
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
    