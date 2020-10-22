import { useState, useEffect } from "react";
import ContextPost from "../../../../../Context/ContextPost";

export default function useTrainingByRate() {
  const { postData } = ContextPost;
  const [postByRate, setPostByRate] = useState([]);

  useEffect(() => {
    setPostByRate(
      postData.filtre((post) => {
        post.User.userRank.sort();
      })
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return { postByRate };
}
