import React,{useState} from 'react'

export default function ListParticipant({users, post}) {
 const [open,setOpen] = useState(false)   

    return (
       <>
  <div className='postList-li-bottom-guestContainer' >
      <div className='postList-li-bottom-guest'> 
               <h3 className='red font-name'>Participant </h3>

            <button onClick={()=>{setOpen(!open)}}>Voir les Participant!</button>
             </div> 
                  <div className='postList-li-bottom-guestNumber'> <span className='red'>{users?(users.length):0} </span>/{post.postMaxGuest}</div> 
  </div>
            {open ? (<div className='postList-li-bottom-guestList'> <ul>
  

           { users.map((user)=>  
           
            <li>
         
                <p> {user.User.firstName} </p>
                 <p> Xp: {user.User.userXp} </p>
            
            </li> )}
                
                </ul>  </div>):(null)} 

       
   </>
    )
}
