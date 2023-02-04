import React, { useState } from "react";
const menuData = [
  {
    key: 0,
    text: "Existing Inventory",
    link: "",
  },
  {
    key: 1,
    text: "Used Inventory",
    link: "",
  },
  {
    key: 2,
    text: "Trade-In",
    link: "",
  },
  {
    key: 3,
    text: "Demo Drive",
    link: "",
  },
  {
    key: 4,
    text: "Insurance",
    link: "",
  },
  {
    key: 5,
    text: "Cibertruck",
    link: "",
  },
  {
    key: 6,
    text: "Roadster",
    link: "",
  },
  {
    key: 7,
    text: "Existing Inventory",
    link: "",
  },
  {
    key: 8,
    text: "Semi",
    link: "",
  },
  {
    key: 9,
    text: "Charging",
    link: "",
  },
  {
    key: 10,
    text: "Powerwall",
    link: "",
  },
  {
    key: 11,
    text: "Commercial Energy",
    link: "",
  },
  {
    key: 12,
    text: "Utilities",
    link: "",
  },
  {
    key: 13,
    text: "Find Us",
    link: "",
  },
  {
    key: 14,
    text: "Support",
    link: "",
  },
  {
    key: 15,
    text: "Investor Relations",
    link: "",
  },
  {
    key: 6,
    text: "United States       English" /* Falta modificar*/,
    link: "",
  },
];

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
