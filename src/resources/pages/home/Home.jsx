import React, { useState } from "react";

import { CustomHeader } from "../../components/customHeader";
import { HeaderFederalTaxInfo } from "../../components/headerFederalTaxInfo";
import { TeslaArticle } from "../../components/teslaArticle";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { teslaArticleData } from "../../data/TeslaArticleData";

import "./Home.scss";

const Home = () => {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  const [isWhite, setIsWhite] = useState(true);
  console.log(isWhite);
  return (
    <div className="App">
      <CustomHeader heightt={true}>
        <HeaderFederalTaxInfo>
          <span className="headerText">
            Until March 2023, certain new Model 3 and Model Y vehicles qualify
            for a $7,500 federal tax credit for eligible buyers. Learn More
          </span>
        </HeaderFederalTaxInfo>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </CustomHeader>
      <main className="mainWrapper">
        <section className="articleContentWrapper">
          {teslaArticleData.map((item) => {
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
};

export default Home;
