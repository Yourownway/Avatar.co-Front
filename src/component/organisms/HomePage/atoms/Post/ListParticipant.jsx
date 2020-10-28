import React,{useState} from 'react'

export default function ListParticipant({users}) {
 const [open,setOpen] = useState(false)   
console.log(users,'users')
    return (
       <>
<div>
            <button onClick={()=>{setOpen(!open)}}>Voir les Participant!</button>
            {open ? (<div> <ul>
  

           { users.map((user)=>  
           
            <li>
             <button onClick={()=>(console.log(users))}>ICI</button>
                <p> {user.User.firstName} </p>
                 <p> Xp: {user.User.userXp} </p>
            
            </li> )}
                
                </ul>  </div>):(null)} 

        </div>
   </>
    )
}
