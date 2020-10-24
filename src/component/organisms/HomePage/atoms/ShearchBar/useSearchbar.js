import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  usePostData,
  useSearchUpdate,
} from "../../../../Context/ContextProvider";
import usePageTraining from "../../PageTraining/usePageTraining";

export default function useSearchbar() {
  const postData = usePostData();
  const updateSearch = useSearchUpdate();
  const [searchInput, setSearchDataInput] = useState("");
  const history = useHistory();
  const URL = window.location.href;
  const { postFilter } = usePageTraining();
  const handleChange = (e) => {
    setSearchDataInput(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    if (searchInput !== "") {
      // history.push("/Home/Page/Training");
      const FiltreByPostName = async () => {
        const res = postFilter.filter((post) => {
          if (
            post.postName.toLowerCase().includes(searchInput.toLowerCase()) ||
            post["User.firstName"]
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
            return post;
        });
        if (res.length > 0) {
          console.log(res, "search");
          updateSearch(res);
        }
        updateSearch([]);
      };
      FiltreByPostName();
    }

    // else if (searchInput === "" || URL !== window.location.href) {
    //   setSearchData();
    // }
  }, [searchInput, postFilter]); // eslint-disable-line react-hooks/exhaustive-deps
  return { searchInput, handleChange };
}
