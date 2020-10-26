import React,{useEffect, useState} from 'react'

import useProfilUser from './useProfilUserSave'
import {useUser} from '../../../../Context/ContextProvider'
export default function ProfilUser() {
const [count, setCount] =useState(0)



  const {  handleClickEdit,openEdit,setOpenEdit,userEvent,userRequest, handleClickCancelEvent,handleClickDeclineEvent,
handleClickValidation,recount } = useProfilUser()
  const userData = useUser()
    return (
      
         <>
      
         <button onClick={()=>(setOpenEdit(openEdit))}> COUNT</button>
        
   
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

 {recount}
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
    