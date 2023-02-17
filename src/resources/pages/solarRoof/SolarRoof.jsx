import React, { useState } from "react";

import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { SolarRoofData } from "../../data/SolarRoofData";

import "./SolarRoof.scss";

const SolarRoof = () => {
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
        <SingleItemFirstView ItemFirstData={SolarRoofData} />
        <ArticleInfo info={SolarRoofData.info} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
};

export default SolarRoof;
