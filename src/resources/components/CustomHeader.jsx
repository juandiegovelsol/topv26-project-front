import React from "react";
import "../styles/CustomHeader.css";

export const CustomHeader = (props) => {
  const { heightt, children } = props;
  console.log(heightt);
  const setHeight = (height) => {
    if (height) {
      return "headerWrapperHeight";
    } else {
      return "headerWrapperNoHeight";
    }
    /*     return height ? "headerWrapper height" : "headerWrapper noHeight"; */
  };
  return <header className={setHeight(heightt)}>{children}</header>;
};
