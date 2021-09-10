import React from "react";
import "./Card.css";
export default function Card({ item }) {
  return (
    <div className="card">
      <div className="card-box">
        <div className="card-front">
          <img src={item.img} alt="image"></img>
        </div>
        <div className="card-back">
          <h3>{item.name}</h3>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
