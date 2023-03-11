import model_3_image from "../images/Model-3-Sigle-First-View.jfif";
import model_3_safety from "../images/model3/model3safety.jpg";
import model_3_moreinfo from "../images/model3/Model3moreInfo.jpg";
import model_3_moreinfo2 from "../images/model3/Model3moreInfo2.jpg";
import model_3_image_with_info from "../images/model3/Model3ImageWithInfo.jpg";
import model_3_mini_image from "../images/model3/model-3-range-map.png";

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
    <div>
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
    </div>
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
        <div>
          Quickest acceleration—from zero to 60
          <br />
          mph* in as little as 3.1 seconds
        </div>
      ),
      button: "",
    },
    {
      p1: "162 mph",
      p2: (
        <div>
          Improved handling and aerodynamics
          <br />
          allow for a top speed of 162 mph
        </div>
      ),
      button: "",
    },
    {
      p1: "AWD",
      p2: (
        <div>
          Dual Motor All-Wheel Drive instantly
          <br />
          controls traction and torque, in all weather
          <br />
          conditions
        </div>
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
        <div>
          Independent motors digitally control
          <br />
          torque to the front and rear wheels
        </div>
      ),
      button: "",
    },
    {
      p1: "10 ms",
      p2: (
        <div>
          Dual motors respond to changing
          <br />
          conditions in as little as 10 milliseconds
        </div>
      ),
      button: "",
    },
    {
      p1: "Rain",
      p2: (
        <div>
          Unparalleled traction and control, in all
          <br />
          weather conditions
        </div>
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
        <div>
          Go anywhere with up to 358 mi of
          <br />
          estimated range on a single charge
        </div>
      ),
    },
    {
      p1: "15 min",
      p2: (
        <div>
          Recharge up to 175 mi in 15 minutes at
          <br />
          Supercharger locations
        </div>
      ),
    },
    {
      p1: "40.000+",
      p2: (
        <div>
          Superchargers placed along well-traveled
          <br />
          routes around the world
        </div>
      ),
    },
  ],
};
