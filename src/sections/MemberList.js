import React from "react";
import CardMember from "../components/CardMember.js";
import "./MemberList.css";

const MemberList = ({ data }) => {
  return (
    <React.Fragment>
      <section className="member-list">
        {data.map((member, index) => {
          return <CardMember key={index} data={member} />;
        })}
      </section>
    </React.Fragment>
  );
};

export default MemberList;
