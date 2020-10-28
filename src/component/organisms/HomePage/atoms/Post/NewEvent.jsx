import React,{useState} from 'react'
import axios from 'axios'

export default function NewEvent({post,userData,setOpen,open}) {
const [state,setState]= useState({})

const handleChange = (e)=>{
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });

}

const handleClickCreateEvent = async (post)=>{
  const res= await axios.post(`/api/event/${post.id}/${userData.id}/new`,state)
if(res){
  console.log("Vous participer à l'event de" + post.User.firstName)
  setOpen(!open)
}
else{console.log('erreur')}
  }


    return (
        <div>
           
            <h3>Ajouter un commentaire?</h3>
            <input value={state.value}
            name="eventComment"
            onChange={handleChange}/>
            <button onClick={()=>handleClickCreateEvent(post)}>Envoyer</button>
        </div>
    )
}
