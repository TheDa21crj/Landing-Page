import React from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Header";
import Screens from "./../Components/Screens";
import Features from "./../Components/Features";

export default function Home() {
  return (
    <div>
      <Nav />
      <NavMobo />
      <Header />
      <Screens />
      <Features />
      Home
    </div>
  );
}
