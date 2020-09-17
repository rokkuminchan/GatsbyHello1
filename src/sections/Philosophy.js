import React from "react";
import "./Philosophy.css";
import ValueList from "./ValueList";
import MindsetList from "./MindsetList";

export default function Philosophy(props) {
  console.log(props.data);
  return (
    <section className="philosophy">
      <h3 className="philosophy__title">{props.data.title}</h3>
      <div className="philosophy__mindset-list">
        <MindsetList data={props.data.mindsets} />
      </div>

      <div className="philosophy__value-list">
        <ValueList data={props.data.values} />
      </div>
    </section>
  );
}
