import React from "react";
import { Link } from "react-router-dom";
import "./Css/Nav.css";
import imgLogo from "./../Img/LogoImg.png";

export default function Nav() {
  return (
    <div className="HeaderNav">
      <div className="NavmContentDiv">
        <img src={imgLogo} alt="" />
        <div>
          <ul>
            <li>
              <Link to="/" className="LinkStyle">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="LinkStyle">
                Product
              </Link>
            </li>
            <li>
              <Link to="/" className="LinkStyle">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="LinkStyle">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
