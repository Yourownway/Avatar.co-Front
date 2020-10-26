import axios from "axios"
//recup les postId en fonction du UserId
export const getPostUserEvent = (
  postData,
  userData,
  setUserEvent,
  params,
  comment
) => {
  const res = postData.filter((post) => userData.userId === post[params])
  setUserEvent(res)
  console.log("UserEvent =>  usePageProfil" + comment, res)
  console.log("userData.userId", userData.userId)
}
// recup les Event des Post
export const getPostEvents = async (userEvent, setPostEvents, comment) => {
  //recup postID des history id ie id suer Admin or participat
  const postIds = await userEvent.map((event) => event["Events.postId"])
  console.log("postIds", postIds)
  //pour chaque post on recupere tout les event
  await axios
    .all(postIds.map((postId) => axios.get(`/api/getEvents/postId/${postId}`)))
    .then(async function (results) {
      const getData = await results.map((res) => res.data.Post)
      setPostEvents(getData)
      console.log(comment + "getData ???????????????????", getData)
    })
}
//filtre les event des post
export const filterEvent = async (
  PostEvents,
  params,
  setUserValidate,
  comment
) => {
  //recup postID les userId selon la requette (Admin ou participan)t
  const res = await PostEvents.map((events) => {
    return events.filter(
      // prettier-ignore
      (event) => event[params] === 1
    )
  })
  if (res) {
    await setUserValidate(res)
    console.log("filterEvent()" + comment, res)
  }
}
