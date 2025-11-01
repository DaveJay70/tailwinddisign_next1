"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-deep-violet pt-16 text-white">
      <div className="my-container">
        <h1 className="text-white sm:text-[40px] text-2xl text-center font-bold">
          We look forward to hearing from you <br className="hidden sm:block" />
          Questions, feedback or partnerships?
        </h1>

        <form>
          <div className="flex flex-wrap justify-center w-full max-w-3xl mx-auto items-center gap-4 mt-10">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Email"
              className="w-[550px] h-9 pl-11 rounded-full bg-white text-[rgb(0.145,0,0)] outline-none focus:ring-4 focus:ring-[#9D55AE]/50 transition-all duration-300"
            />
            <button
              type="submit"
              className="subscribebutton flex items-center justify-center h-[42px] px-6 rounded-full  font-medium text-[14px]  duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>

        <div className="border border-set border-white my-8 opacity-50"></div>

        <div className="px-2">
          <h5 className="text-white text-xl font-bold text-center underline underline-offset-8">
            ABOUT BAU24 INFO
          </h5>
          <p className="text-white opacity-75 pt-3 mx-auto max-w-7xl text-xl text-center font-light capitalize">
            Bau24 Info is a comprehensive database of contacts and products
            related to construction. From land and property searches to
            construction, interior design, manufacturers, home economics, and
            specialist lawyers, all within just a few clicks. Companies and
            manufacturers can maintain and expand their content and offerings
            themselves.
          </p>
        </div>
        <div className="flex gap-[23px] items-center justify-center mt-[25px] flex-wrap">
          <div className="bg-white p-[6px] rounded-[5px]">
            <img
              src="/svg/svg13.svg"
              alt="Baushop Icon"
              width={75}
              height={32}
            />
          </div>
          <div className="bg-white p-[6px] rounded-[5px]">
            <img
              src="/svg/svg15.svg"
              alt="Baurent Icon"
              width={74}
              height={32}
            />
          </div>
          <div className="bg-white p-[6px] rounded-[5px]">
            <img
              src="/svg/svg11.svg"
              alt="Bauimmofinder Icon"
              width={124}
              height={32}
            />
          </div>
          <div className="bg-white p-[6px] rounded-[5px]">
            <img
              src="/svg/svg10.svg"
              alt="Baujobfinder Icon"
              width={111}
              height={32}
            />
          </div>
          <div className="bg-white p-[6px] rounded-[5px]">
            <img
              src="/svg/svg12.svg"
              alt="Baufinanzen Icon"
              width={107}
              height={32}
            />
          </div>
          <div className="bg-white p-[6px] rounded-[5px]">
            <img
              src="/svg/svg9.svg"
              alt="Bauversicherung Icon"
              width={147}
              height={32}
            />
          </div>

          <div className="bg-white p-[6px] rounded-[5px]">
            <img
              src="/svg/svg14.svg"
              alt="Baupay Icon"
              width={67}
              height={32}
            />
          </div>
        </div>

        <div className="border-t border-white/10 my-8"></div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h6 className="uppercase text-xl font-normal">Category</h6>
            <ul className="font-light opacity-75 text-lg">
              <li className="pt-5 pb-2">
                <a href="#">Manufacturer</a>
              </li>
              <li className="pb-2">
                <a href="#">Specialist retailers</a>
              </li>
              <li className="pb-2">
                <a href="#">Handwerk</a>
              </li>
              <li className="pb-2">
                <a href="#">Crafts</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="font-light opacity-75 text-lg mt-5">
              <li className="pt-5 pb-2">
                <a href="#">Architects</a>
              </li>
              <li className="pb-2">
                <a href="#">Construction Lawyers</a>
              </li>
              <li className="pb-2">
                <a href="#">Prefabricated Houses</a>
              </li>
              <li className="pb-2">
                <a href="#">Trade Fairs</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="uppercase text-xl font-normal">Legal</h6>
            <ul className="font-light opacity-75 text-lg">
              <li className="pt-5 pb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="pb-2">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="pb-2">
                <a href="#">Terms of Use</a>
              </li>
              <li className="pb-2">
                <a href="#">Imprint</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="uppercase text-xl font-normal">Talk To Us</h6>
            <ul className="font-light opacity-75 text-lg">
              <li className="pt-5 pb-2">
                <a href="mailto:support@bau24.de">support@bau24.de</a>
              </li>
              <li className="pb-2">
                <a href="tel:+49619567555">+49 (0) 6195 675 55</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 my-8"></div>

        <div className="flex items-center justify-between flex-wrap gap-4 pb-5">
          <div>
            <a href="/">
              <img
                src="https://bau24dev.de/info/_next/image/?url=%2Finfo%2F_next%2Fstatic%2Fmedia%2Ffooter-logo.0c2e9027.png&w=128&q=75"
                alt="Footer Logo"
                width={108}
                height={50}
              />
            </a>
          </div>

          <div>
            <p className="text-white font-normal opacity-75">
              © 2025 <span className="underline cursor-pointer">Bau24.de</span>.
              All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-4">
            <div className="cursor-pointer">
              <a href="">
               <img
                  src="/svg/facebook.svg"
                  alt="facebook Icon"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div className="cursor-pointer">
              <a href="">
                <img
                  src="/svg/linkedin.svg"
                  alt="linkedin Icon"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div className="cursor-pointer">
              <a href="">
               <img
                  src="/svg/twitter.svg"
                  alt="twitter Icon"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
