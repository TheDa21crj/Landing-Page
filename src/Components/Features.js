import React from "react";
import "./Css/Features.css";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import img0 from "./../Img/Frame19.png";

export default function Features() {
  return (
    <div className="featuresmDiv">
      <h1>Features</h1>
      <div className="featuresSubHeadingDiv">
        <div className="FeaturesPTagDiv">
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
        <div className="FeatureDetailsDiv">
          <div>
            <img src={img0} alt="" className="FeatureScreenImgTag" />
          </div>
          <div className="FeatureRightDiv">
            <div>
              <div className="FeatureRowHeadDiv">
                <span>
                  <LocalDiningIcon />
                </span>
                <span>A single source of truth</span>
              </div>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
            <div className="FeatureRowDiv">
              <div className="FeatureRowHeadDiv">
                <span>
                  <LocalDiningIcon />
                </span>
                <span>A single source of truth</span>
              </div>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
            <div className="FeatureRowDiv">
              <div className="FeatureRowHeadDiv">
                <span>
                  <LocalDiningIcon />
                </span>
                <span>A single source of truth</span>
              </div>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
            \
          </div>
        </div>
      </div>
    </div>
  );
}
