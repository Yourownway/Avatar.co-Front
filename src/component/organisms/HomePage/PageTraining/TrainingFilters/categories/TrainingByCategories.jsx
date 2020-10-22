import React from "react";

import Post from "../../../../../atoms/Post/Post";

import useTrainingByCategories from "./useTrainingByCategories";

export default function TrainingPostCategorie() {
const {postByCategorie} = useTrainingByCategories()

  return (
    <>
      <Post postDefaultData={postByCategorie} />
    </>
  );
}
