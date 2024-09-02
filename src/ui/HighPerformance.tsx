import React from "react";
import ContactUs from "./ContactUs";

const HighPerformance = () => {
  return (
    <div className="w-full lg:h-[500px] mt-[30px] mb-10 bg-reactBd-highPerformanceBg bg-cover bg-center bg-no-repeat flex py-16 lg:py-0 justify-center items-center">
      <div className="max-w-screen-2xl mx-auto px-10">
        <div className="w-full xl:w-3/5 flex flex-col gap-6 lg:gap-12">
          <div className="font-titleFont w-full lg:w-4/6 xl:w-5/6">
            <div className="text-center lg:text-left">
              <h4 className="text-secondaryColor uppercase text-sm tracking-[4px] mb-2">
                About Us
              </h4>
              <h2 className="text-3xl lg:text-[45px] font-semibold tracking-[2px] lg:leading-[55px]">
                WHO WE ARE?
              </h2>
            </div>
          </div>
          <div>
            <p className="w-full lg:pr-44 text-base text-center lg:text-left text-darkText">
              At NJ Trade and Service, we excel in providing innovative solutions and expert support in trading and service markets.
              Our Team is dedicated to delivering exceptional results tailored to your business needs.
              Explore how we can help you achieve success with our specialized services and proven strategies.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <ContactUs buttonData="contact us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighPerformance;
