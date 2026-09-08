import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Slider from "../components/Home/Slider";

const HomePage = () => {
  return (
    <div className="flex">
      <HeroSection />
      <Slider />
    </div>
  );
};

export default HomePage;
