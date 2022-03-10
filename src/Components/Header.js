import React from "react";
import "./Css/Header.css";

export default function Header() {
  return (
    <div className="HeaderMDiv">
      <div className="HeaderH1Div">
        <h1>Work at the speed of thought</h1>
      </div>
      <div className="HeaderPDiv">
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className="BtnDiv">
        <div className="TryForFree">Try for free</div>
        <div className="LearnMore">Learn more</div>
      </div>
    </div>
  );
}
