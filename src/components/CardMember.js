import React from "react";
import "./CardMember.css";

const CardMember = ({ data }) => {
  return (
    <div className="col-3 col-s-5 cardmember">
      <img className="cardmember__image" {...data.img} />
      <h1 className="cardmember__title">{data.title}</h1>
      <p className="cardmember__description">{data.description}</p>
    </div>
  );
};

export default CardMember;
