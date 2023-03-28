import solar_panel_image from "../images/solar-panels.jfif";
import savings from "../video/panel/savings.mp4";
import design from "../images/panel/design.jpg";
import powerwall from "../images/panel/powerwall.jpg";
import power from "../video/panel/power.mp4";
import production from "../images/panel/production.jpg";
import monitor from "../images/panel/monitor.jpg";
import specs from "../images/panel/specs.jpg";

export const SolarPanelData = {
  title: "Solar for Existing Roofs",
  lowerText: "Schedule a Virtual Consultation",
  fullHeigth: true,
  imageSrc: solar_panel_image,
  info: [
    {
      p1: "Power",
      p2: (
        <span>
          Convert Sunligth
          <br />
          to Energy
        </span>
      ),
      button: "",
    },
    {
      p1: "Panel",
      p2: (
        <span>
          Guaranteed Lowest
          <br />
          Price for Solar
        </span>
      ),
      button: "",
    },

    {
      p1: "24/7",
      p2: (
        <span>
          Energy
          <br />
          Monitoring
        </span>
      ),
      button: "",
    },
    {
      p1: "",
      p2: "",
      button: "Order Now",
    },
  ],
};

export const PanelVideoInfo = {
  preTitle: "Savings",
  title: "Electricity For Less",
  text: "Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill.",
  button1: "Order now",
  button2: "See Your Savings",
  videoSrc: savings,
  info: [],
};

export const PanelImageInfo = {
  preTitle: "Design",
  title: "Sleek and Durable",
  text: "Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.",
  button1: "Order now",
  button2: "Learn More",
  videoSrc: design,
  info: [],
};

export const PanelMoreInfo = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: powerwall,
  info: [],
  moreInfo: {
    text: "Powerwall",
    title: "Home Battery Backup",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Your Powerwall can be bundled with solar, allowing you to generate clean energy and store it for use anytime—at night or during an outage.",
  },
};

export const PanelMoreInfo2 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  videoSrc: power,
  info: [],
  moreInfo: {
    text: "Power On",
    title: "Order and Installation",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. Chat with a Tesla Advisor or request a call to learn more.",
  },
};

export const PanelImageInfo2 = {
  preTitle: "Efficiency",
  title: "Maximum Solar Production",
  text: "Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable.",
  button1: "Order now",
  button2: "Learn More",
  videoSrc: production,
  info: [],
};

export const PanelMoreInfo3 = {
  title: "",
  lowerText: "",
  fullHeigth: false,
  imageSrc: monitor,
  info: [],
  moreInfo: {
    text: "Experience",
    title: "24/7 Monitoring",
    orderButton: true,
    viewInventoryButton: true,
    description:
      "Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence.",
  },
};

export const PanelSpecsData = {
  imgSrc: specs,
  titleStrong: "Solar Panel",
  title: "Specs",
  info: [
    [
      {
        p1: "Wattage",
        p2: "400 W",
      },
      {
        p1: "Operating Temperature",
        p2: "-40°F up to +185°F",
      },
      {
        p1: "Dimensions",
        p2: (
          <span>
            74.4" x 41.2" x 1.57"
            <br />
            {`(including frame)`}
          </span>
        ),
      },
      {
        p1: "Design",
        p2: (
          <span>
            Black anodized
            <br />
            aluminum alloy frame
            <br />
            Black solar cells and backsheet
          </span>
        ),
      },
      {
        p1: "Warranty",
        p2: "25-year performance guarantee",
      },
      {
        p1: "Certifications",
        p2: "IEC / UL 61730, CEC Listed, IEC 61215",
      },
      {
        p1: "Inverter Power",
        p2: "3.8kW / 7.6kW 97.5% efficiency",
      },
      {
        p1: "Inverter Dimensions",
        p2: '26" x 16" x 6"',
      },
      {
        p1: "Inverter Warranty",
        p2: "12.5 years ",
      },
    ],
  ],
};
