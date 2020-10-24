import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../../../../atoms/Post/Post";
import {
  usePostData,
  useUpdatePost,
} from "../../../../../Context/ContextProvider";
import usePageTraining from "../../usePageTraining";

export default function TrainingPost() {
  //recuperer les tableau filtrer sans doublon
  const { postFilter } = usePageTraining();
  const postData = usePostData();

  return <Post postDefaultData={postFilter} />;
}
