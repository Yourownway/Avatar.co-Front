import React from "react"
import useSignUp from "./useSignUp"
import Input from "../../../atoms/Input"

export default function SignUp({ display }) {
  const { handleChange, handleSubmit, inputs } = useSignUp()

  return (
    <>
      <form className="authPage-form" onSubmit={handleSubmit}>
        <h1 className=" authPage-form-h1 font-name">Inscription</h1>
        <Input
          type="text"
          name="firstName"
          value={inputs.firstName}
          onChange={handleChange}
          children="Prénom"
        />
        <Input
          type="text"
          name="lastName"
          value={inputs.lastName}
          onChange={handleChange}
          children="Nom"
        />
        <Input
          type="text"
          name="userEmail"
          value={inputs.userEmail}
          onChange={handleChange}
          children="Email"
        />
        <Input
          type="password"
          name="userPassword"
          value={inputs.userPassword}
          onChange={handleChange}
          children="Mot de passe"
        />
        <button className="btn">Envoyer</button>
        {inputs.errorMessage && (
          <span className="error-message">{inputs.errorMessage}</span>
        )}
      </form>
    </>
  )
}
