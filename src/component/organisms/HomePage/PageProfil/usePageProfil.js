import { useState, useEffect } from "react";
import { usePostData, useUser } from "../../../Context/ContextProvider";
import AuthContext from "../../../Context/AuthContext";

export default function usePageProfil() {
  const [userPost, setUserPost] = useState([]);
  const { state } = AuthContext;
  const userData = useUser();
  const postData = usePostData();
  useEffect(() => {
    const UserEvent = () => {
      const userId = userData.userId;
      const res = postData.filter((post) => userId === post["Events.userId"]);
      setUserPost(res);
      console.log("RESSS", res);
    };
    UserEvent();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return { userData, userPost };
}
