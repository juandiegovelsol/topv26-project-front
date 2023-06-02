import React from "react";
import "./CustomHeader.scss";

const CustomHeader = (props) => {
  const { heightt, children } = props;
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
