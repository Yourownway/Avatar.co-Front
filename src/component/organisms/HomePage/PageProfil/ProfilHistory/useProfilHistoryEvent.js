import { useState, useEffect } from "react";
import axios from "axios";
import { usePostData, useUser } from "../../../../Context/ContextProvider";
export default function useProfilHistoryEvent() {
  const userData = useUser();
  const postData = usePostData();
  const [userEvent, setUserEvent] = useState([]);
  useEffect(() => {
    const filterUserEvent = () => {
      const res = postData.filter(
        (post) => userData.userId === post["Events.userId"]
      );
      setUserEvent(res);
      console.log("UserEvent =>  usePageProfil", res);
      console.log("userData.userId", userData.userId);
    };
    filterUserEvent();
  }, [userData]);

  return { userEvent };
}
