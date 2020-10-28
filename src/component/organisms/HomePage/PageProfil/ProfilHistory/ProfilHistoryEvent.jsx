import React,{useEffect, useState} from "react";
import ButtonPost from "./atoms/ButtonPost";
import ListParticipant from "./atoms/ListParticipant";


export default function ProfilHistoryEvent({allPostUser,eventsPostUser}) {


    const [usersValidate, setUsersValidate] = useState([])
useEffect(() => {
 const filterValidation = async()=>{
   const res = await eventsPostUser.map((post)=>post.filter(event=>event["eventValidation"]===1))
   if(res){
     setUsersValidate(res)
     console.log(res, 'res')
   }
   else{
     setUsersValidate([])
   }

 }
 filterValidation()

}, [eventsPostUser])

console.log(allPostUser,'allPostUser')
     console.log(usersValidate,'usersValidate')
     console.log(eventsPostUser, 'eventPostUser')


  return (
    <div className="profilHistoryEvent-container">
   <ul> { 
   
      allPostUser.map((post,i)=>
           
    <li key={post.id}>
          <div className="trainingPost-post" >
              <h2>{post.postName}</h2>
       <h2>PostId:{post.id}</h2>
             <h3>UserId:{post["User.id"]}</h3> 
               <h3>{post["User.firstName"]}</h3>
               <h3>{post.postDescription}</h3>
                <h3>{post["Parc.parcName"]}</h3>
              <h3>{post["category.categoryName"]}</h3> 
                <h3> {usersValidate[i]?(usersValidate[i].length):null} /{post.postMaxGuest}</h3> 
              <ListParticipant users={usersValidate[i]}/> 
              {post["Events.eventValidation"]===1&&post["Events.eventIsAdmin"]===0?("Vous etes Valider"):null}
                <ButtonPost postUser={post}  />

   </div>




  </li>)
      
      
    }
</ul>
    </div>
  );
}

//   <h1>HistroyEvent </h1>
     
//     {/* {  userPostData.map((data)=> data.postName)} */}
//   <div className="trainingPost-container">
//     {/* probleme userValidate se map dans chaque post , je dois donc l'inseré via le dom */}
   
//       <ul>
//         {postUser.map((mapPostData,i) => ( 
          
//           <li key={mapPostData.id}>
//             <div className="trainingPost-post" >
//               <h2>{mapPostData.postName}</h2>
//         <h2>PostId:{mapPostData.id}</h2>
//              <h3>UserId:{mapPostData["User.id"]}</h3> 
//               <h3>{mapPostData["User.firstName"]}</h3>
//                <h3>{mapPostData.postDescription}</h3>
//                 <h3>{mapPostData["Parc.parcName"]}</h3>
//                 <h3>{mapPostData["category.categoryName"]}</h3> 
                
//         <h3>{userValidate[i]?(userValidate[i].length):null} /{mapPostData.postMaxGuest}</h3> 

//             </div>
//       {/* Si isAdmin, = true alors boutton editer supprimer  */}
// {mapPostData["Events.eventIsAdmin"]===1? ( <div><button>Editer</button> <button>Supprimer</button>
// </div>):null}

      
//       {/* si requete = true et valider = false alors div en attente  */}
//       {mapPostData["Events.eventRequest"]===1&&mapPostData["Events.eventValidation"]===0?(<button>En Attente</button>):null}
//   {/* si requete = true et valider alors div Valider  */}
// {mapPostData["Events.eventIsAdmin"]===0&&mapPostData["Events.eventValidation"]===1?(<button>Vous etes Valider</button>):null}
//           </li>
//         ))}    
//       </ul>

//  {/* envoyer une demande si eventId != userId du post et que event request est false
// {events.map((event)=>(event.userId!==mapPostData.userId?(<button onClick={()=> handleClickEventRequest(mapPostData.id)}>Participer</button>):(<h1>null</h1>)))}
// {/* supprimer une demande si event.Request a été envoyé  */}
// {/* {events.map((event)=>(event.userId==mapPostData.User.id&&event.eventRequest===true?(<button onClick={handleClickDeleteEventRequest}>Supprimer ma demande</button>):null))} */}
    


//     </div>