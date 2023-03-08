import React from "react";
import "./ArticleInfo.scss";
const ArticleInfo = (props) => {
  const { info } = props;

  return (
    <section className="articleInfo">
      {info &&
        info.map((item) => {
          return (
            <span className="articleInfoSpan">
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
