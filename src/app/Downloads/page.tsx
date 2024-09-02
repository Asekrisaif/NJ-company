"use client";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import TitleBanner from "@/ui/TitleBanner";

const faqData = [
  {
    _id: "01",
    title: "Advance",
    catalogUrls: [
      { name: "Advance 1", url: "/catalogs/advanceweb1.pdf" },
      { name: "Advance 2", url: "/catalogs/advanceweb2.pdf" },
      { name: "Advance 3", url: "/catalogs/Advanceweb3.pdf" },
      { name: "Advance 4", url: "/catalogs/advanceweb4.pdf" },
      { name: "Advance 5", url: "/catalogs/AGRICULTURALTYRES.pdf" },
      { name: "Advance 6", url: "/catalogs/Catalogue1.pdf" },
      { name: "Advance 7", url: "/catalogs/Catalogue2.pdf" },
    ], 
  },
  {
    _id: "02",
    title: "Xinxu",
    catalogUrls: [
      { name: "Xinxu 1", url: "/catalogs/xinxu.pdf" },
      { name: "Xinxu 2", url: "/catalogs/xinxu2.pdf" },
      { name: "Xinxu 3", url: "/catalogs/xinxu3.pdf" },
      { name: "Xinxu 4", url: "/catalogs/xinxu4.pdf" },
      { name: "Xinxu 5", url: "/catalogs/xinxu5.pdf" },
      { name: "Xinxu 6", url: "/catalogs/xinxu6.pdf" },
      { name: "Xinxu 7", url: "/catalogs/xinxu7.pdf" },
      { name: "Xinxu 8", url: "/catalogs/xinxu8.pdf" },
      { name: "Xinxu 9", url: "/catalogs/xinxu9.pdf" },
      { name: "Xinxu 10", url: "/catalogs/xinxu10.pdf" },
    ],
  },
  {
    _id: "03",
    title: "Tailift",
    catalogUrls: [
      { name: "Tailift 1", url: "/catalogs/Tailift.pdf" },
      { name: "Tailift 2", url: "/catalogs/Tailift2.pdf" },
    ],
  },
  {
    _id: "04",
    title: "PT Baria",
    catalogUrls: [
      { name: "PT Baria", url: "/catalogs/PTBaria.pdf" },
    ],
  },
  {
    _id: "05",
    title: "Tianli",
    catalogUrls: [
      { name: "Tianli 1", url: "/catalogs/Tianli.pdf" },
      { name: "Tianli 2", url: "/catalogs/Tianli2.pdf" },
      { name: "Tianli 3", url: "/catalogs/Tianli3.pdf" },
      { name: "Tianli 4", url: "/catalogs/Tianli4.pdf" },
    ],
  },
  {
    _id: "06",
    title: "CNGTBY",
    catalogUrls: [
      { name: "CNGTBY 1", url: "/catalogs/cngtby.pdf" },
      { name: "CNGTBY 2", url: "/catalogs/cngtby2.pdf" },
    ],
  },
];

const Downloads = () => {
  return (
    <div className="w-full">
      <TitleBanner
        subtitle="Explore the Catalogue"
        title="Download Our Catalogue"
      />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-20 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            {faqData?.map((item) => (
              <Disclosure
                key={item?._id}
                as="div"
                className="p-6 hover:cursor-pointer"
                defaultOpen={false}
              >
                <DisclosureButton className="group relative flex w-full items-center justify-between">
                  <p
                    className={`absolute left-0 -top-10 w-full h-auto px-3 py-1 text-sm group-hover:text-blue group-data-[open]:text-secondaryColor text-left duration-300 `}
                  >
                    {item?._id}
                    <span
                      className={`w-full h-[.5px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                    <span
                      className={`w-[1px] h-[10px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                  </p>

                  <span className="text-lg font-semibold text-black group-data-[open]:text-blue">
                    {item?.title}
                  </span>
                  <BiChevronDown className="size-6 fill-white/70 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-black tracking-wide leading-6">
                  {item?.catalogUrls?.map((catalog, index) => (
                    <a
                      key={index}
                      href={catalog.url}
                      download
                      className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2 mb-2"
                    >
                      {catalog.name}
                    </a>
                  ))}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
