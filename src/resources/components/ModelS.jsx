import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { ModelSData, ModelSInterior } from "../data/ModelSData";
import { ArticleInterior } from "./ArticleInterior";
import "../styles/ModelS.css";

export function ModelS() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="modelS">
      <header className="modelSHeader">
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="modelSMain">
        <SigleItemFirstView ItemFirstData={ModelSData} />
        <ArticleInterior
          h4Text={ModelSInterior.title}
          imgSrc={ModelSInterior.imgSrc}
        />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
