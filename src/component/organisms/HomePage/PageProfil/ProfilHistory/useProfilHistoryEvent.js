import { useState, useEffect } from "react";
import axios from "axios";
import { usePostData, useUser } from "../../../../Context/ContextProvider";
export default function useProfilHistoryEvent() {
  const userData = useUser();
  const postData = usePostData();
  const [userEvent, setUserEvent] = useState([]);
  const [historyPostEvents, setHistoryPostEvents] = useState([]);
  const [userValidate, setUserValidate] = useState([]);
  // j'applique les fonction dans l'ordre de mes post
  // recupere les evenement du User Admin et requette
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
  }, [userData, postData]);

  //recupere tableau tout les evenement lié au postid pour ensuite filtré les requete et les validation
  useEffect(() => {
    const getHistoryPostEvents = async () => {
      //recup postID des history id ie id suer Admin or participat
      const postIds = await userEvent.map((event) => event["Events.postId"]);
      console.log("postIds", postIds);
      //pour char post on recupere tout les event
      const res = await axios
        .all(
          postIds.map((postId) => axios.get(`/api/getEvents/event/${postId}`))
        )
        .then(async function (results) {
          const getData = await results.map((res) => res.data.Post);
          setHistoryPostEvents(getData);
          console.log("data", getData);
        });
    };
    getHistoryPostEvents();
    console.log("history", historyPostEvents);
  }, [userData, userEvent, postData]);
  useEffect(() => {
    console.log("=========================");
    const filterEventByValidation = async () => {
      //recup postID des history id ie id suer Admin or participat
      const res = await historyPostEvents.map((events) => {
        return events.filter((event) => event.eventValidation === true);
      });
      await setUserValidate(res);
      console.log("filterEventByValidation()", res);
    };
    filterEventByValidation();
  }, [historyPostEvents]);
  return { userEvent, historyPostEvents, userValidate };
}
