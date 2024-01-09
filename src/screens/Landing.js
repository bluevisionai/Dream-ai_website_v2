import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Features from "../components/Sections/Features";
import Gallery from "../components/Sections/Gallery";
import Faq from "../components/Sections/Faq";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Features />
      <Gallery />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}


