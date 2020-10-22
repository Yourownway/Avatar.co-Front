import React from "react";

export default function FromEditPost({ handleChange, userPostData }) {
  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        name="postName"
        placeholder="postName"
        value={userPostData.postName}
      />
      <input
        onChange={handleChange}
        type="date"
        name="postDate"
        placeholder="postDate"
        value={userPostData.postDate}
      />
      <input
        onChange={handleChange}
        type="text"
        name="postUserRole"
        placeholder=" postUserRole"
        value={userPostData.postUserRole}
      />
      <input
        onChange={handleChange}
        type="text"
        name="categoryId"
        placeholder="categoryId"
        value={userPostData.categoryId}
      />
      <input
        onChange={handleChange}
        type="text"
        name="parcId"
        placeholder="parcId"
        value={userPostData.parcId}
      />
      <input
        onChange={handleChange}
        type="text"
        name="postMaxGuest"
        placeholder="postMaxGuest"
        value={userPostData.postMaxGuest}
      />
      <input
        onChange={handleChange}
        type="text"
        name="postDescription"
        placeholder="postDescription"
        value={userPostData.postDescription}
      />
    </>
  );
}
