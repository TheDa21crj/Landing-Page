import React from "react";
import "./Css/Contents.css";

export default function Contents() {
  return (
    <div className="ContentsMDiv">
      <p className="ContentsHeadPTag">Contents</p>
      <div className="ContentsContentDiv">
        <div>
          <p className="ContentsWefocusPTag">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="ContentsRowDiv">
          <div className="ContentLefthtDiv">hello</div>
          <div className="ContentRightDiv">world</div>
        </div>
      </div>
    </div>
  );
}
