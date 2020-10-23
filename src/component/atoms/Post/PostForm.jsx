import React from "react";
import { useEffect } from "react";
import usePostForm from './usePostForm'

export default function PostForm({ mapPostData}) {
  const{handleChange,handleSubmit} = usePostForm()
  useEffect(() => {
console.log('FORM',mapPostData)
  
  }, [])
  return (
    <>
     <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="postName"
        placeholder="postName"
        value={mapPostData.postName}
      />
      <input
        onChange={handleChange}
        type="date"
        name="postDate"
        placeholder="postDate"
        value={mapPostData.postDate}
      />
      <input
        onChange={handleChange}
        type="text"
        name="postUserRole"
        placeholder=" postUserRole"
        value={mapPostData.postUserRole}
      />
      <input
        onChange={handleChange}
        type="text"
        name="categoryId"
        placeholder="categoryId"
        value={mapPostData.categoryId}
      />
      <input
        onChange={handleChange}
        type="text"
        name="parcId"
        placeholder="parcId"
        value={mapPostData.parcId}
      />
      <input
        onChange={handleChange}
        type="text"
        name="postMaxGuest"
        placeholder="postMaxGuest"
        value={mapPostData.postMaxGuest}
      />
      <input
        onChange={handleChange}
        type="text"
        name="postDescription"
        placeholder="postDescription"
        value={mapPostData.postDescription}
      />
      <button>Valider</button>
       </form>
    </>
  );
}
