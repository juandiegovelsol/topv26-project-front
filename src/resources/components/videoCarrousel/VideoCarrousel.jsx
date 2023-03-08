import React, { useState } from "react";
/* import ReactPlayer from "react-player"; Could use this library to improve video automatic playing*/

import { Video } from "./Video";
import { DottedButtonsBar } from "./DottedButtonsBar";

import "./videoCarrousel.scss";

const VideoCarrousel = ({ videoArticles }) => {
  const [selector, setSelector] = useState(0);

  return (
    <section className="videoCarrousel">
      <Video videoArticles={videoArticles} selector={selector} />

      <DottedButtonsBar
        videoArticles={videoArticles}
        setSelector={setSelector}
      />

      <article className="videoInfo">
        <h4>{videoArticles[selector].title}</h4>
        <p>{videoArticles[selector].text}</p>
      </article>
    </section>
  );
};

export default VideoCarrousel;
