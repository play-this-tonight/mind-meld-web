import React from "react";
const { header } = require("./index.module.scss");

const Header = () => {
  return (
    <div className={header}>
      <h1>Welcome to {process.env.REACT_APP_TITLE}</h1>
    </div>
  );
};

export default Header;
