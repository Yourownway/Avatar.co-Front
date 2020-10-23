import React from "react";
import { usePostData } from "../../Context/ContextProvider";

import PostForm from "./PostForm";

import usePost from "./usePost";

export default function Post({ postDefaultData }) {
const {userData,openModal,
  handleClickEventEdit,
 handleClickEventDelelet, 
handleClickEventRequest, 
} = usePost()
const postData = usePostData()
  return (
    <div className="trainingPost-container">
      <ul>
        {postDefaultData.map((mapPostData) => (
          <li key={mapPostData.id}>
            <div className="trainingPost-post">
              <h2>{mapPostData.postName}</h2>
        <h2>PostId:{mapPostData.id}</h2>
              <h3>UserId:{mapPostData.User.id}</h3>
              <h3>{mapPostData.User.firstName}</h3>
               <h3>{mapPostData.postDescription}</h3>
                <h3>{mapPostData.Parc.parcName}</h3>
                <h3>{mapPostData.category.categoryName}</h3>
        <h3> {mapPostData.Events.length}/{mapPostData.postMaxGuest}</h3>
            
            </div>
      {/* editer supprimer si le userId du post != userId */}
    {userData ? (  
    mapPostData? (<div><button onClick={handleClickEventEdit}>Editer</button>
    <button onClick={handleClickEventDelelet}>Supprimer</button></div>):(null)): null}
      {openModal ? (
      <div className="post-modale--edit">
             
                <div className="post-modale--edit ">
                  <button onClick={handleClickEventEdit}>X</button>
                 
                    <PostForm mapPostData={mapPostData}
                    />
                    
                
                </div>
                </div>):null}
 
{userData?(mapPostData.Events.eventIsAdmin===true?(<button onClick={()=> handleClickEventRequest(mapPostData.id)}>Participer</button>):null):null}


          </li>
        ))}    
      </ul>

 {/* envoyer une demande si eventId != userId du post et que event request est false
{events.map((event)=>(event.userId!==mapPostData.userId?(<button onClick={()=> handleClickEventRequest(mapPostData.id)}>Participer</button>):(<h1>null</h1>)))}
{/* supprimer une demande si event.Request a été envoyé  */}
{/* {events.map((event)=>(event.userId==mapPostData.User.id&&event.eventRequest===true?(<button onClick={handleClickDeleteEventRequest}>Supprimer ma demande</button>):null))} */}
    


    </div>
  );
}
