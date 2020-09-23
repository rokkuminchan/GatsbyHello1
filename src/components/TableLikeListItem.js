import React from "react";
import "./TableLikeListItem.css";

export default function TableLikeListItem(props) {
  return (
    <React.Fragment>
      <div className="table-like-list-item">
        <div className="table-like-list-item__title">{props.data.title}</div>
        <div className="table-like-list-item__description">
          {props.data.description}
        </div>
      </div>
    </React.Fragment>
  );
}
