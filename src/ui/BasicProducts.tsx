import React from "react";
import {
  iconFour,
  iconFive,
  iconSix,
  iconSeven,
  iconEight,
  iconNine,
  iconTen,
  iconEleven,
} from "@/assets";
import Image from "next/image";

const BasicProducts = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10">
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            01
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconFour} alt="iconFour" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Import and Export</h3>
            
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
          Are vital for global trade, allowing countries to access resources and expand markets, boosting economic growth and cooperation.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            02
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconFive} alt="iconFive" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">
            Shipping and Logistics
            </h3>
            
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
          Ensure efficient global movement of goods, coordinating transport and delivery to meet timelines and costs.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            03
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconSix} alt="iconSix" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Industrial Organization</h3>
            
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
          Studies the behavior of firms, market structures, and how they interact within industries, focusing on competition, regulation, and economic efficiency.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            04
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconSeven} alt="iconSeven" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">
            Upgrade Diagnostics
            </h3>
            
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
          Involve assessing system performance and identifying areas for improvement to enhance functionality and efficiency.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            05
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconEight} alt="iconEight" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Buying and Selling Goods</h3>
            
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
          Involve the exchange of products between buyers and sellers, driving economic activity and meeting consumer needs.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            06
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconNine} alt="iconNine" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Inventory Management</h3>
            
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
          Tracks and controls stock to ensure availability and cost efficiency.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            07
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconTen} alt="iconTen" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Contract Negotiation</h3>
            
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
          Is the process of discussing and agreeing on the terms of a contract to ensure mutual benefits and legal clarity for all parties involved.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            08
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconEleven} alt="iconEleven" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Project Planning and Support</h3>
            
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
          outline goals and resources, ensuring successful completion and alignment with objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicProducts;
