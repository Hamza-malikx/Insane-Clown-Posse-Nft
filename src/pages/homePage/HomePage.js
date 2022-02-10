import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import AboutUs from "../../components/aboutUs/AboutUs";
import Utility from "../../components/utility/Utility";
import Rarity from "../../components/rarity/Rarity";
import Team from "../../components/team/Team";
import Footer from "../../components/footer/Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Utility />
      <Rarity />
      <Team />
      <Footer />
    </>
  );
};

export default HomePage;
