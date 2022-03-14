import React from "react";
import "./Css/Partners.css";

import imgAppleStore from "./../Img/apple-app-store.png";
import Apiary from "./../Img/logos_apiary.png";
import AndroidIcon from "./../Img/android-icon.png";
import BaseCamp from "./../Img/basecamp.png";
import Airbnb from "./../Img/airbnb.png";
import Ibm from "./../Img/ibm.png";

export default function Partners() {
  return (
    <div className="PartnersMainDiv">
      <p className="PartnersmDiv">Partners</p>
      <div className="PartnersContentDiv">
        <p className="FeaturesWeFocus">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div className="FeaturesImgLogoDiv">
        <img src={imgAppleStore} alt="" />
        <img src={Apiary} alt="" />
        <img src={AndroidIcon} alt="" />
        <img src={BaseCamp} alt="" />
        <img src={Airbnb} alt="" />
        <img src={Ibm} alt="" />
      </div>
      <div className="FeaturesImgLogoDivRespo">
        <div className="FeaturesImgLogoREspo0">
          <img src={imgAppleStore} alt="" />
          <img src={Apiary} alt="" />
          <img src={AndroidIcon} alt="" />
        </div>
        <div className="FeaturesImgLogoREspo1">
          <img src={BaseCamp} alt="" />
          <img src={Airbnb} alt="" />
          <img src={Ibm} alt="" />
        </div>
      </div>
      <button className="GallerySeeMore">All Partners</button>
    </div>
  );
}
