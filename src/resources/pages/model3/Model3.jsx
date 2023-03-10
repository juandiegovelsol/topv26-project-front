import React, { useState } from "react";

import { CustomHeader } from "../../components/customHeader";
import { HeaderFederalTaxInfo } from "../../components/headerFederalTaxInfo";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { VideoWithInfo } from "../../components/videoWithInfo";
import { ImageFullHeigth } from "../../components/videoWithInfo/imageFullHeigth";
import { SideInfo } from "../../components/videoWithInfo/SideInfo";

import { Model3Data, ImageWithInfoDataM3 } from "../../data/Model3Data";
import "./Model3.scss";

const Model3 = () => {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  const [isWhite, setIsWhite] = useState(true);
  return (
    <div className="model3">
      <CustomHeader heightt={true}>
        <HeaderFederalTaxInfo>
          <span className="headerText">
            Until March 2023, new Model 3 vehicles qualify for a $7,500 federal
            tax credit for eligible buyers.
          </span>
        </HeaderFederalTaxInfo>
        <NavBar colorWhitee={isWhite} setMenuCoverClasss={setMenuCoverClass} />
      </CustomHeader>
      <main className="model3Main">
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
        <SingleItemFirstView ItemFirstData={Model3Data} />

        <ArticleInfo info={Model3Data.info} />

        <VideoWithInfo isInverted={false}>
          <ImageFullHeigth imgSrc={ImageWithInfoDataM3.videoSrc} />
          <SideInfo
            preTitle={ImageWithInfoDataM3.preTitle}
            title={ImageWithInfoDataM3.title}
            text={ImageWithInfoDataM3.text}
            button1={ImageWithInfoDataM3.button1}
            button2={ImageWithInfoDataM3.button2}
            isWhite={false}
          />
        </VideoWithInfo>
      </main>
      <footer></footer>
    </div>
  );
};

export default Model3;
