import React from "react";
import "./Description.css";

const Description = ({ data }) => {
  return (
      <div className="description">
        <h3 className="description__title">{data.title}</h3>
        <h3 className="description__subtitle">{data.subtitle}</h3>
      </div>
  );
};

export default Description;
