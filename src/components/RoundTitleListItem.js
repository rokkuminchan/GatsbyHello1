import React from "react";
import "./RoundTitleListItem.css";

function RoundTitleListItem(props) {
  return (
    <div className="round-title-list-item">
      <div className={`round-title-list-item__title ${props.data.css}`}>
        {props.data.title}
      </div>
      <div className="round-title-list-item__description">
        {props.data.description}
      </div>
    </div>
  );
}

export default RoundTitleListItem;
