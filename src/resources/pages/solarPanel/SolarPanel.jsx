import React, { useState } from "react";

import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { SolarPanelData } from "../../data/SolarPanelData";

import "./SolarPanel.css";

const SolarPanel = () => {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="solarPanel">
      <header className="solarPanelHeader">
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="solarPanelMain">
        <SingleItemFirstView ItemFirstData={SolarPanelData} />
        <ArticleInfo info={SolarPanelData.info} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
};

export default SolarPanel;
