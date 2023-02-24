import React from "react";

import "./video.scss";

const Video = ({ videoArticles, selector }) => {
  return (
    <article className="videoContainer">
      <video key={videoArticles[selector].key} controls autoplay muted>
        <source src={videoArticles[selector].video} type="video/mp4" />
      </video>
    </article>
  );
};

export default Video;
