import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import Post from "../../../../../atoms/Post/Post";
import { usePostData } from "../../../../../Context/ContextProvider";
import usePageTraining from "../../usePageTraining";

import useTrainingByCategories from "./useTrainingByCategories";

export default function TrainingPostCategorie() {
const [postByCategorie, setPostByCategorie] = useState([])
const {postFilter} = usePageTraining()
const postData = usePostData()
  const categorie = useParams();
  useEffect(() => {

    const filterByCategorie = async()=>{
 
      const res = await postFilter.filter((post)=>post["category.categoryName"]===categorie.name)
      await setPostByCategorie(res)

   }
    filterByCategorie();
   
  }, [categorie,postFilter]);

  return (
    <>
      <Post postDefaultData={postByCategorie} />
      <h1>test</h1>
    </>
  );
}
