import React from "react";
import "./Css/Cta.css";
import img from "./../Img/LineChart1.png";

export default function Cta() {
  return (
    <div className="CtamDiv">
      <div className="CtaContentDiv">
        <div className="CtaLeftDiv">
          <p className="ctaPTag">OpenType features and Variable fonts</p>
          <div className="TryForFree">Try For Free</div>
        </div>
        <div className="CtaRightDiv">
          <img src={img} alt="" className="ctaImgTag" />
        </div>
      </div>
    </div>
  );
}
