import { useState, useContext } from "react";
import { AuthContext } from "../../../../App";
import axios from "axios";

import { useUserUpdate, useUser } from "../../../Context/ContextProvider";
import { useHistory } from "react-router-dom";

export default function useSignIn() {
  const authValue = useContext(AuthContext);
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
      const res = await axios.post(`/api/signIn`, inputValues);
      if (res) {
        // localStorage.setItem("token", res.data.Token);
        await authValue.reducerDispatch({ type: "SIGNIN", payload: res });

        console.log("state", authValue.reducerState);
        setValues({
          ...inputValues,
          // isSubmitting: true,
          // errorMessage: null,
        });
        history.push("/Home");
      }
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

    // const res = await axios.post(`/api/signIn`, inputValues);
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
