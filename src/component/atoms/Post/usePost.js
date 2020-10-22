import { useEffect, useState } from "react";

import axios from "axios";
import { useUser } from "../../Context/ContextProvider";
export default function usePost() {
  const [events, setEvents] = useState([]);
  const userData = useUser();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("/api/events")
      .then((res) => {
        console.log("RESS", res.data.Events);
        setEvents(res.data.Events);
      })
      .catch((err) => console.log(err));
  }, []);

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
    events,
    userData,
    openModal,
    handleClickEventEdit,
    handleClickEventDelelet,
    handleClickEventRequest,
    handleClickDeleteEventRequest,
  };
}
