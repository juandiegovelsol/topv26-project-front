import React from "react";
import "./CustomHeader.css";

const CustomHeader = (props) => {
  const { heightt, children } = props;
  console.log(heightt);
  const setHeight = (height) => {
    if (height) {
      return "headerWrapperHeight";
    } else {
      return "headerWrapperNoHeight";
    }
  };
  return <header className={setHeight(heightt)}>{children}</header>;
};

export default CustomHeader;
