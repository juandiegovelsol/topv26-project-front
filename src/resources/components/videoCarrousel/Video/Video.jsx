import React from "react";

import "./video.scss";

const Video = ({ videoArticles, selector }) => {
  return (
    <article className="videoContainer">
      <video key={videoArticles[selector].key} autoplay="true" muted loop>
        <source src={videoArticles[selector].video} type="video/mp4" />
      </video>
    </article>
  );
};

export default Video;
