import React from 'react'

export default function FromUserPost({handleChange, userPostData}) {
  
    return (
        <>
        <h1>Le nom de l'event..</h1>
      <input
        onChange={handleChange}
        type="text"
        name="postName"
        placeholder="postName"
        value={userPostData.postName}
      />
      <h1>Quand ..?</h1>
      <input
        onChange={handleChange}
        type="date"
        name="postDate"
        placeholder="postDate"
        value={userPostData.postDate}
      />
  <h1>Quel genre ..?</h1>
      <input
        onChange={handleChange}
        type="text"
        name="categoryId"
        placeholder="categoryId"
        value={userPostData.categoryId}
      />
      <h1>Ou ca ..?</h1>
      <input
        onChange={handleChange}
        type="text"
        name="parcId"
        placeholder="parcId"
        value={userPostData.parcId}
      />
      <h1>Combien de personne ..?</h1>
      <input
        onChange={handleChange}
        type="text"
        name="postMaxGuest"
        placeholder="postMaxGuest"
        value={userPostData.postMaxGuest}
      />
       <h1>Dis nous en plus ..!</h1>
      <textarea
        onChange={handleChange}
        type="text"
        name="postDescription"
        placeholder="postDescription"
        value={userPostData.postDescription}
      ></textarea>
    </>
    )
}