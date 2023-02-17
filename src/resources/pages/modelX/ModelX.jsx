import React, { useState } from "react";

import { CustomHeader } from "../../components/customHeader";
import { HeaderFederalTaxInfo } from "../../components/headerFederalTaxInfo/HeaderFederalTaxInfo";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { ModelXData } from "../../data/ModelXData";
import "./ModelX.scss";

const ModelX = () => {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="modelX">
      <CustomHeader heightt={false}>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </CustomHeader>
      <main className="modelXMain">
        <SingleItemFirstView ItemFirstData={ModelXData} />
        <ArticleInfo info={ModelXData.info} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
};

export default ModelX;
