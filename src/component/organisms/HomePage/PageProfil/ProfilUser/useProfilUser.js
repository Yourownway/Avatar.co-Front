import { useState } from "react";

import ContextUser from "../../../../Context/ContextUser";
export default function useProfilUser() {
  const [data, setData] = useState([]);

  const { userData } = ContextUser;

  // const { userPost } = (ContextPost);

  // useEffect(() => {
  //   console.log("tesssst", userPost);
  //   const fetchValidation = async () => {
  //     await userPost.map((data) => {
  //       return axios
  //         .post("/api/event/validation", { postId: data.id })
  //         .then((result) => {
  //           if (result.data.UserRequests.length !== 0) {
  //             setData(result.data.UserRequests);
  //           }
  //         });
  //     });
  //   };
  //   fetchValidation();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, userData };
}
