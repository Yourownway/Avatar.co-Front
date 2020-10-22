import { useEffect } from "react";
import axios from "axios";
import { usePostData, useUpdatePost } from "../../Context/ContextProvider";

export default function useHomePage() {
  const updatePost = useUpdatePost();
  const postData = usePostData();
  useEffect(() => {
    async function fetchData() {
      const res = await axios("/api/post");
      console.log("POSTDATA", res);
      updatePost(res.data.post);
    }

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return { postData };
}
