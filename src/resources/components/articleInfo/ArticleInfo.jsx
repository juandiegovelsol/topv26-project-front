import React from "react";
import "./ArticleInfo.scss";
const ArticleInfo = (props) => {
  const { info } = props;

  return (
    <section className="articleInfo">
      {info &&
        info.map((item, index) => {
          return (
            <span className="articleInfoSpan" key={index}>
              {item.p1 && <p className="articleInfoP1">{item.p1}</p>}
              {item.p2 && <p className="articleInfoP2">{item.p2}</p>}
              {item.button && (
                <button className="articleInfoButton">{item.button}</button>
              )}
            </span>
          );
        })}
    </section>
  );
};

export default ArticleInfo;
