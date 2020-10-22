import React, { Fragment } from "react";

const Aside = ({ asideClass, title, description, src, alt, history }) => {
  // const handleClick = () => {
  //   history.push("/{history}");
  // };
  return (
    <Fragment>
      <aside className={asideClass}>
        <img src={src} alt={alt}></img>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <button>En savoir plus</button>
        </div>
      </aside>
    </Fragment>
  );
};

export default Aside;
