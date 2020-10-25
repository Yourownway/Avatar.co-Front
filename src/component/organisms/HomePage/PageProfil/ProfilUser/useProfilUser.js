import { useState, useEffect } from "react";
import { usePostData, useUser } from "../../../../Context/ContextProvider";
import {
  filterEvent,
  getPostEvents,
  filterEventByValidation,
} from "../../../../action";
export default function useProfilUser() {
  const [data, setData] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const userData = useUser();
  const postData = usePostData();
  const [userEvent, setUserEvent] = useState([]);
  const [historyPostEvents, setHistoryPostEvents] = useState([]);
  const [userValidate, setUserValidate, getHistoryPostEvents] = useState([]);
  // j'applique les fonction dans l'ordre de mes post
  // recupere les evenement du User Admin et requette
  useEffect(() => {
    filterEvent(
      postData,
      userData,
      setUserEvent,
      "Events.eventRequest",
      "!!!!!!!!!!!!!!!!!!WAZZZA"
    );
  }, [userData, postData]);

  //recupere tableau tout les evenement lié au postid pour ensuite filtré les requete et les validation
  useEffect(() => {
    getPostEvents(userEvent, setHistoryPostEvents, "WAZZZZZAA");
  }, [userData, userEvent, postData]);
  useEffect(() => {
    console.log("=========================");

    filterEventByValidation(
      historyPostEvents,
      "eventValidation",
      setUserValidate
    );
  }, [historyPostEvents]);
  const handleClickEdit = () => {
    setOpenEdit(!openEdit);
  };

  return {
    data,
    openEdit,
    handleClickEdit,
    userEvent,
    historyPostEvents,
    userValidate,
  };
}
