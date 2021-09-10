import React from "react";
import Card from "../../UI/Card";
import "./CharacterGrid.css";
export default function CharacterGrid({ items }) {
  return (
    <div className="characterGrid">
      {items.map((item) => (
        <Card item={item} key={item.char_id} />
      ))}
    </div>
  );
}
