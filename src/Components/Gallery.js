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
            <div className="CardsRow1">
              <img src={Card00} alt="" className="CardsImg1" />
              <img src={Card01} alt="" className="CardsImg1" />
              <img src={Card02} alt="" className="CardsImg1" />
              <img src={Card03} alt="" className="CardsImg1" />
            </div>
            <div className="CardsRow2">
              <img src={Card10} alt="" className="CardsImg2" />
              <img src={Card11} alt="" className="CardsImg2" />
              <img src={Card12} alt="" className="CardsImg2" />
            </div>
          </div>
          <button>See More</button>
        </div>
      </div>
    </div>
  );
}
