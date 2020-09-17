import React from "react";
import "./Introduction.css";

const Introduction = ({ data }) => {
  return (
    <div className="introduction">
      <h1 className="introduction__title">{data.title}</h1>
      <p className="introduction__description">{data.description}</p>
    </div>
  );
};

export default Introduction;
