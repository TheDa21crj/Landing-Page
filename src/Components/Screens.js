import React from "react";
import "./Css/Screens.css";
import imgScreen from "./../Img/screens.png";

export default function Screens() {
  return (
    <div className="screensmDiv">
      <div>
        <img src={imgScreen} alt="" className="screensImg" />
      </div>
    </div>
  );
}
