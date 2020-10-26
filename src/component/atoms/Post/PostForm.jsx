import React,{ useState } from "react";

import {useHistory} from 'react-router-dom'

import axios from "axios";
import { usePostData } from "../../Context/ContextProvider";

export default function PostForm({ mapPostData}) {
const [refresh,setRefresh] = useState(false)
  // const{handleChange,handleSubmit} = usePostForm()
const postData= usePostData()
  let history = useHistory()
  const [postUpdateData, setPostUpdateData] = useState({...mapPostData});
   const handleChange = (event) => {
    const { name, value } = event.target;
    setPostUpdateData({
      ...postUpdateData,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("event", event);
    const res = await axios.put(`/api/edit/post/${mapPostData.id}`, postUpdateData);
    console.log("res", res.status);
    if (res.status === 200) {
      console.log("status 200");
      await alert("le post a été modifier");
      history.push('/Home/Page/Training')
    }
  };

  return (
    <>
     <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="postName"
        placeholder="postName"
        value={postUpdateData.postName}
      />
      {/* <input
        onChange={handleChange}
        type="date"
        name="postDate"
        placeholder="postDate"
        value={postUpdateData.postDate}
      /> */}
      <input
        onChange={handleChange}
        type="text"
        name="postUserRole"
        placeholder=" postUserRole"
        value={postUpdateData.postUserRole}
      />
      <input
        onChange={handleChange}
        type="text"
        name="categoryId"
        placeholder="categoryId"
        value={postUpdateData["category.id"]}
      />
      <input
        onChange={handleChange}
        type="text"
        name="parcId"
        placeholder="parcId"
        value={postUpdateData["Parc.id"]}
      />
      <input
        onChange={handleChange}
        type="text"
        name="postMaxGuest"
        placeholder="postMaxGuest"
        value={postUpdateData.postMaxGuest}
      />
      <input
        onChange={handleChange}
        type="text"
        name="postDescription"
        placeholder="postDescription"
        value={postUpdateData.postDescription}
      />
      <button>Valider</button>
       </form>
    </>
  );
}
