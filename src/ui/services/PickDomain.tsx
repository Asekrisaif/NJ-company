import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { aboutUsImgThree } from "@/assets";
import Image from "next/image";

const PickDomain = () => {
  return (
    <div className="w-full px-6 flex items-center gap-10 mt-14">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="w-2/5 hidden lgl:inline-flex"
      >
        <Image src={aboutUsImgThree} alt="aboutUsImgThree" />
      </motion.div>
      <div className="w-full lgl:w-3/5">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex flex-col gap-4"
        >
          <h3
            // initial={{ x: 50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{
            //   delay: 0.2,
            //   x: { type: "spring", stiffness: 100 },
            //   opacity: { duration: 1 },
            //   ease: "easeIn",
            //   duration: 1,
            // }}
            className="text-2xl"
          >
            Pick Your<span className="text-secondaryColor ml-3">Domain</span>
          </h3>
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-black-300 duration-300">
            We have successfully developed future-ready projects for over 1,000 clients, demonstrating our expertise in delivering innovative solutions that meet the evolving needs of the market.
          </p>
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-black-300 duration-300">
            Our commitment to excellence and rd-thinking approach ensure that each project is designed to adapt to future challenges and opportunities
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="max-w-[450px] py-6 md:py-10 flex flex-col gap-0 md:gap-4"
        >
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Buying and Selling Goods
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Inventory Management
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Logistics and Transportation
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Contract Negotiation
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Market Analysis
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Import and Export
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Supplier RelationShip Management
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Business Development
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Customer Service
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Regulatory Compliance
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Project Planning and Support 
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Support for Foreign Investors 
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Upgrade Diagnostics 
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Industrial Organization 
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Quality Management Systems Implementation
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Consulting and Studies
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Procurement
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-black duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Shipping and Logistics
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
            These all factors should be considered when you are going to choose
            a domain name. But it&apos;s fine if you disregard any of them as
            your convenience to focus on others.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PickDomain;
