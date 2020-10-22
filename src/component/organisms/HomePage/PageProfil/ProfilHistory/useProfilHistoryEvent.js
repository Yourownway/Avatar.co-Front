// import { useState, useEffect } from "react";
// import axios from "axios";
// export default function useProfilHistoryEvent() {
//   const [userPostState, setUserPostState] = useState([]);

//   useEffect(() => {
//     const user = { userId: localStorage.getItem("userId") };
//     console.log(user.userId);
//     async function fetchData({ userPost }) {
//       const res = await axios.post("api/post/user", user);
//       console.log("HistoryEvent", res.data.userPost);
//       setUserPostState(...userPostState, res.data.userPost);
//       await console.log("userPostState", userPostState);
//     }

//     fetchData();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps
//   return {};
// }
