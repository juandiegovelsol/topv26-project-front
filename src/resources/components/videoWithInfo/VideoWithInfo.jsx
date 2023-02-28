import React from "react";
import { SideInfo } from "./SideInfo";

import "./videoWithInfo.scss";

const VideoWithInfo = ({
  preTitle,
  title,
  text,
  button1,
  button2,
  children,
  isInverted = false,
}) => {
  const handleInvertion = (isInverted) => {
    return isInverted ? "video-with-info inverted" : "video-with-info";
  };
  return (
    <section className={handleInvertion(isInverted)}>
      {children}
      <SideInfo
        preTitle={preTitle}
        title={title}
        text={text}
        button1={button1}
        button2={button2}
      />
    </section>
  );
};

export default VideoWithInfo;
