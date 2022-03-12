import React from "react";
import "./Css/Footer.css";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  return (
    <div className="FooterMDiv">
      <div className="FooterDiv">
        <div className="UlDiv">
          <div className="UlMDiv">
            <ul>
              <li className="listTitle">Fingertipe</li>
              <li>Home</li>
              <li>Examples</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>
          <div className="UlMDiv">
            <ul>
              <li className="listTitle">Resources</li>
              <li>Home</li>
              <li>Examples</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>
          <div className="UlMDiv">
            <ul>
              <li className="listTitle">About</li>
              <li>Home</li>
              <li>Examples</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>
        </div>
        <div>
          <p>
            <LocationOnOutlinedIcon />
            7480 Mockingbird Hill undefined
          </p>
          <p>
            <PhoneAndroidOutlinedIcon />
            (239) 555-0108
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}
