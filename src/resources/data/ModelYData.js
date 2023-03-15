import model_y_image from "../images/Model-Y-Single-First-View.jfif";
import safety from "../images/modelY/safety.png";
import versatile from "../images/modelY/versatile.jpg";
import space from "../images/modelY/space.jpg";
import dual_motor from "../images/modelY/dual_motor.jpg";
import range from "../video/modelY/range.mp4";
import autopilot from "../images/modelY/autopilot.jpg";
import interior from "../images/modelY/interior.jpg";
import specs from "../images/modelY/specs.jpg";
import lateral from "../images/modelY/lateral.jpg";

export const ModelYData = {
  title: "Model Y",
  lowerText: "Schedule a Demo Drive",
  fullHeigth: true,
  imageSrc: model_y_image,
  info: [
    {
      p1: "76 cu ft",
      p2: "Cargo Space",
      button: "",
    },
    {
      p1: "330 mi",
      p2: "Range (EPA est.)",
      button: "",
    },
    {
      p1: "AWD",
      p2: "Dual Motor",
      button: "",
    },
    {
      p1: "",
      p2: "",
      button: "Order Now",
    },
  ],
};

export const ModelYImageInfo = {
  preTitle: "Safety",
  title: "Designed for Safety",
  text: (
    <span>
      Safety is the most important part of every Tesla. We design our vehicles
      to exceed safety standards.
      <br />
      <br />
      <strong>5-Star Rating</strong> <br />
      Model Y achieved NHTSA 5-star safety ratings in every category and
      subcategory.
      <br />
      <br />
      <strong>Top Safety Pick+</strong> <br />
      Model Y received the IIHS Top Safety Pick+ award, with top ratings in all
      crashworthiness and front crash prevention categories.
    </span>
  ),
  button1: "Order Now",
  button2: "View Inventory",
  videoSrc: safety,
  info: [],
};

export const ModelYMoreInfoSolo = {
  moreInfo: {
    text: "Utility",
    title: "A Place For Everything",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.",
  },
};
export const ModelYImageCarrousel = [
  {
    key: 0,
    src: versatile,
    title: "",
    text: "Versatile seating and storage for cargo and passengers",
  },
  {
    key: 1,
    src: space,
    title: "",
    text: "Room for up to seven with optional third row",
  },
];

export const ModelYMoreInfo = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: dual_motor,
  info: [
    {
      p1: "2",
      p2: "Independent motors digitally control torque to the front and rear wheels",
    },
    {
      p1: "3.5 s",
      p2: "Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds",
    },
    {
      p1: "Weather",
      p2: "Capable in rain, snow, mud and off-road with superior traction control",
    },
  ],
  moreInfo: {
    text: "All-Wheel Drive",
    title: "Dual Motor",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.",
  },
};

export const ModelYVideoInfo = {
  preTitle: "Range",
  title: "Go Anywhere",
  text: "Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 40,000 Superchargers worldwide, with six new locations opening every week. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.",
  button1: "Order Now",
  button2: "View Inventory",
  videoSrc: range,
  info: [
    {
      p1: "330 mi",
      p2: "Go anywhere with up to 330 miles of estimated range on a single charge",
    },
    {
      p1: "15 min",
      p2: "Recharge up to 162 miles in 15 minutes at Supercharger locations",
    },
    {
      p1: "40.000+",
      p2: "Superchargers placed along well-traveled routes around the world",
    },
  ],
};

export const ModelYMoreInfo2 = {
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
      "Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.",
  },
};

export const ModelYMoreInfo3 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: interior,
  info: [
    {
      p1: "15 inch",
      p2: "A touchscreen display designed to improve over time",
    },
    {
      p1: "Update",
      p2: "Over-the-air software updates introduce new features, functionality and performance",
    },
    {
      p1: "Sunroof",
      p2: "An expansive Glass Roof provides more headroom and UV protection",
    },
  ],
  moreInfo: {
    text: "Interior",
    title: "Built Around the Driver",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky.",
  },
};

export const ModelYSpecsData = {
  imgSrc: specs,
  titleStrong: "Model Y",
  title: "Specs",
  button1: "Performance",
  button2: "Long Range AWD",
  info: [
    [
      {
        p1: "Battery",
        p2: "Long Range",
      },
      {
        p1: "Acceleration",
        p2: "3.5 s 0-60 mph",
      },
      {
        p1: "Range",
        p2: "303 miles (EPA est.)",
      },
      {
        p1: "Drive",
        p2: "Dual Motor All-Wheel Drive",
      },
      {
        p1: "Seating",
        p2: "Up to 5",
      },
      {
        p1: "Wheels",
        p2: '21"',
      },

      {
        p1: "Weight",
        p2: "4,398 lbs",
      },
      {
        p1: "Top Speed",
        p2: "155 mph",
      },
      {
        p1: "Displays",
        p2: '15" Center Touchscreen',
      },
      {
        p1: "Supercharging Max",
        p2: "250 kW Max",
      },
      {
        p1: "Warranty",
        p2: "4 years or 50,000 mi, whichever comes first",
      },
    ],
    [
      {
        p1: "Battery",
        p2: "Long Range",
      },
      {
        p1: "Acceleration",
        p2: "4.8 s 0-60 mph",
      },
      {
        p1: "Range",
        p2: "330 miles (EPA est.)",
      },
      {
        p1: "Drive",
        p2: "Dual Motor All-Wheel Drive",
      },
      {
        p1: "Seating",
        p2: "Up to 7",
      },
      {
        p1: "Wheels",
        p2: '19" or 20"',
      },
      {
        p1: "Weight",
        p2: "4,363 lbs",
      },
      {
        p1: "Top Speed",
        p2: "135 mph",
      },
      {
        p1: "Displays",
        p2: '15" Center Touchscreen',
      },
      {
        p1: "Supercharging Max",
        p2: "250 kW Max",
      },
      {
        p1: "Warranty",
        p2: "4 years or 50,000 mi, whichever comes first",
      },
    ],
  ],
};

export const ModelYLateralData = {
  title: "Experience Model Y",
  imgSrc: lateral,
};
