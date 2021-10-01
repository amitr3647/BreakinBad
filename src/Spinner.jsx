import React from "react";
import spinner from "../src/img/spinner.gif";
export default function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} alt="spinner"></img>
    </div>
  );
}
