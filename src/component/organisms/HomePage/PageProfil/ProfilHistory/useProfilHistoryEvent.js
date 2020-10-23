import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../../../../Context/ContextProvider";
export default function useProfilHistoryEvent() {
  const [userPostData, setUserPostData] = useState([]);
  const userData = useUser();

  useEffect(() => {
    const fetchUserPost = async () => {
      const res = await axios.post("/api/userPost", {
        userId: userData.userId,
      });
      console.log("HistoryEvent", res.data.userPost);
      if (res) {
        setUserPostData(res.data.userPost);
      }
    };

    fetchUserPost();
  }, [userData]); // eslint-disable-line react-hooks/exhaustive-deps
  return { userPostData };
}
