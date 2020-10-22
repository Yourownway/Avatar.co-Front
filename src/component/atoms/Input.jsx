import React, { Fragment } from "react";
function Input({ type, name, value, onChange, children, checked }) {
  return (
    <Fragment>
      <label htmlFor={name}> {children}</label>
      {checked ? (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        />
      )}
    </Fragment>
  );
}

export default Input;
