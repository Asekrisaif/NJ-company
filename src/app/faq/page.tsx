"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import TitleBanner from "@/ui/TitleBanner";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

const faqData = [
  {
    _id: "01",
    title: "How to order from here?",
    subTitle:
      "You can order from the Page 'Service & Product'. You will find it in the menu by clicking on the 'Order Now' button and filling out the form.",
  },
  {
    _id: "02",
    title: "To Download Our Catalogues",
    subTitle:
      "Please go to the 'Downloads' page in the menu, choose the company name, and download the catalogues from there.",
  },
  {
    _id: "03",
    title: "How long will it take to deliver?",
    subTitle:
      "We strive to deliver as quickly as possible. Our team works daily to ensure the fastest service for you. Please <a href='mailto:contact@example.com' className='text-blue-500 underline'>contact us</a> to check the current delivery status or for more information.",
  },
  {
    _id: "04",
    title: "Where is my Order?",
    subTitle:
      "To check the status of your order, please <a href='mailto:contact@example.com' className='text-blue-500 underline'>contact us</a>. We will be happy to provide you with the latest updates.",
  },
];

const Faq = () => {
  return (
    <div className="w-full">
      <TitleBanner
        subtitle="Explore the Features"
        title="Frequently Asked Questions"
      />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-20 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-6">
          {faqData.map((item) => (
            <Disclosure
              key={item._id}
              as="div"
              className="p-6 hover:cursor-pointer"
              defaultOpen={false}
            >
              <DisclosureButton className="group relative flex w-full items-center justify-between">
                <p className="absolute left-0 -top-10 w-full h-auto px-3 py-1 text-sm group-hover:text-blue group-data-[open]:text-secondaryColor text-left duration-300">
                  {item._id}
                  <span
                    className="w-full h-[.5px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500"
                  ></span>
                  <span
                    className="w-[1px] h-[10px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500"
                  ></span>
                </p>
                <span className="text-lg font-semibold text-black group-data-[open]:text-blue">
                  {item.title}
                </span>
                <BiChevronDown className="size-6 fill-white/70 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-black tracking-wide leading-6">
                <div dangerouslySetInnerHTML={{ __html: item.subTitle }} />
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
        <div className="w-full mdl:w-1/4 font-titleFont">
          <h3 className="font-titleFont text-2xl underline underline-offset-4 decoration-[1px] decoration-secondaryColor">
            Contact Info
          </h3>
          <div className="mt-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Tunis :</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-blue hover:cursor-pointer transition duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Gremda Road, km 13, Sfax
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-blue hover:cursor-pointer transition duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                <a href="mailto:reactjsbd@gmail.com">reactjsbd@gmail.com</a>
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-blue hover:cursor-pointer transition duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +216 26 262 477
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-blue hover:cursor-pointer transition duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +216 26 262 477
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
