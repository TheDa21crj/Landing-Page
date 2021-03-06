import React from "react";
import "./Css/Footer.css";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        <div className="ContactUsDiv">
          <div className="PIconDiv">
            <LocationOnOutlinedIcon fontSize="large" />
            <p>7480 Mockingbird Hill undefined</p>
          </div>
          <div className="PIconDiv">
            <PhoneAndroidOutlinedIcon fontSize="large" />
            <p>(239) 555-0108</p>
          </div>
          <div className="SocialIconsDiv">
            <TwitterIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}
