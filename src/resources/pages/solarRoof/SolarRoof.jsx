import React, { useState } from "react";
import "./SolarRoof.scss";
import {
  SolarRoofData,
  RoofMoreInfo,
  RoofImageInfo,
  RoofVideoInfo,
  RoofVideoSelector,
  RoofImageInfo2,
  RoofMoreInfo2,
  RoofSpecsData,
} from "../../data/SolarRoofData";

import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { MoreInfo } from "../../components/moreInfo";
import { VideoWithInfo } from "../../components/videoWithInfo";
import { ImageFullHeigth } from "../../components/videoWithInfo/imageFullHeigth";
import { SideInfo } from "../../components/videoWithInfo/SideInfo";
import { VideoFullHeigth } from "../../components/videoWithInfo/videoFullHeight";
import { SelectorWithImage } from "../../components/SelectorWithImage";
import { SideInfoCompare } from "../../components/videoWithInfo/sideInfoCompare";
import { CustomFooter } from "../../components/CustomFooter";

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
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
        <SingleItemFirstView ItemFirstData={SolarRoofData} />
        <ArticleInfo info={SolarRoofData.info} heigth={true} />

        <SingleItemFirstView ItemFirstData={RoofMoreInfo}>
          <ArticleInfo info={RoofMoreInfo.info} />
        </SingleItemFirstView>
        <MoreInfo moreInfo={RoofMoreInfo.moreInfo} backgroundBlack={false} />

        <VideoWithInfo isInverted={true}>
          <ImageFullHeigth imgSrc={RoofImageInfo.videoSrc}>
            <ArticleInfo info={RoofImageInfo.info} heigth={true} />
          </ImageFullHeigth>
          <SideInfo
            preTitle={RoofImageInfo.preTitle}
            title={RoofImageInfo.title}
            text={RoofImageInfo.text}
            button1={RoofImageInfo.button1}
            button2={RoofImageInfo.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <VideoWithInfo>
          <VideoFullHeigth videoSrc={RoofVideoInfo.videoSrc}>
            <ArticleInfo info={RoofVideoInfo.info} heigth={true} />
          </VideoFullHeigth>
          <SideInfo
            preTitle={RoofVideoInfo.preTitle}
            title={RoofVideoInfo.title}
            text={RoofVideoInfo.text}
            button1={RoofVideoInfo.button1}
            button2={RoofVideoInfo.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SelectorWithImage options={RoofVideoSelector.options} isWhite={false}>
          <MoreInfo
            moreInfo={RoofVideoSelector.moreInfo}
            backgroundBlack={false}
          />
        </SelectorWithImage>

        <VideoWithInfo isInverted={true}>
          <ImageFullHeigth imgSrc={RoofImageInfo2.videoSrc}>
            <ArticleInfo info={RoofImageInfo2.info} heigth={true} />
          </ImageFullHeigth>
          <SideInfo
            preTitle={RoofImageInfo2.preTitle}
            title={RoofImageInfo2.title}
            text={RoofImageInfo2.text}
            button1={RoofImageInfo2.button1}
            button2={RoofImageInfo2.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SingleItemFirstView ItemFirstData={RoofMoreInfo2}>
          <ArticleInfo info={RoofMoreInfo2.info} />
        </SingleItemFirstView>
        <MoreInfo moreInfo={RoofMoreInfo2.moreInfo} backgroundBlack={false} />

        <VideoWithInfo isInverted={false} isBlack={true}>
          <ImageFullHeigth imgSrc={RoofSpecsData.imgSrc} isHalf={true} />
          <SideInfoCompare
            titleStrong={RoofSpecsData.titleStrong}
            title={RoofSpecsData.title}
            info={RoofSpecsData.info}
          />
        </VideoWithInfo>
        <CustomFooter isBlack={true} />
      </main>
      <footer></footer>
    </div>
  );
};

export default SolarRoof;
