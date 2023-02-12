import React, { useState } from "react";

import { CustomHeader } from "./CustomHeader";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { ArticleInfo } from "./ArticleInfo";
import { ModelSData, ModelSInterior } from "../data/ModelSData";
import { ArticleInterior } from "./ArticleInterior";

import "../styles/ModelS.css";

export function ModelS() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="modelS">
      <CustomHeader heightt={false}>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </CustomHeader>
      <main className="modelSMain">
        <SigleItemFirstView ItemFirstData={ModelSData} />
        <ArticleInfo info={ModelSData.info} />
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
