import React from "react";
import "./MemberIntroduction.css";
import MemberList from "./MemberList";

export default function MemberIntroduction(props) {

  return (
    <section className="memberintroduction">
      <h1 className="memberintroduction__title">{props.data.title}</h1>
      <p className="memberintroduction__description">{props.data.description}</p>
      <div className="memberintroduction__member-list">
        <MemberList data={props.data.memberLists} />
      </div>
    </section>
  );
}
