import { useState, useEffect } from "react";
import ContextPost from "../../../../Context/ContextPost";
export default function usePorfilNewPost() {
  const [state, setState] = useState({});
  const { postData } = ContextPost;

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
