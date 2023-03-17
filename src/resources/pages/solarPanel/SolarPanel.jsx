import React, { useState } from "react";
import "./SolarPanel.scss";
import {
  SolarPanelData,
  PanelVideoInfo,
  PanelImageInfo,
  PanelMoreInfo,
  PanelMoreInfo2,
  PanelImageInfo2,
  PanelMoreInfo3,
  PanelSpecsData,
} from "../../data/SolarPanelData";

import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { VideoWithInfo } from "../../components/videoWithInfo";
import { VideoFullHeigth } from "../../components/videoWithInfo/videoFullHeight";
import { SideInfo } from "../../components/videoWithInfo/SideInfo";
import { ImageFullHeigth } from "../../components/videoWithInfo/imageFullHeigth";
import { MoreInfo } from "../../components/moreInfo";
import { SideInfoCompare } from "../../components/videoWithInfo/sideInfoCompare";
import { CustomFooter } from "../../components/CustomFooter";

const SolarPanel = () => {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="solarPanel">
      <header className="solarPanelHeader">
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="solarPanelMain">
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />

        <SingleItemFirstView ItemFirstData={SolarPanelData} />
        <ArticleInfo info={SolarPanelData.info} heigth={true} />

        <VideoWithInfo isInverted={true}>
          <VideoFullHeigth videoSrc={PanelVideoInfo.videoSrc} />
          <SideInfo
            preTitle={PanelVideoInfo.preTitle}
            title={PanelVideoInfo.title}
            text={PanelVideoInfo.text}
            button1={PanelVideoInfo.button1}
            button2={PanelVideoInfo.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <VideoWithInfo>
          <ImageFullHeigth imgSrc={PanelImageInfo.videoSrc} />
          <SideInfo
            preTitle={PanelImageInfo.preTitle}
            title={PanelImageInfo.title}
            text={PanelImageInfo.text}
            button1={PanelImageInfo.button1}
            button2={PanelImageInfo.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SingleItemFirstView ItemFirstData={PanelMoreInfo} />
        <MoreInfo moreInfo={PanelMoreInfo.moreInfo} backgroundBlack={false} />

        <SingleItemFirstView ItemFirstData={PanelMoreInfo2} />
        <MoreInfo moreInfo={PanelMoreInfo2.moreInfo} backgroundBlack={false} />

        <VideoWithInfo isInverted={true}>
          <ImageFullHeigth imgSrc={PanelImageInfo2.videoSrc} />
          <SideInfo
            preTitle={PanelImageInfo2.preTitle}
            title={PanelImageInfo2.title}
            text={PanelImageInfo2.text}
            button1={PanelImageInfo2.button1}
            button2={PanelImageInfo2.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SingleItemFirstView ItemFirstData={PanelMoreInfo3} />
        <MoreInfo moreInfo={PanelMoreInfo3.moreInfo} backgroundBlack={false} />

        <VideoWithInfo isInverted={false} isBlack={true}>
          <ImageFullHeigth imgSrc={PanelSpecsData.imgSrc} isHalf={true} />
          <SideInfoCompare
            titleStrong={PanelSpecsData.titleStrong}
            title={PanelSpecsData.title}
            info={PanelSpecsData.info}
          />
        </VideoWithInfo>
        <CustomFooter isBlack={true} />
      </main>
      <footer></footer>
    </div>
  );
};

export default SolarPanel;
