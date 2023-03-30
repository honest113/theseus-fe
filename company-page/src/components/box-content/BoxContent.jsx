import React from "react";
import "./css/box-content.scss";

const BoxContent = (props) => {
  return (
    <div className="box">
      <div className="box-title">{props.title}</div>
      <div className="box-content">{props.children}</div>
    </div>
  );
};

export default BoxContent;
