import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleInfo.scss";
const ArticleInfo = ({
  info,
  isRigth = false,
  isLeft = false,
  heigth = false,
  textBlack = false,
  handleOrder = () => {},
}) => {
  const navigate = useNavigate();
  /* const redirect = (route) => {
    navigate(`${route}`);
  }; */

  const handleClass = (isRigth, isLeft, heigth, classname) => {
    const heigthReturn = heigth ? "heigth" : "";
    if (isRigth) {
      return `${classname} rigth ${heigthReturn}`;
    } else if (isLeft) {
      return `${classname} left ${heigthReturn}`;
    } else {
      return `${classname} ${heigthReturn}`;
    }
  };
  const handleColor = (textBlack, classname) => {
    return textBlack ? `${classname} black` : `${classname}`;
  };

  return (
    <section className={handleClass(isRigth, isLeft, heigth, "articleInfo")}>
      {info &&
        info.map((item, index) => {
          return (
            <span
              className={handleColor(textBlack, "articleInfo__Span")}
              key={index}
            >
              {item.p1 && <p className="articleInfoP1">{item.p1}</p>}
              {item.p2 && <p className="articleInfoP2">{item.p2}</p>}
              {item.button && (
                <button className="articleInfoButton" onClick={handleOrder}>
                  {item.button}
                </button>
              )}
            </span>
          );
        })}
    </section>
  );
};

export default ArticleInfo;
