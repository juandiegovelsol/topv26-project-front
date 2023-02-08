import "../styles/Home.css";

import { TeslaArticle } from "./TeslaArticle";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";

import { teslaArticleData } from "../data/TeslaArticleData";

import React, { useState } from "react";
export function Home() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );

  return (
    <div className="App">
      <header className="headerWrapper">
        <section className="headerTextWrapper">
          <span className="headerText">
            Until March 2023, certain new Model 3 and Model Y vehicles qualify
            for a $7,500 federal tax credit for eligible buyers. Learn More
          </span>
        </section>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="mainWrapper">
        <section className="articleContentWrapper">
          {teslaArticleData.map((item) => {
            console.log(item.key);
            return (
              <TeslaArticle
                keys={item.key}
                titleText={item.articleTitle}
                additionalText={item.text}
                source={item.source}
                button1={item.button1}
                button2={item.button2}
              />
            );
          })}
        </section>

        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer className="footerWrapper"></footer>
    </div>
  );
}
