import React from "react";
import "./TableLikeListItem.css";

export default function TableLikeListItem(props) {
  return (
    <React.Fragment>
      <div className="table-like-list-item">
        <h1 className="table-like-list-item__title">{props.data.title}</h1>
        <p className="table-like-list-item__description">
          {props.data.description}
        </p>
      </div>
    </React.Fragment>
  );
}
