import React from "react";
import imgLogo from "./../Img/LogoImg.png";
import { Link } from "react-router-dom";
import "./Css/NavMobo.css";

export default function NavMobo() {
    return ( <
        div className = "NavMoboMDiv" >
        <
        img src = { imgLogo }
        alt = "" / >
        <
        button className = "NavLoginbtn" >
        <
        p > Login < /p> <
        /button> <
        div className = "hamBurger" >
        <
        div className = "ham1" > < /div> <
        div className = "ham2" > < /div> <
        div className = "ham3" > < /div> <
        /div> <
        /div>
    );
}