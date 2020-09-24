import React from "react";
import "./TeamWork.css";
import Description from "../components/Description.js";

function TeamList(props) {
  return (
    <React.Fragment>
      <section className="team-list">
        {props.data.map((item, index) => {
          return <Description key={index} data={item} />;
      })}
      </section>
    </React.Fragment>
  );
}

export default TeamList;
