import { useState, useEffect } from "react";
import axios from "axios";
import ContextUser from "../../Context/ContextUser";

export default function usePostButton() {
  const { userData } = useContext(ContextUser);

  const [userPostData, setuserPostData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [eventRequest, setEventRequest] = useState(false);
  const [events, setEvents] = useState([]);
  const URL = "/api/events";
  useEffect(() => {}, []);

  const handleClickEventEdit = () => {
    setOpenModal(!openModal);
  };
  const handleClickEventDelelet = () => {};
  const handleClickEventRequest = (postId) => {
    const fetchEventRequest = async () => {
      const res = axios
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
