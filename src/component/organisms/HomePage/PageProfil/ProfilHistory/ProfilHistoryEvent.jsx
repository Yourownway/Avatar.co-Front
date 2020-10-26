import React,{useEffect, useState} from "react";

import Post from "../../../../atoms/Post/Post";

import { usePostData } from "../../../../Context/ContextProvider";
import { filterEvent } from "../../../../action";

// import useProfilHistoryEvent from './useProfilHistoryEvent'
export default function ProfilHistoryEvent({eventsPostUser, postUser}) {

    const [userValidate, setUserValidate] = useState([])
  useEffect(() => {
    filterEvent(eventsPostUser, "eventValidation", setUserValidate,'UserValidate')
  }, [eventsPostUser])


  return (
    <div className="profilNextEvent-container">
      <h1>HistroyEvent </h1>
     
    {/* {  userPostData.map((data)=> data.postName)} */}
  <div className="trainingPost-container">
    {/* probleme userValidate se map dans chaque post , je dois donc l'inseré via le dom */}
   
      <ul>
        {postUser.map((mapPostData,i) => ( 
          
          <li key={mapPostData.id}>
            <div className="trainingPost-post" >
              <h2>{mapPostData.postName}</h2>
        <h2>PostId:{mapPostData.id}</h2>
             <h3>UserId:{mapPostData["User.id"]}</h3> 
              <h3>{mapPostData["User.firstName"]}</h3>
               <h3>{mapPostData.postDescription}</h3>
                <h3>{mapPostData["Parc.parcName"]}</h3>
                <h3>{mapPostData["category.categoryName"]}</h3> 
                
        <h3>{userValidate[i]?(userValidate[i].length):null} /{mapPostData.postMaxGuest}</h3> 

            </div>
      {/* Si isAdmin, = true alors boutton editer supprimer  */}
{mapPostData["Events.eventIsAdmin"]===1? ( <div><button>Editer</button> <button>Supprimer</button>
</div>):null}

      
      {/* si requete = true et valider = false alors div en attente  */}
      {mapPostData["Events.eventRequest"]===1&&mapPostData["Events.eventValidation"]===0?(<button>En Attente</button>):null}
  {/* si requete = true et valider alors div Valider  */}
{mapPostData["Events.eventIsAdmin"]===0&&mapPostData["Events.eventValidation"]===1?(<button>Vous etes Valider</button>):null}
          </li>
        ))}    
      </ul>

 {/* envoyer une demande si eventId != userId du post et que event request est false
{events.map((event)=>(event.userId!==mapPostData.userId?(<button onClick={()=> handleClickEventRequest(mapPostData.id)}>Participer</button>):(<h1>null</h1>)))}
{/* supprimer une demande si event.Request a été envoyé  */}
{/* {events.map((event)=>(event.userId==mapPostData.User.id&&event.eventRequest===true?(<button onClick={handleClickDeleteEventRequest}>Supprimer ma demande</button>):null))} */}
    


    </div>

    </div>
  );
}
