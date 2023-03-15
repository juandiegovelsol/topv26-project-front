import React, { useState } from "react";
/* import ReactPlayer from "react-player"; Could use this library to improve video automatic playing*/

import { Video } from "./Video";
import { DottedButtonsBar } from "./DottedButtonsBar";

import "./videoCarrousel.scss";

const VideoCarrousel = ({ videoArticles = "", imageArticles = "" }) => {
  const [selector, setSelector] = useState(0);

  return (
    <>
      {videoArticles && (
        <section className="videoCarrousel">
          {console.log("Video articles...", videoArticles[selector].title)}
          <Video videoArticles={videoArticles} selector={selector} />
          <DottedButtonsBar
            videoArticles={videoArticles}
            setSelector={setSelector}
          />
          <article className="videoInfo">
            {videoArticles[selector].title && (
              <h4>{videoArticles[selector].title}</h4>
            )}
            {videoArticles[selector].text && (
              <p>{videoArticles[selector].text}</p>
            )}
          </article>
        </section>
      )}
      {imageArticles && (
        <section className="image-carrousel">
          {console.log("imageArticles....", imageArticles)}
          <article className="image-carrousel__container">
            <img src={imageArticles[selector].src} alt="carrousel" />
          </article>
          <DottedButtonsBar
            videoArticles={imageArticles}
            setSelector={setSelector}
            isWhite={true}
          />

          <article className="image-carrousel__info">
            {imageArticles[selector].title && (
              <h4>{imageArticles[selector].title}</h4>
            )}
            {imageArticles[selector].text && (
              <p>{imageArticles[selector].text}</p>
            )}
          </article>
        </section>
      )}
    </>
  );
};

export default VideoCarrousel;
