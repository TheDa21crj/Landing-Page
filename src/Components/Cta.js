import React from "react";
import "./Css/Cta.css";
import img from "./../Img/LineChart1.png";

export default function Cta() {
  return (
    <div className="CtamDiv">
      <div className="CtaContentDiv">
        <div>
          <p className="ctaPTag">OpenType features and Variable fonts</p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
