import main_image from "../images/Model-X-Single-First-View.jfif";
import interior from "../images/modelX/model-x-interior.jpg";
import cinematic_video from "../video/modelX/cinematic-experience.mp4";
import yoke_video from "../video/modelX/yoke-steering.mp4";
import perfect_video from "../video/modelX/perfect-enviroment.mp4";
import spacious_video from "../video/modelX/spacious-cabin.mp4";
import console_video from "../video/modelX/console-gaming.mp4";
import stay_conected from "../images/modelX/stay-conected.jpg";
import sublime_sound from "../images/modelX/sublime-sound.jpg";
import beyond_ludicrous from "../images/modelX/beyond-ludicrous.jpg";
import model_x from "../images/modelX/model-x.jpg";
import model_x_plaid from "../images/modelX/model-x-plaid.jpg";
import utility from "../images/modelX/utility.jpg";
import exterior from "../images/modelX/exterior.jpg";
import relentless from "../images/modelX/relentless.jpg";
import optimized from "../images/modelX/optimized.jpg";
import refined from "../images/modelX/refined.jpg";
import anywhere from "../images/modelX/anywhere.jpg";
import SJLA from "../images/modelX/SJLA.jpg";
import TCEP from "../images/modelX/TCEP.jpg";
import MHBT from "../images/modelX/MHBT.jpg";
import FLOL from "../images/modelX/FLOL.jpg";
import safety from "../images/modelX/safety.jpg";
import autopilot from "../images/modelX/autopilot.jpg";
import autopilotvid from "../video/modelX/autopilot.mp4";
import autolane from "../video/modelX/autolane.mp4";
import summon from "../video/modelX/summon.mp4";
import autopark from "../video/modelX/autopark.mp4";
import specs from "../images/modelX/specs.jpg";
import lateral from "../images/modelX/lateral.jpg";

