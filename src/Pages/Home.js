import React from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Header";
import Screens from "./../Components/Screens";
import Features from "./../Components/Features";
import Contents from "./../Components/Contents";
import Gallery from "./../Components/Gallery";
import Partners from "./../Components/Partners";
import Testimonials from "./../Components/Testimonials";
import Cta from "./../Components/Cta";
import Footer from "./../Components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <NavMobo />
      <Header />
      <Screens />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <Cta />
      Home
    </div>
  );
}
