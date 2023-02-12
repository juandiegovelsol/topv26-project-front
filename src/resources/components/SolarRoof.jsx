import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { ArticleInfo } from "./ArticleInfo";
import { SolarRoofData } from "../data/SolarRoofData";
import "../styles/SolarRoof.css";

export function SolarRoof() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="solarRoof">
      <header className="solarRoofHeader">
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="solarRoofMain">
        <SigleItemFirstView ItemFirstData={SolarRoofData} />
        <ArticleInfo info={SolarRoofData.info} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
