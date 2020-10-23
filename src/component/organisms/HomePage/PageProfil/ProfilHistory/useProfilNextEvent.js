import { useState, useEffect } from "react";
import { usePostData } from "../../../../Context/ContextProvider";
export default function usePorfilNewPost() {
  const [state, setState] = useState({});
  const postData = usePostData();

  useEffect(() => {
    if (postData.length === 0) {
      setState({});
    } else {
      setState(postData[0]);
    }
    console.log("profilNextEvent", state);
  }, [postData]); // eslint-disable-line react-hooks/exhaustive-deps
  return { state };
}
