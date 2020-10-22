import { useState, useEffect } from "react";

import ContextPost from "../../../Context/ContextPost";

import axios from "axios";

export default function usePageTraining() {
  const { postData } = ContextPost;
  const [categories, setCategories] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/categories");
      console.log("res", res.data.Categories);
      setCategories(res.data.Categories);
    };
    fetchCategories();
    console.log(categories, "categories");
  }, [postData]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = async (e) => {
    setSelect(e.target.value);
  };
  return { categories, select, handleChange };
}
