import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { Model3Data, Model3Interior } from "../data/Model3Data";
import { ArticleInterior } from "./ArticleInterior";
import "../styles/Model3.css";

export function Model3() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="model3">
      <header className="model3Header">
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="model3Main">
        <SigleItemFirstView ItemFirstData={Model3Data} />
        {/* <ArticleInterior
          h4Text={Model3Interior.title}
          imgSrc={Model3Interior.imgSrc}
        /> */}

        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
