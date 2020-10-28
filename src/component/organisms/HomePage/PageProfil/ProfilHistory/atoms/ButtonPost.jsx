import axios from 'axios'
import React, { useContext,useState } from 'react'
import { AuthContext } from '../../../../../../App'

import EditEvent from './EditEvent'

export default function ButtonPost({postUser}) {
    const authValue = useContext(AuthContext)
    const reducerUserData = authValue.reducerState.user
const [open,setOpen] = useState(false)

const handleClickDelete = async()=>{
const fetchDelete = async()=>{
const res = await axios.delete(`/api/post/${postUser.id}/delete`)
if (res){
  console.log(`post numero ${postUser.id} supprimer avec succès!`)
 //importer un reducer ou un context pour mettre a jour les USER POST 
}
}
fetchDelete()
}
    return (
        <div>
          {postUser["Events.eventIsAdmin"]===1?(<div><button onClick={handleClickDelete}>Supprimer</button><button onClick={()=>{setOpen(!open)}}>Editer</button></div>):null}
          {open?(<EditEvent userData={reducerUserData} postUser={postUser}/>):null}
          {postUser["Events.eventRequest"]===1&&postUser["Events.eventIsAdmin"]===0&&postUser["Events.eventValidation"]==0?(<div><button>Annuler</button></div>):null}  
        </div>
    )
}
