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
  const [isWhite, setIsWhite] = useState(true);
  return (
    <div className="solarRoof">
      <header className="solarRoofHeader">
        <NavBar colorWhitee={isWhite} setMenuCoverClasss={setMenuCoverClass} />
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
