import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsGithub,
  BsFillPhoneFill,
} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-screen-full mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8 py-10 border-t-2 rounded-xl border-t-borderColor"
    style={{ boxShadow: '0 -3px 3px 0 rgba(0, 0, 0, 0.3), 0 -6px 6px 0 rgba(255, 255, 255, 0.5)' }}
    >
      <div className="flex flex-col gap-4 right-0">
        <h2 className="font-titleFont text-2xl text-black font-normal tracking-wider">
          NJ TRADE AND SERVICE
        </h2>
        <p className="text-base text-darkText tracking-wide">
          Lorem ipsum dolor sit amet, consyect etur adipiscing elit. Quisque
          actraqum nunc no dolor sit amet augue dolor.
        </p>
        <p className="flex items-center text-lg gap-5">
          <BsTwitter className="text-black hover:text-secondaryColor duration-500 cursor-pointer" />
          <ImFacebook className="text-black hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsYoutube className="text-black hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsGithub className="text-black hover:text-secondaryColor duration-500 cursor-pointer" />
        </p>
      </div>
      <div>
        <h3 className="font-titleFont text-black text-xl font-semibold mb-4">
          Contact Info
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-secondaryColor duration-500 cursor-pointer">
            <span className="text-black text-xl">
              <FaHome />
            </span>
            Gremda Road.. Km 13,Sfax
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-secondaryColor duration-500 cursor-pointer">
            <span className="text-black text-xl">
              <MdEmail />
            </span>
            info@gmail.com
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-secondaryColor duration-500 cursor-pointer">
            <span className="text-black text-xl">
              <BsFillPhoneFill />
            </span>
            +216 26 262 477
          </p>
        </div>
      </div>
      <div className="right-0">
        <h3 className="font-titleFont text-black text-xl font-semibold mb-4">
          Support & Downloads
        </h3>
        <p className="text-base text-darkText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          voluptates, fuga aliquam nobis placeat iusto illum fugiat consequuntur
          ad tempora.
        </p>
      </div>
    </div>
  );
};

export default Footer;
