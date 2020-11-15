import React from "react"

import Input from "../../../atoms/Input"

import useSignIn from "./useSignIn"

export default function SignIn() {
  const { handleChange, handleSubmit, inputValues } = useSignIn()

  return (
    <>
      <form className="authPage-form" onSubmit={handleSubmit}>
        <h1 className="font-name">Connexion</h1>

        <Input
          type="text"
          name="userEmail"
          value={inputValues.userEmail}
          onChange={handleChange}
          children="Email"
        />
        <Input
          type="password"
          name="userPassword"
          value={inputValues.userPassword}
          onChange={handleChange}
          children="Mot de Passe"
        />
        <button className="btn">Envoyer</button>
      </form>
    </>
  )
}
