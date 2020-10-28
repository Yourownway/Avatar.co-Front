import React,{useState} from 'react'

export default function ListParticipant({users}) {
 const [open,setOpen] = useState(false)   

    return (
        <div>
     
            <button onClick={()=>{setOpen(!open)}}>Voir les Participant!</button>
            {open ? (<div> <ul>
  

           { users.map((user)=>  

            <li>
      
                <p> {user["User.firstName"]} </p>
                 <p> Xp: {user["User.userXp"]} </p>
            
            </li> )}
                
                </ul>  </div>):(null)} 

        </div>
    )
}
