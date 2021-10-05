import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <>
      <button className={style.Button} onClick={onClick} type="button">
        Load more
      </button>
    </>
  );
};

Button.propTypes = {
  onclick: PropTypes.func
};

export default Button;
