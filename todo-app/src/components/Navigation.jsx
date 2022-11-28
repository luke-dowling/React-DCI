import React from "react";
import logo from "../images/logo.png";

const Navigation = () => {
  return (
    <nav>
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right">
        <a href="google.com">Help</a>
      </div>
    </nav>
  );
};

export default Navigation;
