import model_3_image from "../images/Model-3-Sigle-First-View.jfif";
import model_3_safety from "../images/model3/model3safety.jpg";
import model_3_moreinfo from "../images/model3/Model3moreInfo.jpg";
import model_3_moreinfo2 from "../images/model3/Model3moreInfo2.jpg";
import model_3_image_with_info from "../images/model3/Model3ImageWithInfo.jpg";
import model_3_mini_image from "../images/model3/model-3-range-map.png";
import model3_autopilot from "../images/model-s-more-info3.jfif";
import model3_interior from "../images/model3/Model3Interior.jpg";
import model3_specs from "../images/model3/Model3Specs.jpg";
import model3_lateral from "../images/model3/Model3lateral.jpg";

export const Model3Data = {
  title: "Model 3",
  lowerText: "Schedule a Demo Drive",
  fullHeigth: true,
  imageSrc: model_3_image,
  info: [
    {
      p1: "3.1 s",
      p2: "0-60 mph*",
      button: "",
    },
    {
      p1: "358 mi",
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

export const ImageWithInfoData = {
  preTitle: "Safety",
  title: "Built for Safety",
  text: (
    <span>
      Safety is the most important part of every Tesla. We design our vehicles
      to exceed safety standards.
      <br />
      <br />
      <strong>5-Star Rating</strong> <br />
      Model 3 achieved NHTSA 5-star safety ratings in every category and
      subcategory.
      <br />
      <br />
      <strong>Top Safety Pick+</strong> <br />
      Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all
      crashworthiness and front crash prevention categories.
    </span>
  ),
  button1: "Order Now",
  button2: "View Inventory",
  videoSrc: model_3_safety,
  info: [],
};

export const Model3MoreInfo = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: model_3_moreinfo,
  info: [
    {
      p1: "3.1 s",
      p2: (
        <span>
          Quickest acceleration—from zero to 60
          <br />
          mph* in as little as 3.1 seconds
        </span>
      ),
      button: "",
    },
    {
      p1: "162 mph",
      p2: (
        <span>
          Improved handling and aerodynamics
          <br />
          allow for a top speed of 162 mph
        </span>
      ),
      button: "",
    },
    {
      p1: "AWD",
      p2: (
        <span>
          Dual Motor All-Wheel Drive instantly
          <br />
          controls traction and torque, in all weather
          <br />
          conditions
        </span>
      ),
      button: "",
    },
  ],
  moreInfo: {
    text: "Performance",
    title: "Quickest Acceleration",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today.",
  },
};
export const Model3MoreInfo2 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: model_3_moreinfo2,
  info: [
    {
      p1: "2",
      p2: (
        <span>
          Independent motors digitally control
          <br />
          torque to the front and rear wheels
        </span>
      ),
      button: "",
    },
    {
      p1: "10 ms",
      p2: (
        <span>
          Dual motors respond to changing
          <br />
          conditions in as little as 10 milliseconds
        </span>
      ),
      button: "",
    },
    {
      p1: "Rain",
      p2: (
        <span>
          Unparalleled traction and control, in all
          <br />
          weather conditions
        </span>
      ),
      button: "",
    },
  ],
  moreInfo: {
    text: "Performance",
    title: "Quickest Acceleration",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today.",
  },
};
export const ImageWithInfoData2 = {
  preTitle: "Range",
  title: "Go Anywhere",
  text: "Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 40,000 Superchargers worldwide, with six new locations opening every week. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today.",
  button1: "Order Now",
  button2: "Learn More",
  mini_image: model_3_mini_image,
  videoSrc: model_3_image_with_info,
  info: [
    {
      p1: "358 mi",
      p2: (
        <span>
          Go anywhere with up to 358 mi of
          <br />
          estimated range on a single charge
        </span>
      ),
    },
    {
      p1: "15 min",
      p2: (
        <span>
          Recharge up to 175 mi in 15 minutes at
          <br />
          Supercharger locations
        </span>
      ),
    },
    {
      p1: "40.000+",
      p2: (
        <span>
          Superchargers placed along well-traveled
          <br />
          routes around the world
        </span>
      ),
    },
  ],
};
export const Model3MoreInfo3 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: model3_autopilot,
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
      "Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today.",
  },
};
export const Model3MoreInfo4 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: model3_interior,
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
    title: "Built around the driver",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.",
  },
};
export const Model3SpecsData = {
  imgSrc: model3_specs,
  titleStrong: "Model 3",
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
        p1: "*Acceletation",
        p2: "3.1 s 0-60 mph with rollout subtracted",
      },
      {
        p1: "Range",
        p2: "315 miles (EPA est.)",
      },
      {
        p1: "Drive",
        p2: "Dual Motor All-Wheel Drive",
      },
      {
        p1: "Seating",
        p2: "5 Adults",
      },
      {
        p1: "Wheels",
        p2: '20"',
      },
      {
        p1: "Weight",
        p2: "4,048 lbs",
      },
      {
        p1: "Cargo",
        p2: "23 cu ft",
      },
      {
        p1: "Displays",
        p2: '15" Center Touchscreen',
      },
      {
        p1: "Supercharging Max/Payment Type",
        p2: "250 kW Max; Pay Per Use",
      },
    ],
    [
      {
        p1: "Battery",
        p2: "Long Range",
      },
      {
        p1: "Acceletation",
        p2: "4.2 s 0-60 mph",
      },
      {
        p1: "Range",
        p2: "358 miles (EPA est.)",
      },
      {
        p1: "Drive",
        p2: "Dual Motor All-Wheel Drive",
      },
      {
        p1: "Seating",
        p2: "5 Adults",
      },
      {
        p1: "Wheels",
        p2: '18" or 19"',
      },
      {
        p1: "Weight",
        p2: "4,034 lbs",
      },
      {
        p1: "Cargo",
        p2: "23 cu ft",
      },
      {
        p1: "Displays",
        p2: '15" Center Touchscreen',
      },
      {
        p1: "Supercharging Max/Payment Type",
        p2: "250 kW Max; Pay Per Use",
      },
      {
        p1: "Onboard Charger Max",
        p2: "11.5 kW max (48A)",
      },
    ],
  ],
};

export const Model3LateralData = {
  title: "Experience Model 3",
  text: "Leasing starting at $349/mo",
  imgSrc: model3_lateral,
};
