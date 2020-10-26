import React, { useState, useEffect } from "react"

import Post from "../../../../../atoms/Post/Post"

import usePageTraining from "../../usePageTraining"

export default function TrainingPost() {
  //recuperer les tableau filtrer sans doublon
  const { postFilter } = usePageTraining()

  return <Post postDefaultData={postFilter} />
}
