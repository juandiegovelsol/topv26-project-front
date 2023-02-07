import React, { useState } from "react";
import { menuData } from "../data/MenuData.js";

export function Menu(props) {
  const { menuCoverClasss, setMenuCoverClasss } = props;

  return (
    <section
      className={menuCoverClasss}
      onClick={() => {
        setMenuCoverClasss("menuCoverPage displayNone");
      }}
    >
      <aside className="blurredPage"></aside>
      <aside className="menuWrapper">
        <button
          className="returnButton"
          onClick={() => setMenuCoverClasss("menuCoverPage displayNone")}
        >
          X
        </button>
        {menuData.map((item) => {
          return (
            <button className="menuButton" key={item.text}>
              {item.text}
            </button>
          );
        })}
      </aside>
    </section>
  );
}
