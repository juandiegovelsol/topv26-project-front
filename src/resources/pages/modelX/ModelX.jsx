import React, { useState } from "react";

import { CustomHeader } from "../../components/customHeader";
import { HeaderFederalTaxInfo } from "../../components/headerFederalTaxInfo/HeaderFederalTaxInfo";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { ArticleInterior } from "../../components/articleInterior";
import { VideoCarrousel } from "../../components/videoCarrousel";
import { AlternateImages } from "../../components/alternateImages";
import { MoreInfo } from "../../components/moreInfo";
import { SelectorWithImage } from "../../components/SelectorWithImage";
import { VideoWithInfo } from "../../components/videoWithInfo";
import { ImageFullHeigth } from "../../components/videoWithInfo/imageFullHeigth";
import { SideInfo } from "../../components/videoWithInfo/SideInfo";
import { SideInfoCompare } from "../../components/videoWithInfo/sideInfoCompare";
import { SideTitleWithButtons } from "../../components/videoWithInfo/SideTitleWithButtons";
import { CustomFooter } from "../../components/CustomFooter";

import {
  ModelXData,
  ModelXInterior,
  ModelXVideoArticles,
  ModelXAlternateImages,
  ModelXMoreInfo,
  ModelXImageSelector,
  ModelXImageInfo,
  ModelXMoreInfo2,
  ModelXAlternateImages2,
  ModelXImageInfo2,
  ModelXImageSelector2,
  ModelXImageInfo3,
  ModelXMoreInfo3,
  ModelXVideoSelector,
  ModelXSpecsData,
  ModelXLateralData,
} from "../../data/ModelXData";
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
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />

        <SingleItemFirstView ItemFirstData={ModelXData} />
        <ArticleInfo info={ModelXData.info} heigth={true} />

        <ArticleInterior
          h4Text={ModelXInterior.title}
          imgSrc={ModelXInterior.imgSrc}
        />

        <VideoCarrousel videoArticles={ModelXVideoArticles} />

        <AlternateImages alternateImages={ModelXAlternateImages} />

        <SingleItemFirstView ItemFirstData={ModelXMoreInfo}>
          <ArticleInfo info={ModelXMoreInfo.info} />
        </SingleItemFirstView>
        <MoreInfo moreInfo={ModelXMoreInfo.moreInfo} backgroundBlack={false} />

        <SelectorWithImage
          title={ModelXImageSelector.title}
          text={ModelXImageSelector.text}
          footer={ModelXImageSelector.footer}
          options={ModelXImageSelector.options}
          isWhite={false}
        />

        <VideoWithInfo isInverted={true}>
          <ImageFullHeigth imgSrc={ModelXImageInfo.videoSrc}>
            <ArticleInfo info={ModelXImageInfo.info} heigth={true} />
          </ImageFullHeigth>
          <SideInfo
            preTitle={ModelXImageInfo.preTitle}
            title={ModelXImageInfo.title}
            text={ModelXImageInfo.text}
            button1={ModelXImageInfo.button1}
            button2={ModelXImageInfo.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SingleItemFirstView ItemFirstData={ModelXMoreInfo2} />
        <MoreInfo moreInfo={ModelXMoreInfo2.moreInfo} backgroundBlack={true} />

        <AlternateImages
          alternateImages={ModelXAlternateImages2}
          inverted={true}
        />

        <VideoWithInfo>
          <ImageFullHeigth imgSrc={ModelXImageInfo2.videoSrc}>
            <ArticleInfo info={ModelXImageInfo2.info} heigth={true} />
          </ImageFullHeigth>
          <SideInfo
            preTitle={ModelXImageInfo2.preTitle}
            title={ModelXImageInfo2.title}
            text={ModelXImageInfo2.text}
            button1={ModelXImageInfo2.button1}
            button2={ModelXImageInfo2.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SelectorWithImage
          title={ModelXImageSelector2.title}
          text={ModelXImageSelector2.text}
          footer={ModelXImageSelector2.footer}
          options={ModelXImageSelector2.options}
          isWhite={false}
        />

        <VideoWithInfo isInverted={true}>
          <ImageFullHeigth imgSrc={ModelXImageInfo3.videoSrc} />
          <SideInfo
            preTitle={ModelXImageInfo3.preTitle}
            title={ModelXImageInfo3.title}
            text={ModelXImageInfo3.text}
            button1={ModelXImageInfo3.button1}
            button2={ModelXImageInfo3.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SingleItemFirstView ItemFirstData={ModelXMoreInfo3}>
          <ArticleInfo
            info={ModelXMoreInfo3.info}
            textBlack={true}
            isRigth={true}
          />
        </SingleItemFirstView>
        <MoreInfo moreInfo={ModelXMoreInfo3.moreInfo} backgroundBlack={false} />

        <SelectorWithImage
          title={ModelXVideoSelector.title}
          text={ModelXVideoSelector.text}
          footer={ModelXVideoSelector.footer}
          options={ModelXVideoSelector.options}
          isWhite={false}
        />

        <VideoWithInfo isInverted={false} isBlack={true}>
          <ImageFullHeigth imgSrc={ModelXSpecsData.imgSrc} isHalf={true} />
          <SideInfoCompare
            titleStrong={ModelXSpecsData.titleStrong}
            title={ModelXSpecsData.title}
            button1={ModelXSpecsData.button1}
            button2={ModelXSpecsData.button2}
            info={ModelXSpecsData.info}
          />
        </VideoWithInfo>

        <VideoWithInfo isInverted={true} isBlack={false}>
          <ImageFullHeigth imgSrc={ModelXLateralData.imgSrc} isHalf={true} />
          <SideTitleWithButtons title={ModelXLateralData.title} />
        </VideoWithInfo>

        <CustomFooter />
      </main>
      <footer></footer>
    </div>
  );
};

export default ModelX;
