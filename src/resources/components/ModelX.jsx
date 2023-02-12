import React, { useState } from "react";

import { CustomHeader } from "./CustomHeader";
import { HeaderFederalTaxInfo } from "./HeaderFederalTaxInfo";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { ArticleInfo } from "./ArticleInfo";
import { ModelXData } from "../data/ModelXData";
import "../styles/ModelX.css";

export function ModelX() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="modelX">
      <CustomHeader heightt={false}>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </CustomHeader>
      <main className="modelXMain">
        <SigleItemFirstView ItemFirstData={ModelXData} />
        <ArticleInfo info={ModelXData.info} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
