import React from "react";
import "./Css/Features.css";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
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
                  <LocalDiningIcon className="FeatureIcon" />
                </span>
                <span className="FeatureHeadSpan">
                  A single source of truth
                </span>
              </div>
              <p className="FeaturePTag">
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
            <div className="FeatureRowDiv">
              <div className="FeatureRowHeadDiv">
                <span>
                  <TagFacesIcon className="FeatureIcon" />
                </span>
                <span className="FeatureHeadSpan">Intuitive interface</span>
              </div>
              <p className="FeaturePTag">
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
            <div className="FeatureRowDiv">
              <div className="FeatureRowHeadDiv">
                <span>
                  <AllInclusiveIcon className="FeatureIcon" />
                </span>
                <span className="FeatureHeadSpan">Or with rules</span>
              </div>
              <p className="FeaturePTag">
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
