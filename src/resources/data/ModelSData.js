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

import ModelSMoreInfoImg from "../images/model-s-more-info.jfif";

import ModelSPowerOption1 from "../images/model-s-power-option1.jfif";
import ModelSPowerOption2 from "../images/model-s-power-option2.jfif";

import ModelSMoreInfoImg2 from "../images/model-s-more-info2.jfif";

import AlternateImage4 from "../images/AI-rentless-performance.jfif";
import AlternateImage5 from "../images/AI-optimized-aerodynamics.jfif";
import AlternateImage6 from "../images/AI-refined-styling.jfif";

import GoAnywhere from "../video/go-anywhere.mp4";

import SFtoLA from "../images/SFtoLA.jfif";
import BKtoLT from "../images/BKtoLT.jfif";
import MHtoBT from "../images/MHtoBT.jfif";
import FLtoOR from "../images/FLtoOR.jfif";

import HighProtectionImg from "../images/model-s-high-protection.jfif";

import NavigateAutopilot from "../video/navigate-autopilot.mp4";
import AutolaneChange from "../video/autolane-change.mp4";
import Summon from "../video/summon.mp4";
import Autopark from "../video/autopark.mp4";

import ModelSMoreInfoImg3 from "../images/model-s-more-info3.jfif";

export const ModelSData = {
  title: "Model S",
  lowerText: "Plaid",
  fullHeigth: true,
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
    title: "Stay Connected",
    text: "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
  },
  {
    key: 1,
    media: AlternateImageVD,
    image: false,
    title: "Immersive Sound",
    text: "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
  },
  {
    key: 2,
    media: AlternateImage2,
    image: true,
    title: "Room for Everything",
    text: "With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.",
  },
];
export const ModelSMoreInfo = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: ModelSMoreInfoImg,
  info: [
    {
      p1: "1020 hp",
      p2: "Peak power",
      button: "",
    },
    {
      p1: "9.23 s",
      p2: "@155 mph 1/4 mile",
      button: "",
    },
    {
      p1: "1.99 s",
      p2: "0-60 mph*",
      button: "",
    },
  ],
  moreInfo: {
    text: "Plaid",
    title: "Beyond Ludicrous",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.",
  },
};

export const SelectorWithImageData = {
  title: "Electric Powertrain",
  text: "Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.",
  footer: "* With rollout subtracted",
  options: [
    {
      key: 0,
      isImage: true,
      imgSrc: ModelSPowerOption1,
      title: "Model S",
      text: "Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.",
      info: [
        {
          first: "3.1 s",
          second: "0-60 mph",
        },
        {
          first: "405 mi",
          second: "Range (EPA est.)",
        },
        {
          first: "670 hp",
          second: "Peak Power",
        },
      ],
    },
    {
      key: 1,
      isImage: true,
      imgSrc: ModelSPowerOption2,
      title: "Model S Plaid",
      text: "Mantain 1.000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotos.",
      info: [
        {
          first: "1.99 s*",
          second: "0-60 mph",
        },
        {
          first: "396 mi",
          second: "Range (EPA est.)",
        },
        {
          first: "1,020 hp",
          second: "Peak Power",
        },
      ],
    },
  ],
};

export const ModelSMoreInfo2 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: ModelSMoreInfoImg2,
  info: [],
  moreInfo: {
    text: "Exterior",
    title: "Designed for Efficiency",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.",
  },
};

export const AlternateImagesData2 = [
  {
    key: 0,
    media: AlternateImage4,
    image: true,
    title: "Relentless Performance",
    text: "Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.",
  },
  {
    key: 1,
    media: AlternateImage5,
    image: true,
    title: "Optimized Aerodynamics",
    text: "Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.",
  },
  {
    key: 2,
    media: AlternateImage6,
    image: true,
    title: "Refined Styling",
    text: "An iconic silhouette meets refreshed, elegant proportions.",
  },
];

export const VideoWithInfoData = {
  preTitle: "Range",
  title: "Go Anywhere",
  text: "With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.",
  button1: "Order Now",
  button2: "Find My Route",
  videoSrc: GoAnywhere,
  info: [
    {
      p1: "405 mi",
      p2: "Go anywhere with up to 405 miles of estimated range on a single charge",
    },
    {
      p1: "15 min",
      p2: "Recharge up to 200 miles in 15 minutes at Supercharger locations",
    },
    {
      p1: "40,000+",
      p2: "Superchargers placed along popular routes",
    },
  ],
};

export const SelectorWithImage2Data = {
  title: "Freedom to Travel",
  text: "Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.",
  footer: "Learn More button",
  options: [
    {
      key: 0,
      isImage: true,
      imgSrc: SFtoLA,
      title: "San Francisco to Los Angeles",
      text: "",
      info: [
        {
          first: "383 miles",
          second: "",
        },
      ],
    },
    {
      key: 1,
      isImage: true,
      imgSrc: BKtoLT,
      title: "Berkeley to Lake Tahoe",
      text: "",
      info: [
        {
          first: "178 miles",
          second: "",
        },
      ],
    },
    {
      key: 2,
      isImage: true,
      imgSrc: MHtoBT,
      title: "Manhattan to Boston",
      text: "",
      info: [
        {
          first: "211 miles",
          second: "",
        },
      ],
    },
    {
      key: 3,
      isImage: true,
      imgSrc: FLtoOR,
      title: "Fort Lauderdale to Orlando",
      text: "",
      info: [
        {
          first: "195 miles",
          second: "",
        },
      ],
    },
  ],
};

export const ImageWithInfoData = {
  preTitle: "Safety",
  title: "High Impact Protection",
  text: "Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.",
  button1: "Order Now",
  button2: "View Inventory",
  videoSrc: HighProtectionImg,
  info: [],
};

export const ModelSMoreInfo3 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: ModelSMoreInfoImg3,
  info: [],
  moreInfo: {
    text: "Autopilot",
    title: "Future of Driving",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.",
  },
};

export const SelectorWithVideoData = {
  title: "Features",
  text: "Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:",
  footer: "",
  options: [
    {
      key: 0,
      isImage: false,
      imgSrc: NavigateAutopilot,
      title: "Navigate on Autopilot",
      text: "Active guidance from on-ramp to off-ramp",
      info: [],
    },
    {
      key: 1,
      isImage: false,
      imgSrc: AutolaneChange,
      title: "Auto Lane Change",
      text: "Automatically change lanes while driving on the highway",
      info: [],
    },
    {
      key: 2,
      isImage: false,
      imgSrc: Summon,
      title: "Summon",
      text: "Automatically retrieve your car",
      info: [],
    },
    {
      key: 3,
      isImage: false,
      imgSrc: Autopark,
      title: "Autopark",
      text: "Parallel and perpendicular parking with a single touch",
      info: [],
    },
  ],
};
