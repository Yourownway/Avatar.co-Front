import React,{useContext} from "react";
import ContextUser from "../../Context/ContextUser";
import PostForm from "./PostForm";
import usePostButton from "./usePostButton";


export default function PostButton({ mapPostData,events}) {
const {
  userData,openModal,
  handleClickEventEdit,
 handleClickEventDelelet, 
handleClickEventRequest, 
handleClickDeleteEventRequest,
  } = usePostButton()

// const userData = useContext(ContextUser)
  return (
    <>
    {/* editer supprimer si le userId du post != userId */}
    {userData ? (  
    mapPostData.User.id === userData.userId ? (<div><button onClick={handleClickEventEdit}>Editer</button>
    <button onClick={handleClickEventDelelet}>Supprimer</button></div>):(null)): null}
      {openModal ? (
      <div className="post-modale--edit">
             
                <div className="post-modale--edit ">
                  <button onClick={handleClickEventEdit}>X</button>
                 
                    <PostForm mapPostData={mapPostData}
                    />
                    
                
                </div>
                </div>):null}

    mapPostData.User.id === userData.userId ?

 {/* envoyer une demande si eventId != userId du post et que event request est false */}
{/* {events.map((event)=>event.userId!==mapPostData.userId&&event.eventRequest===false?(<button onClick={()=> handleClickEventRequest(mapPostData.id)}>Participer</button>):null)} */}
{/* supprimer une demande si event.Request a été envoyé  */}
{/* {events.map((event)=>event.userId!==mapPostData.User.id&&event.eventRequest===true?(<button onClick={handleClickDeleteEventRequest}>Supprimer ma demande</button>):null)} */}
    
      {/* {postDefaultData.map((data) =>
        data.userId === userData.userId ? (
          <div>
            <button onClick={handleClickModale}>Editer</button>
            <div className="post-modale--edit">
              {openModal ? (
                <div className="post-modale--edit ">
                  <button onClick={handleClickModale}>X</button>
                  <form onSubmit={() => handleSubmit(data)}>
                    <PostForm
                      handleChange={handleChange}
                      userPostData={userPostData}
                    />
                    <button>Valider</button>
                  </form>
                </div>
              ) : null}

              <button onClick={() => handleClickDelete(data)}>Supprimer</button>
            </div>
          </div>
        ) : (
          <button onClick={() => handleClickSend(data)}>Paticiper</button>
        )
      )} */}
    </>
  );
}
