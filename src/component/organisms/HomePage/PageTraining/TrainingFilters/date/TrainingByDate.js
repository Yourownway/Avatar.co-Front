import React, { useState, useEffect } from "react"

// import Post from "../../../../../atoms/Post/Post"

import usePageTraining from "../../usePageTraining"
import { usePostData } from "../../../../../Context/ContextProvider"

export default function TrainingPost() {
  //recuperer les tableau filtrer sans doublon

  const postData = usePostData()
  // return <Post postDefaultData={postData} />
}
