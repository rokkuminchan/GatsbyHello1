import React from "react";
import "./TeamWork.css";
import TeamList from "./TeamList";
import Img from "gatsby-image";

export default function TeamWork(props) {
  console.log(props.data);
  return (
    <section className="teamwork">
      <div>
      <Img
          className="image"
          fluid={props.data.image.src.childImageSharp.fluid}
          alt={props.data.image.alt} />
      <Img
          className="img"
          fluid={props.data.img.src.childImageSharp.fluid}
          alt={props.data.img.alt} />
      </div>
      <h2 className="teamwork__title">{props.data.title}</h2>
      <div className="teamwork__team-list">
        <TeamList data={props.data.description} />
      </div>
    </section>
  );
}
