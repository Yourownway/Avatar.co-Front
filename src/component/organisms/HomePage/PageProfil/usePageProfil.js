import { useState, useEffect } from "react";
import { usePostData, useUser } from "../../../Context/ContextProvider";
import AuthContext from "../../../Context/AuthContext";

export default function usePageProfil() {
  const [userPost, setUserPost] = useState([]);

  const userData = useUser();
  const postData = usePostData();
  const userId = userData.userId;
  useEffect(() => {
    const UserEvent = () => {
      const res = postData.filter((post) => userId === post["Events.userId"]);
      setUserPost(res);
      console.log("RESSS", res);
      console.log("userId", userId);
    };
    UserEvent();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return {};
}
