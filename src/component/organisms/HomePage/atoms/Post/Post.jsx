import React, { useContext,useEffect } from "react";
import { AuthContext } from "../../../../../App";
import ButtonPost from "./ButtonPost";
import ListParticipant from "./ListParticipant";




export default function Post({ postDefaultData, events,eventsValidate }) {
// const {userData,openModal,
//   handleClickOpenEventEdit,
//    handleClickCloseEventEdit,
//  handleClickEventDelelet, 
// handleClickEventRequest, 
// } = usePost()
useEffect(() => {

}, [postDefaultData.length,events, eventsValidate.length])
    const authValue = useContext(AuthContext)
    const userData = authValue.reducerState.user
console.log(eventsValidate,'eventsValidate')
  return (
    
    <div className="profilNextEvent-container">
   <ul> { 
   
      postDefaultData.map((post,i)=>
           
    <li key={post.id}>
          <div className="trainingPost-post" >
              <h2>{post.postName}</h2>
       <h2>PostId:{post.id}</h2>
             <h3>UserId:{post.User.id}</h3> 
               <h3>{post.User.firstName}</h3>
               <h3>{post.postDescription}</h3>
                <h3>{post.Parc.parcName}</h3>
              <h3>{post.category.categoryName}</h3> 
                <h3> {eventsValidate[i]?(eventsValidate[i].length):0} /{post.postMaxGuest}</h3> 
         {eventsValidate? (  <ListParticipant users={eventsValidate[i]}/>) : null }  
        {/* {eventsValidate&&userData.id?   (<ButtonPost post={post,eventsValidate[i]}/>): null}  */}

              {post.Events.eventValidation===true&&post.Events.eventIsAdmin===false?("Vous etes Valider"):null}
       {eventsValidate? ( <ButtonPost post={post} eventValidate={eventsValidate[i]}  />):null}   
        
   </div>




  </li>)
      
      
    }
</ul>
    </div>
        
   
  );
}
