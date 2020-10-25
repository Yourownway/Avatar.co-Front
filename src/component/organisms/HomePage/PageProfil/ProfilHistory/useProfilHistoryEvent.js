import { useState, useEffect } from "react";
import axios from "axios";
import { usePostData, useUser } from "../../../../Context/ContextProvider";
import {
  getPostUserEvent,
  getPostEvents,
  filterEvent,
} from "../../../../action";

export default function useProfilHistoryEvent() {
  const userData = useUser();
  const postData = usePostData();
  const [userEvent, setUserEvent] = useState([]);
  const [historyPostEvents, setHistoryPostEvents] = useState([]);
  const [userValidate, setUserValidate] = useState([]);
  // j'applique les fonction dans l'ordre de mes post
  // recupere les evenement du User Admin et requette
  useEffect(() => {
    getPostUserEvent(postData, userData, setUserEvent, "Events.userId");
  }, [userData, postData]);

  //recupere tableau tout les evenement lié au postid pour ensuite filtré les requete et les validation
  useEffect(() => {
    getPostEvents(userEvent, setHistoryPostEvents);
  }, [userData, userEvent, postData]);
  //filtre les event par validation
  useEffect(() => {
    console.log("=========================");

    filterEvent(historyPostEvents, "eventValidation", setUserValidate);
  }, [historyPostEvents]);
  return { userEvent, historyPostEvents, userValidate };
}
