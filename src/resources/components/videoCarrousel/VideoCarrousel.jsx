import React, { useState } from "react";
import ReactPlayer from "react-player";

import videoSrc from "../../video/cinematicExperience.mp4";
import "./videoCarrousel.scss";

const VideoCarrousel = () => {
  const [videoSelector1, setVideoSelector1] = useState(true);
  const [videoSelector2, setVideoSelecto2] = useState(false);

  return (
    <section className="videoWrapper">
      <article className="videoContainer">
        <video autoplay muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </article>

      <article className="dottedVideoNavBar">
        <button onClick={() => {}}></button>
        <button></button>
      </article>

      <article className="videoInfo">
        <h4>Cinematic experience</h4>
        <p>
          A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution,
          true colors and exceptional responsiveness for gaming, movies and
          more.
        </p>
      </article>
    </section>
  );
};

export default VideoCarrousel;
