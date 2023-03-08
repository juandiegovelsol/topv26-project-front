import React from "react";

import "./videoFullHeigth.scss";

const VideoFullHeigth = ({ videoSrc, isHalf = false, children }) => {
  const handleWidth = (IsHalf) => {
    return IsHalf ? "video-full-heigth half" : "video-full-heigth";
  };
  return (
    <article className={handleWidth(isHalf)}>
      <video autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      {children}
    </article>
  );
};
export default VideoFullHeigth;
