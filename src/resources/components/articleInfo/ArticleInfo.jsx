import React from "react";
import "./ArticleInfo.css";
const ArticleInfo = (props) => {
  const { info } = props;
  const showOrHide = (ActualClass, content) => {
    if (content === "") {
      return `${ActualClass} hidden`;
    } else {
      return ActualClass;
    }
  };
  return (
    <section className="articleInfo">
      {info.map((item) => {
        return (
          <span className="articleInfoSpan">
            <p className={showOrHide("articleInfoP1", item.p1)}>{item.p1}</p>
            <p className={showOrHide("articleInfoP2", item.p2)}>{item.p2}</p>
            <button className={showOrHide("articleInfoButton", item.button)}>
              {item.button}
            </button>
          </span>
        );
      })}
    </section>
  );
};

export default ArticleInfo;
