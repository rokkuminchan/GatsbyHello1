import React from "react";
import "./RoundTitleListItem.css";

function RoundTitleListItem(props) {
  return (
    <div className="round-title-list-item">
      <h1 className={`round-title-list-item__title ${props.data.css}`}>
        {props.data.title}
      </h1>
      <p className="round-title-list-item__description">
        {props.data.description}
      </p>
    </div>
  );
}

export default RoundTitleListItem;
