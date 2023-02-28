import React from "react";

import "./videoFullHeigth.scss";

const VideoFullHeigth = ({ videoSrc, children }) => {
  return (
    <article className="video-full-heigth">
      <video autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      {children}
    </article>
  );
};
export default VideoFullHeigth;
