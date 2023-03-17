import solar_roof_image from "../images/Solar-Roof-Single-First-View.webp";
import design from "../images/roof/design.webp";
import protection from "../images/roof/protection.webp";
import durability from "../video/roof/durability.mp4";
import design_vid from "../video/roof/design_vid.mp4";
import instalation from "../video/roof/instalation.mp4";
import power from "../video/roof/power.mp4";
import efficiency from "../images/roof/efficiency.jpg";
import control from "../images/roof/control.jpg";
import specs from "../images/roof/specs.png";

export const SolarRoofData = {
  title: "Solar for Existing Roofs",
  lowerText: "Schedule a Virtual Consultation",
  fullHeigth: true,
  imageSrc: solar_roof_image,
  info: [
    {
      p1: "Beautiful",
      p2: "Solar",
      button: "",
    },
    {
      p1: "Tile",
      p2: "Warranty",
      button: "",
    },

    {
      p1: "Outage",
      p2: "Protection",
      button: "",
    },
    {
      p1: "",
      p2: "",
      button: "Order Now",
    },
  ],
};

export const RoofMoreInfo = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: design,
  info: [],
  moreInfo: {
    text: "All-Wheel Drive",
    title: "Complement Aesthetics",
    orderButton: true,
    viewInventoryButton: false,
    description:
      "Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling.",
  },
};

export const RoofImageInfo = {
  preTitle: "Energy Storage",
  title: "Protection Against Outages",
  text: "Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.",
  button1: "Order Now",
  button2: "Learn More",
  videoSrc: protection,
  info: [],
};

export const RoofVideoInfo = {
  preTitle: "Durability",
  title: "Take on the Elements",
  text: "Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof. Both are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof will continue to produce clean energy and protect your home for decades to come.",
  button1: "Order Now",
  button2: "Learn More",
  videoSrc: durability,
  info: [],
};

export const RoofVideoSelector = {
  title: "Features",
  text: "Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:",
  footer: "",
  options: [
    {
      key: 0,
      isImage: false,
      imgSrc: design_vid,
      title: "Design",
      text: "Aerial imagery and 3D modeling determine your custom design",
      info: [],
    },
    {
      key: 1,
      isImage: false,
      imgSrc: instalation,
      title: "Installation",
      text: "Our integrated design enables quick tile and Powerwall installation",
      info: [],
    },
    {
      key: 2,
      isImage: false,
      imgSrc: power,
      title: "Power On",
      text: "Final cleanup is compleated before system activation",
      info: [],
    },
  ],
  moreInfo: {
    text: "Installation",
    title: "Trusted Expertise",
    orderButton: true,
    viewInventoryButton: false,
    description:
      "Our in-house team of energy professionals has installed nearly 4.0 GW of solar across approximately 480,000 roofs—cumulatively generating over 25.0 TWhs of clean energy. From design to power on, we take care of everything. Chat with a Tesla Advisor to ask any questions about Solar Roof.",
  },
};

export const RoofImageInfo2 = {
  preTitle: "Efficiency",
  title: "Maximum Solar Production",
  text: "Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful. With Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. And built-in connectivity ensures Tesla Solar Inverter continues to improve with each over-the-air software update.",
  button1: "Order Now",
  button2: "Learn More",
  videoSrc: efficiency,
  info: [],
};

export const RoofMoreInfo2 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: control,
  info: [],
  moreInfo: {
    text: "Control",
    title: "Monitor and Optimize",
    orderButton: true,
    viewInventoryButton: false,
    description:
      "With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.",
  },
};

export const RoofSpecsData = {
  imgSrc: specs,
  titleStrong: "Solar Roof",
  title: "Specs",
  info: [
    [
      {
        p1: "Tile and Power Warranty",
        p2: "25 years",
      },
      {
        p1: "Solar Glass Tiles",
        p2: "72 W",
      },
      {
        p1: "Steel Tiles",
        p2: "Corrosion and weather resistant",
      },
      {
        p1: "Wind Rating",
        p2: "Class F (highest rating)",
      },
      {
        p1: "Fire Rating",
        p2: "Class A (highest rating)",
      },
      {
        p1: "Hail Rating",
        p2: "Class 3",
      },
      {
        p1: "Roof Pitch",
        p2: "≥ 2:12",
      },
    ],
  ],
};
