import model_s_image from "../images/model-s.jfif";
import model_s_interior from "../images/Model-S-Interior.jfif";

import videoSrc1 from "../video/cinematicExperience.mp4";
import videoSrc2 from "../video/yokeSteering.mp4";
import videoSrc3 from "../video/perfectEnviroment.mp4";
import videoSrc4 from "../video/redesignedSecondRow.mp4";
import videoSrc5 from "../video/consoleGradeGaming.mp4";

import AlternateImage1 from "../images/AI-stay-conected.jfif";
import AlternateImage2 from "../images/AI-room-everything.jfif";
import AlternateImageVD from "../video/AI-inmersive-sound.mp4";

export const ModelSData = {
  title: "Model S",
  lowerText: "Plaid",
  imageSrc: model_s_image,
  info: [
    {
      p1: "396 mi",
      p2: "Range (EPA est.)",
      button: "",
    },
    {
      p1: "1.99 s",
      p2: "0-60 mph*",
      button: "",
    },
    {
      p1: "200 mph",
      p2: "Top speed",
      button: "",
    },
    {
      p1: "1020 hp",
      p2: "Peak power",
      button: "",
    },
    {
      p1: "",
      p2: "",
      button: "Order Now",
    },
  ],
};
export const ModelSInterior = {
  title: "Interior of the future",
  imgSrc: model_s_interior,
};

export const VideoArticles = [
  {
    key: 0,
    video: videoSrc1,
    title: "Cinematic experience",
    text: "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
  },
  {
    key: 1,
    video: videoSrc2,
    title: "Yoke Steering",
    text: "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
  },
  {
    key: 2,
    video: videoSrc3,
    title: "Perfect Environment",
    text: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
  },
  {
    key: 3,
    video: videoSrc4,
    title: "Redesigned Second Row",
    text: "Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.",
  },
  {
    key: 4,
    video: videoSrc5,
    title: "Console-Grade Gaming",
    text: "Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.",
  },
];

export const AlternateImagesData = [
  {
    key: 0,
    media: AlternateImage1,
    image: true,
    oriented: false,
    title: "Stay Connected",
    text: "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
  },
  {
    key: 1,
    media: AlternateImageVD,
    image: false,
    oriented: true,
    title: "Immersive Sound",
    text: "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
  },
  {
    key: 1,
    media: AlternateImage2,
    image: true,
    oriented: false,
    title: "Room for Everything",
    text: "With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.",
  },
];
