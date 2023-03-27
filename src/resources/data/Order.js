import model_s_white from "../images/order/modelSwhite.jpg";
import model_s_black from "../images/order/modelSblack.jpg";
import model_s_grey from "../images/order/modelSgrey.jpg";
import model_s_blue from "../images/order/modelSblue.jpg";
import model_s_red from "../images/order/modelSred.jpg";

export const modelS = {
  images: [
    {
      img: model_s_white,
      aditional_price: 0,
      title: (
        <>
          <strong>Pearl White Multi Coat</strong> included
        </>
      ),
    },
    {
      img: model_s_black,
      aditional_price: 1500,
      title: (
        <>
          <strong>Solid Black</strong> $1,500
        </>
      ),
    },
    {
      img: model_s_grey,
      aditional_price: 1500,
      title: (
        <>
          <strong>Midnight Silver Metallic</strong> $1,500
        </>
      ),
    },
    {
      img: model_s_blue,
      aditional_price: 1500,
      title: (
        <>
          <strong>Deep Blue Metallic</strong> $1,500
        </>
      ),
    },
    {
      img: model_s_red,
      aditional_price: 3000,
      title: (
        <>
          <strong>Ultra Red</strong> $3,000
        </>
      ),
    },
  ],
  models: {
    title: "Model S",
    price: 89990,
    range: 405,
    speed: 149,
    time: 3.1,
  },
  modelsplaid: {
    title: "Model S Plaid",
    price: 109990,
    range: 396,
    speed: 200,
    time: 1.99,
  },
};
