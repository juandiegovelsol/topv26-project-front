import React, { useState } from "react";

import { CustomHeader } from "../../components/customHeader";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { ArticleInterior } from "../../components/articleInterior";
import { VideoCarrousel } from "../../components/videoCarrousel";
import { AlternateImages } from "../../components/alternateImages";

import {
  ModelSData,
  ModelSInterior,
  VideoArticles,
  AlternateImagesData,
} from "../../data/ModelSData";
import "./ModelS.scss";

const ModelS = () => {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="modelS">
      <CustomHeader heightt={false}>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </CustomHeader>
      <main className="modelSMain">
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
        <SingleItemFirstView ItemFirstData={ModelSData} />
        <ArticleInfo info={ModelSData.info} />
        <ArticleInterior
          h4Text={ModelSInterior.title}
          imgSrc={ModelSInterior.imgSrc}
        />
        <VideoCarrousel videoArticles={VideoArticles} />
        <AlternateImages alternateImages={AlternateImagesData} />
      </main>
      <footer></footer>
    </div>
  );
};

export default ModelS;
