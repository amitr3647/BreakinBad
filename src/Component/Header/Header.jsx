import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="heading"></img>
    </div>
  );
}
