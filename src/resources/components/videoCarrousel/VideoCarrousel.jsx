import React, { useState } from "react";
import ReactPlayer from "react-player";

import videoSrc1 from "../../video/cinematicExperience.mp4";
import videoSrc2 from "../../video/yokeSteering.mp4";
import videoSrc3 from "../../video/perfectEnviroment.mp4";
import videoSrc4 from "../../video/redesignedSecondRow.mp4";
import videoSrc5 from "../../video/consoleGradeGaming.mp4";
import "./videoCarrousel.scss";

const VideoCarrousel = () => {
  const [selector, setSelector] = useState(0);
  const [videoArticles, setVideoArticles] = useState([
    {
      key: 1,
      video: videoSrc1,
      title: "Cinematic experience",
      text: "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
    },
    {
      key: 2,
      video: videoSrc2,
      title: "Yoke Steering",
      text: "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
    },
    {
      key: 3,
      video: videoSrc3,
      title: "Perfect Environment",
      text: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
    },
    {
      key: 4,
      video: videoSrc4,
      title: "Redesigned Second Row",
      text: "Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.",
    },
    {
      key: 5,
      video: videoSrc5,
      title: "Console-Grade Gaming",
      text: "Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.",
    },
  ]);

  /*   const handleClick = (number) => {}; */

  return (
    <section className="videoWrapper">
      <article className="videoContainer">
        <video key={videoArticles[selector].key} controls autoplay muted>
          <source src={videoArticles[selector].video} type="video/mp4" />
        </video>
      </article>

      <article className="dottedVideoNavBar">
        <button
          onClick={() => {
            setSelector(0);
          }}
        ></button>
        <button
          onClick={() => {
            setSelector(1);
          }}
        ></button>
        <button
          onClick={() => {
            setSelector(2);
          }}
        ></button>
        <button
          onClick={() => {
            setSelector(3);
          }}
        ></button>
        <button
          onClick={() => {
            setSelector(4);
          }}
        ></button>
      </article>

      <article className="videoInfo">
        <h4>{videoArticles[selector].title}</h4>
        <p>{videoArticles[selector].text}</p>
      </article>
    </section>
  );
};

export default VideoCarrousel;
