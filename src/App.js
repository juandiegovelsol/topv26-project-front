import "./App.css";

import { TeslaArticle } from "./resources/components/TeslaArticle.js";
import { Menu } from "./resources/components/Menu.js";
import { NavBar } from "./resources/components/NavBar.js";

import { teslaArticleData } from "./resources/data/TeslaArticleData.js";

import React, { useState } from "react";

function App() {
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

export default App;
