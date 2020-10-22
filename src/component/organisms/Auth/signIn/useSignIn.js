import { useState, useEffect } from "react";
import AuthContext from "../../../Context/AuthContext";
import axios from "axios";

import { useUserUpdate, useUser } from "../../../Context/ContextProvider";
import { useHistory } from "react-router-dom";

export default function useSignIn() {
  const { dispatch } = AuthContext;
  const [inputValues, setValues] = useState({
    userEmail: "",
    userPassword: "",
    // isSubmitting: false,
    // errorMessage: null,
  });

  let history = useHistory();
  const updateUser = useUserUpdate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await axios.post(`/api/signIn`, inputValues).then((res) => {
        history.push("/Home");
        dispatch({ type: "SIGN_IN", payload: res.data });

        setValues({
          ...inputValues,
          isSubmitting: true,
          errorMessage: null,
        });
      });

      console.log("Sign", res.data);
    } catch (error) {
      setValues({
        ...inputValues,
      });
    }

    // event.preventDefault();
    // const { name, value } = event.target;
    // setValues({
    //   ...inputValues,
    //   [name]: value,
    // });

    // // const res = await axios.post(`/api/signIn`, inputValues);
    // console.log("singIn", res);

    // const reducer = await dispatch({ type: "SIGNIN", payload: res.data });
    // console.log("reducer", reducer);
    // if (res) {

    //   setValues({})
    //   // setUserData(state.user);

    //   history.push("/Home");
    // }
  };
  return { handleSubmit, handleChange, inputValues };
}
