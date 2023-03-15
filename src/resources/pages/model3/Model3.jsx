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
import { MoreInfo } from "../../components/moreInfo";
import { SideInfoCompare } from "../../components/videoWithInfo/sideInfoCompare";

import {
  Model3Data,
  ImageWithInfoData,
  Model3MoreInfo,
  Model3MoreInfo2,
  ImageWithInfoData2,
  Model3MoreInfo3,
  Model3MoreInfo4,
  Model3SpecsData,
  Model3LateralData,
} from "../../data/Model3Data";

import "./Model3.scss";
import { SideTitleWithButtons } from "../../components/videoWithInfo/SideTitleWithButtons";
import { CustomFooter } from "../../components/CustomFooter";

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
        <SingleItemFirstView ItemFirstData={Model3Data}>
          <ArticleInfo info={Model3Data.info} />
        </SingleItemFirstView>

        <VideoWithInfo isInverted={false}>
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

        <SingleItemFirstView ItemFirstData={Model3MoreInfo}>
          <ArticleInfo info={Model3MoreInfo.info} />
        </SingleItemFirstView>
        <MoreInfo moreInfo={Model3MoreInfo.moreInfo} backgroundBlack={false} />

        <SingleItemFirstView ItemFirstData={Model3MoreInfo2}>
          <ArticleInfo info={Model3MoreInfo2.info} />
        </SingleItemFirstView>
        <MoreInfo moreInfo={Model3MoreInfo2.moreInfo} backgroundBlack={false} />

        <VideoWithInfo isInverted={false}>
          <ImageFullHeigth imgSrc={ImageWithInfoData2.videoSrc}>
            <ArticleInfo info={ImageWithInfoData2.info} heigth={true} />
          </ImageFullHeigth>
          <SideInfo
            preTitle={ImageWithInfoData2.preTitle}
            title={ImageWithInfoData2.title}
            text={ImageWithInfoData2.text}
            button1={ImageWithInfoData2.button1}
            button2={ImageWithInfoData2.button2}
            isWhite={false}
          >
            <ImageFullHeigth
              imgSrc={ImageWithInfoData2.mini_image}
              isFullWidth={true}
            />
          </SideInfo>
        </VideoWithInfo>

        <SingleItemFirstView ItemFirstData={Model3MoreInfo3}>
          <ArticleInfo
            info={Model3MoreInfo3.info}
            textBlack={true}
            isRigth={true}
          />
        </SingleItemFirstView>
        <MoreInfo moreInfo={Model3MoreInfo3.moreInfo} backgroundBlack={false} />

        <SingleItemFirstView ItemFirstData={Model3MoreInfo4}>
          <ArticleInfo info={Model3MoreInfo4.info} isLeft={true} />
        </SingleItemFirstView>
        <MoreInfo moreInfo={Model3MoreInfo4.moreInfo} backgroundBlack={false} />

        <VideoWithInfo isInverted={false} isBlack={true}>
          <ImageFullHeigth imgSrc={Model3SpecsData.imgSrc} isHalf={true} />
          <SideInfoCompare
            titleStrong={Model3SpecsData.titleStrong}
            title={Model3SpecsData.title}
            button1={Model3SpecsData.button1}
            button2={Model3SpecsData.button2}
            info={Model3SpecsData.info}
          />
        </VideoWithInfo>

        <VideoWithInfo isInverted={true} isBlack={false}>
          <ImageFullHeigth imgSrc={Model3LateralData.imgSrc} isHalf={true} />
          <SideTitleWithButtons
            title={Model3LateralData.title}
            text={Model3LateralData.text}
          />
        </VideoWithInfo>
        <CustomFooter />
      </main>
      <footer></footer>
    </div>
  );
};

export default Model3;
