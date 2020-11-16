import React from "react"
import SignIn from "./signIn/SignIn"
import SignUp from "./signUp/SignUp"

import useAuthPage from "./useAuthPage"

export default function AuthPage() {
  const { display, handleClick } = useAuthPage()
  return (
    <>
      <div className="authPage ">
        <div className="authPage-slogan">
          <h1 className="authPage-slogan-h1">
            Voulez vous jouer au sport .<span className="green">..</span>{" "}
          </h1>
        </div>
        <div className="authPage-form-container">
          <button className="btn" onClick={handleClick}>
            {display ? "SignUp" : "SignIn"}
          </button>
          {display ? <SignIn /> : <SignUp display={display} />}
        </div>
      </div>
    </>
  )
}
