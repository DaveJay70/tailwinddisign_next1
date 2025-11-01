"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./bauinfo.css";

export default function BauInfo() {
  const featureCards = [
    {
      img: "https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia%2FWorker.4541b31d.png&w=256&q=75",
      title: "Everything at a glance",
      desc: "Everything from real estate to legal experts in one place.",
    },
    {
      img: "https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia%2Fhome.6942cc5b.png&w=256&q=75",
      title: "Flexible appearance",
      desc: "Companies can easily maintain and update their content themselves.",
    },
    {
      img: "https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia%2Flocation.a169c46e.png&w=256&q=75",
      title: "Smart search",
      desc: "Quickly find products or services - with just a few clicks.",
    },
    {
      img: "https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia%2Farea.affd8c7e.png&w=256&q=75",
      title: "Industry diversity",
      desc: "Connect with experts in real estate, construction, design and more.",
    },
  ];

  const topCategories = [
    { title: "Manufacturer", img: "manufacturer.6867c2bc.png" },
    { title: "Specialist Retailers", img: "specialist-trade.c0dddf97.png" },
    { title: "Crafts", img: "trade.5bf4d5e0.png" },
    { title: "Clubs", img: "associations.5d75f0b9.png" },
    { title: "Construction Lawyers", img: "specialist-lawyer.4282e886.png" },
    { title: "Architects", img: "architects.05ae6f18.png" },
    { title: "Prefabricated Houses", img: "prefab-house.e723422e.png" },
    { title: "Measure", img: "exhibitions.82f1dde6.png" },
  ];

  const topBrands = [
    {
      href: "https://bau24dev.de/info/de/company/aco-gruppe-2019-1/",
      src: "https://bau24dev.de/info/_next/static/media/aco.d400bbbb.png",
      alt: "ACO",
      width: 200,
      height: 153,
    },
    {
      href: "https://bau24dev.de/info/de/company/artemide-7/",
      src: "https://bau24dev.de/info/_next/static/media/artemide.fe65ab93.png",
      alt: "Artemide",
      width: 216,
      height: 80,
    },
    {
      href: "https://bau24dev.de/info/de/company/dorow-sohn-kg-niederlassung-engelsdorf-683/",
      src: "https://bau24dev.de/info/_next/static/media/lotter.ee8d380b.png",
      alt: "Lotter",
      width: 128,
      height: 49,
    },
    {
      href: "https://bau24dev.de/info/de/company/boffi-18/",
      src: "https://bau24dev.de/info/_next/static/media/boffi.0f15e4b1.png",
      alt: "Boffi",
      width: 216,
      height: 80,
    },
    {
      href: "https://bau24dev.de/info/de/company/bover-19/",
      src: "https://bau24dev.de/info/_next/static/media/bover.a541c3f1.png",
      alt: "Bover",
      width: 197,
      height: 172,
    },
  ];

  const bottomBrands = [
    {
      href: "https://bau24dev.de/info/de/company/alape-3/",
      src: "https://bau24dev.de/info/_next/static/media/alape.f0a2e05c.png",
      alt: "Alape",
      width: 200,
      height: 105,
    },
    {
      href: "https://bau24dev.de/info/de/company/bucher-gc-gruppe-747/",
      src: "https://bau24dev.de/info/_next/static/media/bucher.654936b0.png",
      alt: "Bucher",
      width: 128,
      height: 78,
    },
    {
      href: "https://bau24dev.de/info/de/company/elmer-gmbh-co-kg-boenen-859/",
      src: "https://bau24dev.de/info/_next/static/media/elmer.3d1485a6.png",
      alt: "Elmer",
      width: 128,
      height: 33,
    },
    {
      href: "https://bau24dev.de/info/de/company/eisen-knorr-ag-886/",
      src: "https://bau24dev.de/info/_next/static/media/knoor.35a6cc89.png",
      alt: "Knoor",
      width: 128,
      height: 55,
    },
  ];

  return (
    <>
      <div className="w-full h-screen overflow-hidden absolute ">
        <div className="halfcircle-bg hidden md:block"></div>
      </div>

      {/* Main Content */}

      <div className="flex-grow:1;min-height:100vh">
        <div className="relative mx-auto text-center px-6">
          <h1 className="font-bold Immediatetext mb-2 mt-13 leading-[60px] text-[40px]">
            Instant Access to Build Experts
          </h1>
          <p className="text-[rgb(64,57,57)] font-18 font-Inder  text-center font-medium transition-all duration-700 ease-out transform animate-on-scroll mt-3 opacity-100 translate-y-0">
            Find products, services & experts in one place.
          </p>

          {/* Search Bar */}
          <div className="flex items-center justify-center px-4 pt-5">
            <div className="flex flex-col sm:flex-row max-w-3xl bg-white border border-gray-200 sm:rounded-full rounded-sm overflow-hidden w-full">
              <div className="flex items-center gap-2 px-4 py-3 w-full sm:w-[450px]">
                <img
                  src="/svg/search.svg"
                  alt="Search Icon"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Search Here"
                  className="w-full sm:text-xl text-sm  placeholder-gray-400 outline-none"
                />
              </div>
              <div className="hidden sm:block h-6 border-l border-gray-300 my-auto"></div>
              <div className="flex items-center justify-between gap-2 px-4 py-3 w-full sm:w-[300px] border-t border-b sm:border-none border-gray-200">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full sm:text-xl text-base placeholder-gray-400 outline-none"
                />
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path
                    d="M8 20C8 20 15.5 12.8921 15.5 7.5C15.5 3.35786 12.1421 0 8 0C3.85786 0 0.5 3.35786 0.5 7.5C0.5 12.8921 8 20 8 20ZM8 11.25C5.92893 11.25 4.25 9.57107 4.25 7.5C4.25 5.42893 5.92893 3.75 8 3.75C10.0711 3.75 11.75 5.42893 11.75 7.5C11.75 9.57107 10.0711 11.25 8 11.25Z"
                    fill="#919EAB"
                  />
                </svg>
              </div>
              <button className="seekbutton  font-medium text-base m-1 transition w-auto rounded-full">
                Search
              </button>
            </div>
          </div>

          {/* feature cards 1st section*/}
          <div className="my-container mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 ">
            {featureCards.map((card, i) => (
              <div
                key={i}
                className="bg-white flex flex-col items-center text-center
                 rounded-xl shadow-sm border border-[#0000004D]
                 hover:shadow-lg transition-transform transform hover:-translate-y-1
                 py-6 px-4 gap-3"
              >
                <div className="flex justify-center card-img">
                  <img
                    src={card.img}
                    alt={card.title}
                  />
                </div>

                <h3 className="text-[24px] leading-[32px] font-semibold text-black mb-2">
                  {card.title}
                </h3>

                <p className="ml-1 text-[20px] leading-[28px] text-[rgb(64,57,57)] text-center">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="py-8">
            <h5 className="text-center font-semibold text-black text-[24px] mb-1 leading-[36px]">
              Top categories
            </h5>
            <p className="text-[rgb(125,119,119)] text-center font-medium text-[15px] leading-[23px] ">
              Great ideas from top companies for designing, creating, and
              furnishing.Flexible and adaptable products for
              <br /> residential and commercial spaces.
            </p>
          </div>
        </div>

        {/* top categories Section 2nd section  */}
        <div className="imagesection py-8 ">
          <div className="my-container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-4 gap-8">
            {topCategories.map((cat, i) => (
              <div
                key={i}
                className="transition-all duration-500 ease-out transform hover:-translate-y-1"
              >
                <div className="bg-white flex flex-col rounded-2xl py-6 shadow-sm w-full h-full border border-[#0000004D]">
                  <div className="flex justify-center px-6">
                    <Image
                      src={`https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia%2F${cat.img}&w=384&q=75`}
                      alt={cat.title}
                      width={375}
                      height={250}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="px-6 mt-4 ">
                    <div>
                      <h3 className="text-xl font-semibold text-[rgb(3,9,20)] mb-2">
                        {cat.title}
                      </h3>
                      <p className="text-[rgb(64,57,57)] text-base font-medium mb-5">
                        Here you will find all well-known producers
                      </p>
                    </div>

                    <div className="items-end  justify-end">
                      <button className="learnmorebutton text-white text-base font-medium rounded-full mt-auto">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*two card section right and left  3rd section*/}
        <div className="py-8">
          <div className="my-container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-8 ">
            <div className="img-sm relative transition-all duration-700 ease-out transform animate-on-scroll overflow-hidden opacity-100 translate-y-0">
              <div className="card-section min-h-[480px] rounded-lg">
                <img
                  src="https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia/cardbg-img.3e1a6dec.png&w=1920&q=75"
                  alt="Baupartner"
                  width={770}
                  height={483}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full bg-black/50 sm:hidden z-10 rounded-lg"></div>

              <div className="absolute top-0 w-full h-full z-10 rounded-lg">
                <div className="lg:p-16 sm:p-4 p-4 py-0 flex flex-col lg:gap-8 md:gap-8 gap-4 mt-8 rounded-lg">
                  <h6 className="sm:text-3xl text-xl text-white font-semibold">
                    Your direct route to the right one
                    <br className="sm:block hidden" /> Baupartner
                  </h6>
                  <ul className="font-medium sm:text-xl text-lg list-disc ps-5 text-white ms-2">
                    <li>
                      Whether property, construction company or <br /> Interior
                      design - here you will find everything quickly and simply.
                    </li>
                    <li>
                      Current contacts, verified providers and <br /> Experts
                      from a single source.
                    </li>
                    <li>
                      Bau24 Info takes you to your destination in just a few
                      clicks.
                    </li>
                  </ul>
                  <div>
                    <button className="usebaubutton rounded-full text-[14px] px-4 py-2 font-medium flex items-center justify-center gap-2 w-fit transition">
                      Use Bau24 Info now
                      <img
                        src="/svg/arrowright.svg"
                        className="size-5 "
                        width={34}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="img-sm relative bg-rich-purple rounded-lg overflow-hidden transition-all duration-700 ease-out transform animate-on-scroll opacity-100 translate-y-0">
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 sm:hidden z-10 rounded-lg"></div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <img
                  src="https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia/Mask-group.4c94e065.png&w=640&q=75"
                  alt="Construction"
                  width={268}
                  height={364}
                  className="max-h-[400px] object-contain"
                />
              </div>

              <div className="relative z-10 p-8 lg:p-16">
                <h6 className="sm:text-3xl text-xl text-white font-semibold">
                  Discover everything for your construction project <br /> - a
                  one place
                </h6>
                <ul className="font-medium sm:text-xl text-lg list-disc ps-5 ms-2 text-white mt-6">
                  <li>
                    From property search to interior design - <br />
                    you will find everything you need to build and <br />
                    need shapes.
                  </li>
                  <li>
                    Construction companies, product providers, <br />
                    Legal experts - everything at your fingertips.
                  </li>
                  <li>
                    Companies and manufacturers manage their <br />
                    Entries themselves - so they always stay up to date.
                  </li>
                </ul>
                <div className="mt-8">
                  <button className="usebaubutton mt-8 rounded-full text-[14px] px-5 py-2 font-medium flex items-center gap-2 w-fit transition">
                    Use Bau24 Info now
                    <img
                      src="/svg/arrowright.svg"
                      className="size-5"
                      width={34}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trusted by professionals section 4th section */}
        <div className="banner-section3-wrapper bg-[#E9E2EB] py-16 relative overflow-hidden">
          <div>
            <h1 className="text-center text-[rgb(79,16,92)] font-bold text-[30px] sm:text-[36px] leading-snug animate-on-scroll">
              Trusted by over 10,000 professionals <br /> the construction
              industry
            </h1>

            <div className="bg-[#E9E2EB] py-10 px-4">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 sm:gap-4 transition-all duration-700 animate-on-scroll">
                {topBrands.map((brand, i) => (
                  <Link
                    key={i}
                    href={brand.href}
                    target="_blank"
                    className="bg-white rounded-lg p-4 flex items-center justify-center h-[140px] sm:h-[150px] md:h-[160px] brand-box"
                  >
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="object-contain max-h-full max-w-full"
                    />
                  </Link>
                ))}
              </div>

              <div className="max-w-4xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-16 transition-all duration-700 animate-on-scroll">
                {bottomBrands.map((brand, i) => (
                  <Link
                    key={i}
                    href={brand.href}
                    target="_blank"
                    className="bg-white rounded-lg p-4 flex items-center justify-center h-[140px] sm:h-[150px] md:h-[160px] brand-box"
                  >
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="object-contain max-h-full max-w-full"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="absolute right-0 top-0 hidden lg:block">
              <img
                src="/svg/design1.svg"
                alt="bg-design"
                width="236"
                height="201"
              />
            </div>

            <div className="absolute left-0 bottom-0 hidden md:block">
              <img
                src="/svg/design.svg"
                alt="bg-design-2"
                width="218"
                height="352"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
