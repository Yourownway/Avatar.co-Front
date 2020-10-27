import axios from "axios"
//recup tout les post lié au User (requette et admin)
export const getPostUserEvent2 = (userData) => {
  const fetchAllPostUser = async () => {
    const res = await axios.get(`/api/event/${userData.id}/getAllPostUser`)

    if (res) {
      console.log("HERRRRRRRRRRRRRRE", res)
    }
  }
  fetchAllPostUser()
}

export const getPostUserEvent = (userData, setPostUser) => {
  const fetchAllPostUser = async () => {
    const res = await axios.get(`/api/event/${userData.id}/getAllPostUser`)

    if (res) {
      setPostUser(res.data)
      console.log("HERRRRRRRRRRRRRRE", res)
    }
  }
  fetchAllPostUser()
  // const res = postData.filter((post) => userData.id === post[params])
  // setPostUser(res)
  // console.log("UserEvent =>  usePageProfil" + comment, res)
  // console.log("userData.userId", userData.id)
}
// recupere tout les event lié au post User
export const getPostEvents = async (postUser, setEventsPostUser, comment) => {
  //recup postID des history id ie id suer Admin or participat
  const postIds = await postUser.map((event) => event["Events.postId"])
  console.log("postIds", postIds)
  //pour chaque post on recupere tout les event
  await axios
    .all(postIds.map((postId) => axios.get(`/api/getEvents/postId/${postId}`)))
    .then(async function (results) {
      const getData = await results.map((res) => res.data.Post)
      setEventsPostUser(getData)
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
