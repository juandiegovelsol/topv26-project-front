import React, { useState } from "react";

import {
  ModelYData,
  ModelYImageInfo,
  ModelYMoreInfoSolo,
  ModelYImageCarrousel,
  ModelYMoreInfo,
  ModelYVideoInfo,
  ModelYMoreInfo2,
  ModelYMoreInfo3,
  ModelYSpecsData,
  ModelYLateralData,
} from "../../data/ModelYData";

import "./ModelY.scss";

import { CustomHeader } from "../../components/customHeader";
import { HeaderFederalTaxInfo } from "../../components/headerFederalTaxInfo";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { SingleItemFirstView } from "../../components/singleItemFirstView";
import { ArticleInfo } from "../../components/articleInfo";
import { VideoWithInfo } from "../../components/videoWithInfo";
import { ImageFullHeigth } from "../../components/videoWithInfo/imageFullHeigth";
import { SideInfo } from "../../components/videoWithInfo/SideInfo";
import { MoreInfo } from "../../components/moreInfo";
import { VideoFullHeigth } from "../../components/videoWithInfo/videoFullHeight";
import { SideInfoCompare } from "../../components/videoWithInfo/sideInfoCompare";
import { SideTitleWithButtons } from "../../components/videoWithInfo/SideTitleWithButtons";
import { CustomFooter } from "../../components/CustomFooter";
import VideoCarrousel from "../../components/videoCarrousel/VideoCarrousel";

const ModelY = () => {
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
        <SingleItemFirstView ItemFirstData={ModelYData} />
        <ArticleInfo info={ModelYData.info} heigth={true} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />

        <VideoWithInfo>
          <ImageFullHeigth imgSrc={ModelYImageInfo.videoSrc}>
            <ArticleInfo info={ModelYImageInfo.info} heigth={true} />
          </ImageFullHeigth>
          <SideInfo
            preTitle={ModelYImageInfo.preTitle}
            title={ModelYImageInfo.title}
            text={ModelYImageInfo.text}
            button1={ModelYImageInfo.button1}
            button2={ModelYImageInfo.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        {/* falta el componente de selector de video pero con imagen */}
        <MoreInfo
          moreInfo={ModelYMoreInfoSolo.moreInfo}
          backgroundBlack={false}
        />
        <VideoCarrousel imageArticles={ModelYImageCarrousel} />

        <SingleItemFirstView ItemFirstData={ModelYMoreInfo}>
          <ArticleInfo info={ModelYMoreInfo.info} />
        </SingleItemFirstView>
        <MoreInfo moreInfo={ModelYMoreInfo.moreInfo} backgroundBlack={false} />

        <VideoWithInfo>
          <VideoFullHeigth videoSrc={ModelYVideoInfo.videoSrc}>
            <ArticleInfo info={ModelYVideoInfo.info} heigth={true} />
          </VideoFullHeigth>
          <SideInfo
            preTitle={ModelYVideoInfo.preTitle}
            title={ModelYVideoInfo.title}
            text={ModelYVideoInfo.text}
            button1={ModelYVideoInfo.button1}
            button2={ModelYVideoInfo.button2}
            isWhite={false}
          />
        </VideoWithInfo>

        <SingleItemFirstView ItemFirstData={ModelYMoreInfo2}>
          <ArticleInfo
            info={ModelYMoreInfo2.info}
            textBlack={true}
            isRigth={true}
          />
        </SingleItemFirstView>
        <MoreInfo moreInfo={ModelYMoreInfo2.moreInfo} backgroundBlack={false} />

        <SingleItemFirstView ItemFirstData={ModelYMoreInfo3}>
          <ArticleInfo
            info={ModelYMoreInfo3.info}
            textBlack={false}
            isLeft={true}
          />
        </SingleItemFirstView>
        <MoreInfo moreInfo={ModelYMoreInfo3.moreInfo} backgroundBlack={false} />

        <VideoWithInfo isInverted={false} isBlack={true}>
          <ImageFullHeigth imgSrc={ModelYSpecsData.imgSrc} isHalf={true} />
          <SideInfoCompare
            titleStrong={ModelYSpecsData.titleStrong}
            title={ModelYSpecsData.title}
            button1={ModelYSpecsData.button1}
            button2={ModelYSpecsData.button2}
            info={ModelYSpecsData.info}
          />
        </VideoWithInfo>

        <VideoWithInfo isInverted={true} isBlack={false}>
          <ImageFullHeigth imgSrc={ModelYLateralData.imgSrc} isHalf={true} />
          <SideTitleWithButtons title={ModelYLateralData.title} />
        </VideoWithInfo>

        <CustomFooter />
      </main>
      <footer></footer>
    </div>
  );
};

export default ModelY;
