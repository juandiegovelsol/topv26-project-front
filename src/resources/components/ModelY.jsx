import React, { useState } from "react";

import { CustomHeader } from "./CustomHeader";
import { HeaderFederalTaxInfo } from "./HeaderFederalTaxInfo";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { ArticleInfo } from "./ArticleInfo";
import { ModelYData } from "../data/ModelYData";
import "../styles/ModelY.css";

export function ModelY() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  const [isWhite, setIsWhite] = useState(true);
  return (
    <div className="modelY">
      <CustomHeader heightt={true}>
        <HeaderFederalTaxInfo>
          <span className="headerText">
            Until March 2023, new Model Y vehicles qualify for a $7,500 federal
            tax credit for eligible buyers.
          </span>
        </HeaderFederalTaxInfo>
        <NavBar colorWhitee={isWhite} setMenuCoverClasss={setMenuCoverClass} />
      </CustomHeader>
      <main className="modelYMain">
        <SigleItemFirstView ItemFirstData={ModelYData} />
        <ArticleInfo info={ModelYData.info} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
