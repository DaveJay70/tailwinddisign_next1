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
    "Specialist retailers",
    "Crafts",
    "Architects",
    "Construction Lawyers",
    "Trade Fairs",
  ];

  return (
    <>
      <div className="sticky top-0 z-99">
        <div className="bg-white py-3 shadow-[0px_2px_7px_1px_#66666640] relative z-2">
          <div className="my-container flex items-center justify-between   ">
            <div>
              <Link href="https://bau24dev.de/">
                <Image
                  src="/logo.png"
                  alt="Main Logo"
                  width={240}
                  height={52}
                  className="h-8 w-auto "
                />
              </Link>
            </div>
            <div className="hidden md:flex flex-wrap gap-1 ">
              {mainNav.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="rounded-md px-4 py-4 flex items-baseline gap-x-2 header-1 text-[rgb(3,9,20)] "
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={16}
                    height={16}
                  />
                  <span className="nav-link">{item.name}</span>
                </Link>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                className="flex items-center gap-1 border border-[#919EAB] rounded-full p-1  py-[4px] pr-1 hover:bg-gray-50 transition"
                type="button"
              >
                <Image
                  src="/usa.png"
                  alt="English"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className=" font-medium text-black">EN</span>
                <ChevronDown size={16} className="text-[#919EAB]" />
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
        <div className="secondheader border-b  border-transparent relative z-1">
          <div className="my-container md:flex flex-wrap items-center justify-between gap-6 hidden">
            <Link href="/bauinfo/de" className=" py-3">
              <Image
                src="https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia%2Fbau-info.3b819feb.png&w=256&q=75"
                alt="BauInfo Logo"
                width={108}
                height={50}
              />
            </Link>

            <div className="flex flex-wrap items-center ">
              <div className="flex">
                {navLinks.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="nav-link-2 px-4 py-6  flex items-center gap-x-2 me-0 border-b-4 border-transparent text-[rgb(3,9,20)]  transition-colors "
                  >
                    {item}
                  </Link>
                ))}
              </div>
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
        className={`fixed top-0 right-0 h-full w-[80%] bg-white z-[999] transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
          <div className="flex justify-between items-center p-4">
            <Image
              src="/logo.png"
              alt="Main Logo"
              width={150}
              height={50}
              className="h-8 w-auto"
            />

            <button onClick={() => setIsMenuOpen(false)}>
              <X size={26} className="text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start text-left px-5  space-y-3 py-2">
          <div className="border-b"></div>
          <Link
            href="#"
            className="registerbutton font-medium px-4  rounded-full "
          >
            Registration
          </Link>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <button className="bauinfo rounded-lg font-medium px-2">BAUINFO</button>

          <div className="flex flex-col space-y-4 mt-4 w-full">
            {mainNav.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="flex items-center gap-3 text-black text-base font-medium"
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
                className="text-gray-600 text-sm "
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
