import React from "react";
import RoundTitleListItem from "../components/RoundTitleListItem";

function ValueList(props) {
  return (
    <React.Fragment>
      {props.data.map((item, index) => {
        return <RoundTitleListItem key={index} data={item} />;
      })}
    </React.Fragment>
  );
}

export default ValueList;
