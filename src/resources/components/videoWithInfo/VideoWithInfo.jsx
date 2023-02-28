import React from "react";

import "./videoWithInfo.scss";

const VideoWithInfo = ({ children, isInverted = false, isBlack = false }) => {
  const handleInvertion = (IsInverted) => {
    return IsInverted ? "video-with-info inverted" : "video-with-info";
  };
  const handleBackgroundColor = (IsBlack) => {
    return IsBlack ? " black" : "";
  };
  return (
    <section
      className={`${handleInvertion(isInverted)}${handleBackgroundColor(
        isBlack
      )}`}
    >
      {children}
    </section>
  );
};

export default VideoWithInfo;
