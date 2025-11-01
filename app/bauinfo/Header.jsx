"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import "./bauinfo.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNav = [
    { name: "BAUINFO", icon: "/svg/svg1.svg", link: "/bauinfo" },
    { name: "BAU SHOP", icon: "/svg/svg2.svg", link: "/shop" },
    { name: "BAURENT", icon: "/svg/svg3.svg", link: "/baurent" },
    { name: "IMMOFINDER", icon: "/svg/svg4.svg", link: "/immofinder" },
    { name: "JOBFINDER", icon: "/svg/svg5.svg", link: "/jobfinder" },
    { name: "BAUFINANZEN", icon: "/svg/svg6.svg", link: "/baufinanzen" },
    {
      name: "BAUVERSICHERUNG",
      icon: "/svg/svg7.svg",
      link: "/bauversicherung",
    },
    { name: "BAUPAY", icon: "/svg/svg8.svg", link: "/baupay" },
  ];

  const navLinks = [
    "Manufacturer",
    "Specialist Retailers",
    "Crafts",
    "Clubs",
    "Architects",
    "Construction Lawyers",
    "Prefabricated Houses",
    "Trade Fairs",
  ];

  return (
    <>
      <div className="sticky top-0 z-99">
        <div className="relative w-full z-2 bg-white">
          <div className="my-container mx-auto flex items-center justify-between py-2  ">
            <Link href="https://bau24dev.de/">
              <Image
                src="/logo.png"
                alt="Main Logo"
                width={240}
                height={52}
                className="h-8 w-auto "
              />
            </Link>
            <nav className="hidden md:flex flex-wrap gap-1 text-[6px] sm:text-[8px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] leading-normal">
              {mainNav.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="flex gap-x-2 px-2 header-1 py-4 text-[rgb(3,9,20)] "
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={16}
                    height={16}
                  />
                  <span className="font-normal">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="flex gap-2">
              <button
                className="flex items-center gap-1 border border-[#919EAB] rounded-full p-1 py-[3px] hover:bg-gray-50 transition"
                type="button"
              >
                <Image
                  src="/usa.png"
                  alt="English"
                  width={23}
                  height={23}
                  className="rounded-full"
                />
                <span className="text-sm font-medium text-black">EN</span>
                <ChevronDown size={14} className="text-black" />
              </button>

              <button
                className="md:hidden text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Second Header */}
        <div className="secondheader relative w-full z-1 hidden md:block ">
          <div className="my-container flex flex-wrap items-center justify-between gap-5 py-3">
            <Link href="/bauinfo/de" className="flex-shrink-0">
              <Image
                src="https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia%2Fbau-info.3b819feb.png&w=256&q=75"
                alt="BauInfo Logo"
                width={108}
                height={50}
              />
            </Link>

            <div className="flex flex-wrap items-center justify-center">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="px-3 py-6  text-[rgb(3,9,20)]  transition-colors text-[12px] sm:text-[6px] md:text-[6px] lg:text-[8px] xl:text-[12px] 2xl:text-[14px] leading-normal"
                >
                  {item}
                </Link>
              ))}
            </div>

            <Link
              href="#"
              className="registerbutton inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 font-medium  h-[42px] hover:opacity-90 transition"
            >
              Registration
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-white z-[999] transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col items-start text-left px-8 pb-10 space-y-4">
          <Image
            src="/logo.png"
            alt="Main Logo"
            width={150}
            height={50}
            className="mb-2"
          />
          <div className="w-full h-[1px] bg-gray-300"></div>
          <Link
            href="#"
            className="registerbutton font-medium px-6 py-2 rounded-full mt-2 bg-blue-600 text-white"
          >
            Registration
          </Link>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <button className="bauinfo rounded-lg">BAUINFO</button>

          <div className="flex flex-col space-y-3 mt-4 w-full">
            {mainNav.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="flex items-center gap-3 text-gray-800 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="w-full h-[1px] bg-gray-300 my-3"></div>

          <div className="flex flex-col space-y-2 w-full">
            {navLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-600 text-sm hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
