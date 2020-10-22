import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  usePostData,
  useSearchUpdate,
} from "../../../../Context/ContextProvider";

export default function useSearchbar() {
  const postData = usePostData();
  const updateSearch = useSearchUpdate();
  const [searchInput, setSearchDataInput] = useState("");
  const history = useHistory();

  const URL = window.location.href;
  const handleChange = (e) => {
    setSearchDataInput(e.target.value);
  };
  useEffect(() => {
    if (searchInput !== "") {
      // history.push("/Home/Page/Training");
      updateSearch(
        postData.filter((post) => {
          return post.postName
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        })
      );
    } // else if (searchInput === "" || URL !== window.location.href) {
    //   setSearchData();
    // }
  }, [searchInput, postData]); // eslint-disable-line react-hooks/exhaustive-deps
  return { searchInput, handleChange };
}
