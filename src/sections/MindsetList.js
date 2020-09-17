import React from "react";
import TableLikeListItem from "../components/TableLikeListItem";

export default function MindsetList(props) {
  console.log(props.data.map);
  return (
    <React.Fragment>
      {props.data.map((item, index) => {
        return <TableLikeListItem key={index} data={item} />;
      })}
    </React.Fragment>
  );
}
