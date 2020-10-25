import React from 'react'

import useProfilUser from './useProfilUser'
import {useUser} from '../../../../Context/ContextProvider'
export default function ProfilUser() {

  const {  handleClickEdit,openEdit,userEvent,userRequest, handleClickCancelEvent } = useProfilUser()
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
   { event["userId"]=== userData.userId ? (<><p>Vous souhaitez participer à {event["Post.postName"]} </p> <button>annuler</button></>):(<><p>{event["User.firstName"]} souhaite participer à votre evenement {event["Post.postName"]} </p>
  <button onClick={()=>(handleClickCancelEvent(event["event.id"]))}>Refuser</button> <button>Accepter</button></>)}

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
    