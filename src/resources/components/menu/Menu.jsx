import React, { useState } from "react";
import { menuData } from "../../data/MenuData";
import "./Menu.scss";

const Menu = (props) => {
  const { menuCoverClasss, setMenuCoverClasss } = props;

  return (
    <section className={menuCoverClasss}>
      <aside
        className="blurredPage"
        onClick={() => {
          setMenuCoverClasss("menuCoverPage displayNone");
        }}
      ></aside>
      <aside className="menuWrapper">
        <button
          className="returnButton"
          onClick={() => setMenuCoverClasss("menuCoverPage displayNone")}
        >
          X
        </button>
        {menuData.map((item, index) => {
          return (
            <button className="menuButton" key={index}>
              {item.text}
            </button>
          );
        })}
      </aside>
    </section>
  );
};

export default Menu;