export const ModelXData = {
  title: "Model X",
  lowerText: "Plaid",
  fullHeigth: true,
  imageSrc: main_image,
  info: [
    {
      p1: "333 mi",
      p2: "Range (EPA est.)",
      button: "",
    },
    {
      p1: "2.5 s",
      p2: "0-60 mph*",
      button: "",
    },
    {
      p1: "9.9 s",
      p2: "1/4 Mile",
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
export const ModelXInterior = {
  title: "Interior of the future",
  imgSrc: interior,
};
export const ModelXVideoArticles = [
  {
    key: 0,
    video: cinematic_video,
    title: "Cinematic experience",
    text: "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
  },
  {
    key: 1,
    video: yoke_video,
    title: "Yoke Steering",
    text: "A bold new approach to steering offers better feel and an unobstructed view of the road ahead. Tap the brake and Model X automatically selects the correct direction to start your trip.",
  },
  {
    key: 2,
    video: perfect_video,
    title: "Perfect Environment",
    text: "Experience clean and powerful cabin conditioning from hidden vents. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.",
  },
  {
    key: 3,
    video: spacious_video,
    title: "Spacious Cabin",
    text: "Model X offers a spacious cabin with the world's largest panoramic windshield and seating for up to seven.",
  },
  {
    key: 4,
    video: console_video,
    title: "Console-Grade Gaming",
    text: "Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.",
  },
];

export const ModelXAlternateImages = [
  {
    key: 0,
    media: stay_conected,
    image: true,
    title: "Stay Connected",
    text: "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
  },
  {
    key: 1,
    media: sublime_sound,
    image: true,
    title: "Sublime Sound",
    text: "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.",
  },
];

export const ModelXMoreInfo = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: beyond_ludicrous,
  info: [
    {
      p1: "1020 hp",
      p2: "Peak Power",
    },
    {
      p1: "9.9 s",
      p2: "1/4 Mile",
    },
    {
      p1: "2.5 s",
      p2: "0-60 mph*",
    },
  ],
  moreInfo: {
    text: "Plaid",
    title: "Beyond Ludicrous",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today.",
  },
};

export const ModelXImageSelector = {
  title: "Electric Powertrain",
  text: "Model X platforms unite powertrain and battery technologies for an unrivaled combination of performance, range and efficiency. New module and pack thermal architecture allows for faster charging and gives you more power and endurance in all conditions.",
  footer: "* With rollout subtracted",
  options: [
    {
      key: 0,
      isImage: true,
      imgSrc: model_x,
      title: "Model X",
      text: "Dual Motor All-Wheel Drive platform has the longest range, and now delivers insane power and acceleration.",
      info: [
        {
          first: "3.8 s",
          second: "0-60 mph",
        },
        {
          first: "348 mi",
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
      imgSrc: model_x_plaid,
      title: "Model X Plaid",
      text: "Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with carbon-sleeved rotor that maintains 1,000+ horsepower all the way to top speed.",
      info: [
        {
          first: "2.5 s*",
          second: "0-60 mph",
        },
        {
          first: "333 mi",
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

export const ModelXImageInfo = {
  preTitle: "Utility",
  title: "Even More Capable",
  text: "With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go.",
  button1: "Order Now",
  button2: "View Inventory",
  videoSrc: utility,
  info: [
    {
      p1: "92 ft³",
      p2: "Up to 92 ft³ of storage",
    },
    {
      p1: "5,000 lbs",
      p2: "Tow up to 5,000 lbs",
    },
    {
      p1: "Doors",
      p2: "Falcon Wing Doors",
    },
  ],
};

export const ModelXMoreInfo2 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: exterior,
  info: [],
  moreInfo: {
    text: "Exterior",
    title: "Designed for Efficiency",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.",
  },
};

export const ModelXAlternateImages2 = [
  {
    key: 0,
    media: relentless,
    image: true,
    title: "Relentless Performance",
    text: "Performance wheels and tires keep the SUV planted, transferring even more power down to the road.",
  },
  {
    key: 1,
    media: optimized,
    image: true,
    title: "Optimized Aerodynamics",
    text: "Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.",
  },
  {
    key: 2,
    media: refined,
    image: true,
    title: "Refined Styling",
    text: "Exterior design combines an iconic look with elegant details.",
  },
];

export const ModelXImageInfo2 = {
  preTitle: "Range",
  title: "Go Anywhere",
  text: "With up to 348 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today.",
  button1: "Order Now",
  button2: "Find My Route",
  videoSrc: anywhere,
  info: [
    {
      p1: "348 mi",
      p2: "Go anywhere with up to 348 miles of estimated range on a single charge",
    },
    {
      p1: "15 min",
      p2: "Recharge up to 175 miles in 15 minutes with the latest Supercharger technology",
    },
    {
      p1: "40.000+",
      p2: "Superchargers placed along popular routes",
    },
  ],
};

export const ModelXImageSelector2 = {
  title: "Freedom to Travel",
  text: "Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.",
  footer: "",
  options: [
    {
      key: 0,
      isImage: true,
      imgSrc: SJLA,
      title: "San Jose to Los Angeles",
      text: "",
      info: [
        {
          first: "340 miles",
          second: "",
        },
      ],
    },
    {
      key: 1,
      isImage: true,
      imgSrc: TCEP,
      title: "Tucson to El Paso",
      text: "",
      info: [
        {
          first: "321 miles",
          second: "",
        },
      ],
    },
    {
      key: 2,
      isImage: true,
      imgSrc: MHBT,
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
      imgSrc: FLOL,
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

export const ModelXImageInfo3 = {
  preTitle: "Safety",
  title: "Built for Safety",
  text: "Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack that enable exceptional occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.",
  button1: "Order Now",
  button2: "Learn More",
  videoSrc: safety,
  info: [],
};

export const ModelXMoreInfo3 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: autopilot,
  info: [
    {
      p1: "360°",
      p2: "Rear, side and forward-facing cameras provide maximum visibility",
    },
    {
      p1: "250 m",
      p2: "Powerful visual processing at up to 250 meters of range",
    },
    {
      p1: "360°",
      p2: "Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking",
    },
  ],
  moreInfo: {
    text: "Autopilot",
    title: "Future of Driving",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today.",
  },
};

export const ModelXVideoSelector = {
  title: "Features",
  text: "Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:",
  footer: "",
  options: [
    {
      key: 0,
      isImage: false,
      imgSrc: autopilotvid,
      title: "Navigate on Autopilot",
      text: "Active guidance from on-ramp to off-ramp",
      info: [],
    },
    {
      key: 1,
      isImage: false,
      imgSrc: autolane,
      title: "Auto Lane Change",
      text: "Automatically change lanes while driving on the highway",
      info: [],
    },
    {
      key: 2,
      isImage: false,
      imgSrc: summon,
      title: "Summon",
      text: "Automatically retrieve your car",
      info: [],
    },
    {
      key: 3,
      isImage: false,
      imgSrc: autopark,
      title: "Autopark",
      text: "Parallel and perpendicular parking with a single touch",
      info: [],
    },
  ],
};

export const ModelXSpecsData = {
  imgSrc: specs,
  titleStrong: "Model X",
  title: "Specs",
  button1: "Model X Plaid",
  button2: "Model X",
  info: [
    [
      {
        p1: "Range (EPA est.)",
        p2: "333 mi",
      },
      {
        p1: "1/4 Mile",
        p2: "9.9 s",
      },
      {
        p1: "Peak Power",
        p2: "1,020 hp",
      },
      {
        p1: "Wheels",
        p2: '20" or 22"',
      },
      {
        p1: "Towing",
        p2: "5,000 lbs",
      },
      {
        p1: "Seating",
        p2: "Up to 6",
      },
      {
        p1: "Top Speed",
        p2: "163 mph",
      },
      {
        p1: "Drag Coefficient",
        p2: "0.24 Cd",
      },
      {
        p1: "Weight",
        p2: "5,390 lbs",
      },
      {
        p1: "Powertrain",
        p2: "Tri Motor",
      },
      {
        p1: "Supercharging Max",
        p2: "250 kW Max",
      },
    ],
    [
      {
        p1: "Range (EPA est.)",
        p2: "348 mi",
      },
      {
        p1: "Peak Power",
        p2: "670 hp",
      },
      {
        p1: "Wheels",
        p2: '20" or 22"',
      },
      {
        p1: "Towing",
        p2: "5,000 lbs",
      },
      {
        p1: "Seating",
        p2: "Up to 7",
      },
      {
        p1: "Top Speed",
        p2: "155 mph",
      },
      {
        p1: "Drag Coefficient",
        p2: "0.24 Cd",
      },
      {
        p1: "Weight",
        p2: "5,185 lbs",
      },
      {
        p1: "Powertrain",
        p2: "Dual Motor",
      },
      {
        p1: "Supercharging Max",
        p2: "250 kW Max",
      },
    ],
  ],
};

export const ModelXLateralData = {
  title: "Experience Model X",
  imgSrc: lateral,
};
