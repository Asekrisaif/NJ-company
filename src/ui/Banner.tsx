"use client";
import React, { useState } from "react";
import SliderText from "./SliderText";

const Banner = () => {
  const sliderContent = [
    {
      title: "Market Expertise",
      desTitle: "Mastering Trade Dynamics ",
      des: "NJ Trade and Service brings unmatched expertise in the ever-changing trading and service markets. We understand the complexities of these industries and provide tailored strategies that keep your business competitive and thriving.",
      backgroundClass: "bg-bgOne",
    },
    {
      title: "Innovative Solutions",
      desTitle: "Driving Business Growth",
      des: "Our innovative solutions are designed to address your business's unique challenges. From product sourcing to supply chain optimization, NJ Trade and Service offers services that drive efficiency and success, helping your business grow and prosper.",
      backgroundClass: "bg-bgTwo",
    },
    {
      title: "Comprehensive Support",
      desTitle: "Your Strategic Partner ",
      des: "NJ Trade and Service is more than just a service provider; we are your strategic partner in business. Our commitment to excellence ensures that we offer comprehensive support, from planning to execution, to help your business achieve its goals.",
      backgroundClass: "bg-bgThree",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full bg-primaryColor pt-10">
      <div
        className={`${sliderContent[currentSlide].backgroundClass} transition-bg duration-1000 w-full bg-contain bg-no-repeat xl:bg-cover bg-center font-titleFont relative py-10 mdl:py-32`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-col items-start gap-10">
          <SliderText
            title={sliderContent[currentSlide].title}
            desTitle={sliderContent[currentSlide].desTitle}
            des={sliderContent[currentSlide].des}
          />
        </div>
        <div className="absolute -bottom-20 mdl:bottom-0 flex flex-col mdl:flex-row items-start px-4 mdl:items-center bg-transparent justify-center gap-2 mdl:gap-6 text-[14px] text-gray-400 py-4 w-full bg-primaryColor">
          {sliderContent.map((_, index) => (
            <p
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`${
                currentSlide === index ? "text-gray-400" :"text-thirdColor"
              } relative h-full w-48 px-3 py-1 hover:text-thirdColor hover:cursor-pointer duration-300 overflow-hidden bg-primaryColor bg-opacity-10 group`}
            >
              0{index + 1}
              <span
                className={`${
                  currentSlide === index
                    ? "bg-secondaryColor translate-y-0"
                    : "bg-gray-400 translate-y-[1px]"
                } w-full h-0.5 inline-flex absolute bottom-0 left-0 transform group-hover:translate-y-0 transition-transform duration-500 group-hover:bg-secondaryColor`}
              ></span>
              <span
                className={`${
                  currentSlide === index
                    ? "bg-secondaryColor -translate-x-0"
                    : "bg-gray-400 -translate-x-[1px]"
                } w-0.5 h-3 inline-flex absolute bottom-0 left-0  group-hover:-translate-x-0 transition-transform duration-500 group-hover:bg-secondaryColor`}
              ></span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
