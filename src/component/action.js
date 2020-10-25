import axios from "axios";
//recup les postId en fonction du UserId
export const filterEvent = (
  postData,
  userData,
  setUserEvent,
  params,
  comment
) => {
  const res = postData.filter((post) => userData.userId === post[params]);
  setUserEvent(res);
  console.log("UserEvent =>  usePageProfil" + comment, res);
  console.log("userData.userId", userData.userId);
};
// recup les Event des Post
export const getPostEvents = async (
  userEvent,

  setHistoryPostEvents,
  comment
) => {
  //recup postID des history id ie id suer Admin or participat
  const postIds = await userEvent.map((event) => event["Events.postId"]);
  console.log("postIds", postIds);
  //pour char post on recupere tout les event
  const res = await axios
    .all(postIds.map((postId) => axios.get(`/api/getEvents/event/${postId}`)))
    .then(async function (results) {
      const getData = await results.map((res) => res.data.Post);
      setHistoryPostEvents(getData);
      console.log(comment, getData);
    });
};
//filtre les event des post
export const filterEventByValidation = async (
  historyPostEvents,
  params,
  setUserValidate
) => {
  //recup postID des history id ie id suer Admin or participat
  const res = await historyPostEvents.map((events) => {
    return events.filter((event) => event[params] === true);
  });
  if (res) {
    await setUserValidate(res);
    console.log("filterEventByValidation()", res);
  }
};
