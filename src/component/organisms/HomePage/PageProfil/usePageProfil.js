import { useState, useEffect } from "react";
import { usePostData, useUser } from "../../../Context/ContextProvider";

export default function usePageProfil() {
  const [userEvent, setUserEvent] = useState([]);

  const userData = useUser();
  const postData = usePostData();
  //obtenir les events USER admin ou non
  // eslint-disable-line react-hooks/exhaustive-deps
  return { userEvent };
}
