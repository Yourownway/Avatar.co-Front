import axios from 'axios'
import React, { useContext,useState } from 'react'
import { AuthContext } from '../../../../../App'


import EditEvent from './EditEvent'
import NewEvent from './NewEvent'

export default function ButtonPost({post,eventValidate}) {
    const authValue = useContext(AuthContext)
    const userData = authValue.reducerState.user
const [open,setOpen] = useState(false)
const [openReq,setOpenReq]= useState(false)



const handleCancelEvent = async (post)=>{
const res = await axios.delete(`/api/event/${post.id}/${userData.id}/cancel`)
if (res){
  console.log(res,'event supprimé')
}

}
const handleClickDelete = async()=>{
const fetchDelete = async()=>{
const res = await axios.delete(`/api/post/${post.id}/delete`)
if (res){
  console.log(`post numero ${post.id} supprimer avec succès!`)
 //importer un reducer ou un context pour mettre a jour les USER POST 
}
}
fetchDelete()
}
    return (
        <div>

          {/* ici c'est pour l'annulation de l'event quand le user a fais la requette  */}
    {post?  (<h1>{post.Events.find(event=>event.eventRequest===true&&event.eventValidation===false&&event.eventIsAdmin===false&&event.userId===userData.id)?<button onClick={()=>handleCancelEvent(post)}>Annuler</button>:null}</h1>):null}  
  {/* ici on check si dans chaque post il n'exsiste pas un event de l'utilisateur =>> participer */}
  {post.Events.find((eventData)=>eventData.userId===userData.id)?null:(<button onClick={()=>setOpenReq(!openReq)}>Participer</button>)}
  {openReq?<div> <button onClick={()=>setOpenReq(!openReq)}>X</button>
     <NewEvent post={post} userData={userData} setOpen={setOpenReq} open={openReq}/></div>:(null)}
          {/* car les post sont filtrer par eventIsAdmin === true */}
  
         {/*      ici on check si l'utilisateur est admin (possibilité d'avoir plusieur admin) */}
          {post.Events.find(event=>event.eventRequest===true&&event.eventValidation===true&&event.eventIsAdmin===true&&event.userId===userData.id)?(<div><button onClick={handleClickDelete}>Supprimer</button><button onClick={()=>{setOpen(!open)}}>Editer</button></div>):null}
  
  
         {open?(<EditEvent userData={userData} postUser={post} open={open} setOpen={setOpen}/>):null}
          
        </div>
    )
}