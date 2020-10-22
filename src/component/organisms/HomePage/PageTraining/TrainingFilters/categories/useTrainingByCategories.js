import { useState, useEffect } from "react";
import { usePostData } from "../../../../../Context/ContextProvider";

import usePageTraining from "../../usePageTraining";

export default function useTrainingByCategories() {
  const { categorie } = usePageTraining();
  const postData = usePostData();
  const [postByCategorie, setPostByCategorie] = useState([]);

  useEffect(() => {
    setPostByCategorie(
      postData.filter((post) => {
        if (post.category.categoryName === categorie) {
          return post;
        }
      })
    );
  }, [postData, categorie]); // eslint-disable-line react-hooks/exhaustive-deps
  return { postByCategorie };
}
