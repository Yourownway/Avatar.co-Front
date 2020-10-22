import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../../../../atoms/Post/Post";
import {
  usePostData,
  useUpdatePost,
} from "../../../../../Context/ContextProvider";

export default function TrainingPost() {
  const postData = usePostData();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios("/api/post");
  //     updatePost(res.data.post);
  //     console.log("POSTDATA", postData);
  //   };

  //   fetchData();
  // }, []);

  return <Post postDefaultData={postData} />;
}
