import { useEffect, useState } from "react";

import axios from "axios";
import { useUser } from "../../Context/ContextProvider";
export default function usePost() {
  const userData = useUser();
  const [openModal, setOpenModal] = useState(false);

  const handleClickEventEdit = () => {
    setOpenModal(!openModal);
  };
  const handleClickEventDelelet = () => {};
  const handleClickEventRequest = (postId) => {
    const fetchEventRequest = async () => {
      axios
        .post("/api/event/request", {
          userId: userData.userId,
          postId: postId,
        })
        .then((res) => console.log("EventRequest", res));
    };
    fetchEventRequest();
    console.log("userid", userData.userId, "postId", postId);
  };
  const handleClickDeleteEventRequest = () => {};
  return {
    userData,
    openModal,
    handleClickEventEdit,
    handleClickEventDelelet,
    handleClickEventRequest,
    handleClickDeleteEventRequest,
  };
}
