import React, { useState } from "react";
import "./Search.css";
export default function Search({ getQuery }) {
  //  const [input, setInput] = useState();
  const changeHandler = (q) => {
    getQuery(q);
  };
  return (
    <div className="section">
      <form className="form-control">
        <input
          type="text"
          placeholder="search your favourite character here..."
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
