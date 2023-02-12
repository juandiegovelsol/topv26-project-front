import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { ArticleInfo } from "./ArticleInfo";
import { SolarPanelData } from "../data/SolarPanelData";
import "../styles/SolarPanel.css";

export function SolarPanel() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="solarPanel">
      <header className="solarPanelHeader">
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="solarPanelMain">
        <SigleItemFirstView ItemFirstData={SolarPanelData} />
        <ArticleInfo info={SolarPanelData.info} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
