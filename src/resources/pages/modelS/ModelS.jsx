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
import { VideoWithInfo } from "../../components/videoWithInfo";
import { VideoFullHeigth } from "../../components/videoWithInfo/videoFullHeight";
import { ImageFullHeigth } from "../../components/videoWithInfo/imageFullHeigth";
import { SideInfo } from "../../components/videoWithInfo/SideInfo";
import { SideInfoCompare } from "../../components/videoWithInfo/sideInfoCompare";
import { SideTitleWithButtons } from "../../components/videoWithInfo/SideTitleWithButtons";
import { CustomFooter } from "../../components/CustomFooter";

import {
  ModelSData,
  ModelSInterior,
  VideoArticles,
  AlternateImagesData,
  ModelSMoreInfo,
  SelectorWithImageData,
  ModelSMoreInfo2,
  AlternateImagesData2,
  VideoWithInfoData,
  SelectorWithImage2Data,
  ImageWithInfoData,
  ModelSMoreInfo3,
  SelectorWithVideoData,
  ModelSSpecsData,
  ModelSLateralData,
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
          options={SelectorWithImageData.options}
          isWhite={false}
        />

        <SingleItemFirstView ItemFirstData={ModelSMoreInfo2} />
        <MoreInfo moreInfo={ModelSMoreInfo2.moreInfo} backgroundBlack={true} />

        <AlternateImages
          alternateImages={AlternateImagesData2}
          inverted={true}
        />

        <VideoWithInfo isInverted={false} isBlack={false}>
          <VideoFullHeigth videoSrc={VideoWithInfoData.videoSrc}>
            <ArticleInfo info={VideoWithInfoData.info} />
          </VideoFullHeigth>
          <SideInfo
            preTitle={VideoWithInfoData.preTitle}
            title={VideoWithInfoData.title}
            text={VideoWithInfoData.text}
            button1={VideoWithInfoData.button1}
            button2={VideoWithInfoData.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SelectorWithImage
          title={SelectorWithImage2Data.title}
          text={SelectorWithImage2Data.text}
          footer={SelectorWithImage2Data.footer}
          options={SelectorWithImage2Data.options}
          isWhite={true}
        />

        <VideoWithInfo isInverted={true}>
          <ImageFullHeigth imgSrc={ImageWithInfoData.videoSrc} />
          <SideInfo
            preTitle={ImageWithInfoData.preTitle}
            title={ImageWithInfoData.title}
            text={ImageWithInfoData.text}
            button1={ImageWithInfoData.button1}
            button2={ImageWithInfoData.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SingleItemFirstView ItemFirstData={ModelSMoreInfo3} />
        <MoreInfo moreInfo={ModelSMoreInfo3.moreInfo} backgroundBlack={false} />

        <SelectorWithImage
          title={SelectorWithVideoData.title}
          text={SelectorWithVideoData.text}
          footer={SelectorWithVideoData.footer}
          options={SelectorWithVideoData.options}
          isWhite={true}
        />

        <VideoWithInfo isInverted={false} isBlack={true}>
          <ImageFullHeigth imgSrc={ModelSSpecsData.imgSrc} isHalf={true} />
          <SideInfoCompare
            titleStrong={ModelSSpecsData.titleStrong}
            title={ModelSSpecsData.title}
            button1={ModelSSpecsData.button1}
            button2={ModelSSpecsData.button2}
            info={ModelSSpecsData.info}
          />
        </VideoWithInfo>

        <VideoWithInfo isInverted={true} isBlack={false}>
          <ImageFullHeigth imgSrc={ModelSLateralData.imgSrc} isHalf={true} />
          <SideTitleWithButtons />
        </VideoWithInfo>
        <CustomFooter />
      </main>
    </div>
  );
};

export default ModelS;
