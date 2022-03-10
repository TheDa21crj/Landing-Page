import React from "react";
import "./Css/Gallery.css";
import Card00 from "./../Img/Card00.png";
import Card01 from "./../Img/Card01.png";
import Card02 from "./../Img/Card02.png";
import Card03 from "./../Img/Card03.png";
import Card10 from "./../Img/Card10.png";
import Card11 from "./../Img/Card11.png";
import Card12 from "./../Img/Card12.png";

export default function Gallery() {
  return (
    <div className="GallerymDiv">
      <p className="GalleryPTitle">Gallery</p>
      <div className="GalleryContentDiv">
        <div className="GalleryContentNDiv">
          <p className="GalleryWeFocus">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div>
            <div>
              <img src={Card00} alt="" />
              <img src={Card01} alt="" />
              <img src={Card02} alt="" />
              <img src={Card03} alt="" />
            </div>
            <div>
              <img src={Card10} alt="" />
              <img src={Card11} alt="" />
              <img src={Card12} alt="" />
            </div>
          </div>
          <button>See More</button>
        </div>
      </div>
    </div>
  );
}
