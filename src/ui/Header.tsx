"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";

import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { title: "Home", link: "/" },
  { title: " Services & product", link: "/services" },
  { title: "Faq", link: "/faq" },
  { title: "Contact", link: "/contact" },
  { title: "About", link: "/about" },
  { title: "Downloads", link: "/Downloads" },
];

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const pathname = usePathname();

  const [navSize, setNavSize] = useState("90px");
  const [navColor, setNavColor] = useState("#ffffff");
  const [navBorderRadius, setNavBorderRadius] = useState("0");
  const [navBorder, setNavBorder] = useState("none");

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setNavColor("#ffffff");
      setNavBorderRadius("0 0 20px 20px");
      setNavBorder("3px solid #000000");
    } else {
      setNavColor("#ffffff");
      setNavBorderRadius("0");
      setNavBorder("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 0.3s",
          borderRadius: navBorderRadius,
          borderBottom: navBorder,
        }}
        className="w-full h-[90px] bg-primaryColor fixed top-0 z-50 px-4 nav"
      >
        <div className="w-full h-[90px]">
          <header className="max-w-screen-2xl mx-auto text-thirdColor flex items-center justify-between h-full overflow-hidden">
            {/* ================= Header logo start here ================= */}
            <Link href="/">
              <div>
                <Image
                  priority
                  className="w-[250px] h-[100px] mr-[20px]"
                  src={logo}
                  alt="NJLogo"
                />
              </div>
            </Link>
            {/* ================= Header logo end here =================== */}
            {/* ================= Header Nav Link start here =================== */}
            <div className="relative">
              <div className="hidden lgl:flex items-center gap-6 xl:gap-12 uppercase font-titleFont tracking-[3px] text-[14px] font-semibold">
                {navigation?.map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.link}
                    className="relative px-3 group hover:cursor-pointer overflow-hidden py-1"
                  >
                    {item?.title}
                    <span
                      className={`w-full h-[2px] group-hover:bg-secondaryColor absolute left-0 bottom-0 translate-y-[1px] transition-hover duration-100 ${
                        item?.link === pathname && "bg-secondaryColor"
                      }`}
                    ></span>
                    <span
                      className={`w-[2px] h-[10px] group-hover:bg-secondaryColor absolute left-0 bottom-0 -translate-x-[1px] transition-translate duration-100 ${
                        item?.link === pathname && "bg-secondaryColor"
                      }`}
                    ></span>
                  </Link>
                ))}
              </div>
              {/* ================== Header Small Icon start here ================== */}

              <div
                onCanPlay={() => setToggleNav(!toggleNav)}
                className="relative text-2xl w-11 h-11 lgl:hidden flex flex-col gap-[6px] border-b-[1px] border-b-secondaryColor border-t-[1px] text-thirdColor border-t-secondaryColor items-center justify-center group hover:cursor-pointer overflow-hidden"
              >
                {toggleNav ? (
                  <AiOutlineClose onClick={() => setToggleNav(!toggleNav)} />
                ) : (
                  <CgMenuRight onClick={() => setToggleNav(!toggleNav)} />
                )}
                <span className="h-full w-[1px] bg-secondaryColor inline-block absolute right-0 translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="h-full w-[1px] bg-secondaryColor inline-block absolute left-0 -translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
              </div>

              {/* ================== Header Small Icon end here ==================== */}
            </div>
            {/* ================= Header Nav Link end here ====================== */}
          </header>
        </div>
      </nav>
      {/* ================= Navlink small screen start here ============= */}
      {toggleNav && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn easeOut",
          }}
          className="w-full py-6 px-4 top-0 mt-20 z-50 bg-white fixed inline-block lgl:hidden text-black/80"
        >
          <ul className="w-full flex flex-col gap-2 font-titleFont uppercase text-sm">
            <Link href="/">
              <li
                onClick={() => setToggleNav(false)}
                className=" w-full px-3 hover:cursor-pointer py-1 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500"
              >
                Home
              </li>
            </Link>
            <Link href="/services">
              <li
                onClick={() => setToggleNav(false)}
                className="px-3 hover:cursor-pointer py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500"
              >
                Services & Products
              </li>
            </Link>
            <Link onClick={() => setToggleNav(false)} href="/faq">
              <li className="px-3 hover:cursor-pointer flex items-center gap-1 py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500">
                FAQ
              </li>
            </Link>
            <Link href="/contact">
              <li className="px-3 hover:cursor-pointer py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500">
                Contact
              </li>
            </Link>
            <Link href="/about">
              <li className="px-3 hover:cursor-pointer py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500">
                About
              </li>
            </Link>
            <Link onClick={() => setToggleNav(false)} href="/Downloads">
              <li className="px-3 hover:cursor-pointer py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500">
                Downloads
              </li>
            </Link>
          </ul>
        </motion.div>
      )}
      {/* ================= Navlink small screen end here =============== */}
    </>
  );
};

export default Header;
