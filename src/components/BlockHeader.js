import React from "react";

const BlockHeader = ({ heading, subHeading, content }) => {
  return (
    <React.Fragment>
      <h1>{heading}</h1>
      <p>{subHeading}</p>
      <p>{content}</p>
    </React.Fragment>
  );
};
export default BlockHeader;
