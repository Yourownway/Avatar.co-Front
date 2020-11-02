import React,{useState} from 'react'
import axios from 'axios'

export default function EditEvent({postUser,userData}) {
    const [eventUpdateData, setEventUpdateData]=useState({...postUser})

     const handleChange = (event) => {
    const { name, value } = event.target;
    setEventUpdateData({
      ...eventUpdateData,
      [name]: value,
    });

  };
  const handleSubmit = async (event) => {

    event.preventDefault();

       const res = await axios.patch(`/api/post/${postUser.id}/${userData.id}/edit`, eventUpdateData);
       if (res){console.log('post edité', res)}
//faire un reducer ou un context pour update les post automatiquement
    //    alert("le profil a été modifier");
    //    await authValue.reducerDispatch({ type: "LOAD_USER", payload: res })
  

  };

    return (
        <div>
            
           <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="postName"
        placeholder={postUser.postName}
        value={eventUpdateData.postName}
      />
       <input
        onChange={handleChange}
        type="text"
        name="postDescription"
        placeholder={postUser.postDescription}
        value={eventUpdateData.postDescription}
      />
       {/* <input
        onChange={handleChange}
        type="text"
        name="postDate"
        placeholder={postUser.postDate}
        value={eventUpdateData.postDate}
      /> */}
       <input
        onChange={handleChange}
        type="text"
        name="postMaxGuest"
        placeholder={postUser.postMaxGuest}
        value={eventUpdateData.postMaxGuest}
      />
        <input
        onChange={handleChange}
        type="text"
        name="postBadgeRequired"
        placeholder={postUser.postBadgeRequired?(postUser.postBadgeRequired):("Xp requis ?")}
        value={eventUpdateData.postBadgeRequired}
      />
      <button>Envoyer</button>
      </form>
        </div>
    )
}
