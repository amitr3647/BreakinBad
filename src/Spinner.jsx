import React from "react";
import spinner from "./img/spinner.gif";
export default function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} alt="spinner"></img>
    </div>
  );
}
