// import { useEffect } from "react"
// import axios from "axios"
// import {
//   usePostData,
//   useUpdatePost,
//   useUser,
//   useUpdateEventUser,
//   useEventUser,
// } from "../../Context/ContextProvider"

// export default function useHomePage() {
//   const updatePost = useUpdatePost()
//   const postData = usePostData()
//   const userData = useUser()
//   const updateUserEvent = useUpdateEventUser()
//   const userEventData = useEventUser()
//   // const handleClick = () => {
//   //   axios
//   //     .post("/api/user/event", {
//   //       userId: userData.userId,
//   //     })
//   //     .then((res) => {
//   //       setUserEvent(res.data.userEvent)
//   //       updateUserEvent(res.data.post)
//   //     })
//   // }
//   // useEffect(() => {
//   //   const fetchUserEvent = async () => {
//   //     const res = await axios.post("/api/user/event", {
//   //       userId: userData.userId,
//   //     });
//   //     if (res) {
//   //       updateUserEvent(res.data.userEvent);
//   //     }
//   //   };
//   //   fetchUserEvent();
//   // }, [userData]);
//   useEffect(() => {
//     async function fetchData() {
//       const res = await axios("/api/post")
//       console.log("POSTDATA", res)
//       updatePost(res.data.post)
//     }

//     fetchData()
//   }, []) // eslint-disable-line react-hooks/exhaustive-deps

//   return { postData, userEventData }
// }
