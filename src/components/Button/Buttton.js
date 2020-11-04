import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ name, extern, path }) => {
  return (
    <Fragment>
      {extern ? (
        <a href={path} target="_blank" rel="noreferrer">
          <button className="btn">{name}</button>
        </a>
      ) : (
        <Link to={path}>
          <button className="btn">{name}</button>
        </Link>
      )}
    </Fragment>
  );
};

export default Button;
