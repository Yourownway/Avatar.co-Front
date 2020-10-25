import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../Context/ContextProvider";

export default function usePostForm() {
  const [postUpdateData, setPostUpdateData] = useState({});
  const userData = useUser();

  useEffect(() => {
    setPostUpdateData({ ...postUpdateData, userId: 1 });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostUpdateData({
      ...postUpdateData,
      [name]: value,
    });
  };

  const handleSubmit = async (event, postId) => {
    event.preventDefault();
    console.log("event", event);

    const res = await axios.patch(`/api/edit/post/${postId}`, postUpdateData);
    console.log("res", res.status);
    if (res.status === 200) {
      console.log("status 200");
      await alert("le post a été modifier");
    }
  };
  return { handleChange, handleSubmit };
}
