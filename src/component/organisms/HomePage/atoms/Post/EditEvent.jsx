import React,{useState} from 'react'
import axios from 'axios'
import { useUpdatePost } from '../../../../Context/ContextProvider';

export default function EditEvent({postUser,userData,open,setOpen}) {
    const [eventUpdateData, setEventUpdateData]=useState({...postUser})
const  updatePost = useUpdatePost()
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
       if (res.status===200){console.log('post edité', res)
      console.log(res.status)
    
      }else{console.log('erreur Edit')}


  };

    return (
        <div>
            <button onClick={()=>{setOpen(!open)}}>X</button>
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
