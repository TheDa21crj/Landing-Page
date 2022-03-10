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
          <div className="ContentLefthtDiv">
            <p className="CardsDivPTag">Work</p>
            <p className="ContentCardsSubheading">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </p>
          </div>
          <div className="ContentRightDiv">
            <p className="CardsDivPTag">Design with real data</p>
            <p className="ContentCardsSubheading">sub</p>
          </div>
        </div>
      </div>
    </div>
  );
}
