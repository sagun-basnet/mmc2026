import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Slider from "../components/Home/Slider";

const HomePage = () => {
  const data = [
    {
      title: "asdsd",
      description: "asdfasdsfd",
      perioriy: "asdfsdaf",
    },
    {
      title: "asdsd",
      description: "asdfasdsfd",
      perioriy: "asdfsdaf",
    },
    {
      title: "asdsd",
      description: "asdfasdsfd",
      perioriy: "asdfsdaf",
    },
    {
      title: "asdsd",
      description: "asdfasdsfd",
      perioriy: "asdfsdaf",
    },
    {
      title: "asdsd",
      description: "asdfasdsfd",
      perioriy: "asdfsdaf",
    },
    {
      title: "asdsd",
      description: "asdfasdsfd",
      perioriy: "asdfsdaf",
    },
  ];
  return (
    <div className="flex">
      {data.map((item, index) => {
        return (
          <div key={index} className="border-2">
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <h1>{item.perioriy}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
