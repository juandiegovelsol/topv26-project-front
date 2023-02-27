import React, { useState } from "react";

import { CustomHeader } from "../../components/customHeader";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { ArticleInterior } from "../../components/articleInterior";
import { VideoCarrousel } from "../../components/videoCarrousel";
import { AlternateImages } from "../../components/alternateImages";
import { SelectorWithImage } from "../../components/SelectorWithImage";
import { MoreInfo } from "../../components/moreInfo";

import {
  ModelSData,
  ModelSInterior,
  VideoArticles,
  AlternateImagesData,
  ModelSMoreInfo,
  SelectorWithImageData,
  ModelSMoreInfo2,
  AlternateImagesData2,
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

        <SingleItemFirstView ItemFirstData={ModelSMoreInfo} />
        <ArticleInfo info={ModelSMoreInfo.info} />
        <MoreInfo moreInfo={ModelSMoreInfo.moreInfo} backgroundBlack={false} />

        <SelectorWithImage
          title={SelectorWithImageData.title}
          text={SelectorWithImageData.text}
          footer={SelectorWithImageData.footer}
          option1={SelectorWithImageData.option1}
          option2={SelectorWithImageData.option2}
        />

        <SingleItemFirstView ItemFirstData={ModelSMoreInfo2} />
        <MoreInfo moreInfo={ModelSMoreInfo2.moreInfo} backgroundBlack={true} />

        <AlternateImages
          alternateImages={AlternateImagesData2}
          inverted={true}
        />
      </main>
      <footer></footer>
    </div>
  );
};

export default ModelS;
