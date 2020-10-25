import React from "react";
import { usePostData } from "../../Context/ContextProvider";

import PostForm from "./PostForm";

import usePost from "./usePost";

export default function Post({ postDefaultData }) {
const {userData,openModal,
  handleClickOpenEventEdit,
   handleClickCloseEventEdit,
 handleClickEventDelelet, 
handleClickEventRequest, 
} = usePost()
const postData = usePostData()
  return (
    <div className="trainingPost-container">
      <ul>
        {postDefaultData.map((mapPostData,i) => (
          <li key={mapPostData.id}>
            <div className="trainingPost-post" onClick={()=>{console.log(mapPostData["Events.eventIsAdmin"])}}>
              <h2>{mapPostData.postName}</h2>
        <h2>PostId:{mapPostData.id}</h2>
             <h3>UserId:{mapPostData["User.id"]}</h3> 
              <h3>{mapPostData["User.firstName"]}</h3>
               <h3>{mapPostData.postDescription}</h3>
                <h3>{mapPostData["Parc.parcName"]}</h3> 
                <h3>{mapPostData["category.categoryName"]}</h3>
        <h3> /{mapPostData.postMaxGuest}</h3> 
            </div> 
{mapPostData["User.id"]===userData.userId?(<div>
  <button>Supprimer</button>
  <button onClick={()=>handleClickOpenEventEdit(i)}>Editer</button></div>):(<button key={mapPostData.id} onClick={()=>handleClickEventRequest(mapPostData.id)}>Participer</button>)}
{openModal===i ?(
<div>
  <button onClick={handleClickCloseEventEdit}>X</button>
 <PostForm mapPostData={mapPostData}/> 
</div>
):null } 

          </li>
        ))}    
      </ul>




    </div>
  );
}
