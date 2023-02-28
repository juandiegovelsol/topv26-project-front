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

        <VideoWithInfo
          preTitle={VideoWithInfoData.preTitle}
          title={VideoWithInfoData.title}
          text={VideoWithInfoData.text}
          button1={VideoWithInfoData.button1}
          button2={VideoWithInfoData.button2}
          isInverted={false}
        >
          <VideoFullHeigth videoSrc={VideoWithInfoData.videoSrc}>
            <ArticleInfo info={VideoWithInfoData.info} />
          </VideoFullHeigth>
        </VideoWithInfo>

        <SelectorWithImage
          title={SelectorWithImage2Data.title}
          text={SelectorWithImage2Data.text}
          footer={SelectorWithImage2Data.footer}
          options={SelectorWithImage2Data.options}
          isWhite={true}
        />

        <VideoWithInfo
          preTitle={ImageWithInfoData.preTitle}
          title={ImageWithInfoData.title}
          text={ImageWithInfoData.text}
          button1={ImageWithInfoData.button1}
          button2={ImageWithInfoData.button2}
          isInverted={true}
        >
          <ImageFullHeigth imgSrc={ImageWithInfoData.videoSrc} />
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
      </main>
      <footer></footer>
    </div>
  );
};

export default ModelS;
