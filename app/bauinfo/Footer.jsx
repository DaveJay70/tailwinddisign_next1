"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#4A0959] pt-16 text-white">
      <div className="container mx-auto w-auto px-6 sm:px-10 lg:px-20">
        <h1 className="sm:text-[40px] text-2xl text-center font-bold">
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
              className="w-[550px] h-10 px-4 rounded-full bg-white text-gray-800 outline-none focus:ring-4 focus:ring-[#9D55AE]/50 transition-all duration-300"
            />
            <button
              type="submit"
              className="subscribebutton flex items-center justify-center h-[42px] px-6 rounded-full  font-medium  duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>

        <div className="border-t border-white/10 my-8"></div>

        <div className="px-2 text-center">
          <h5 className="text-xl font-bold underline underline-offset-8">
            ABOUT BAU24 INFO
          </h5>
          <p className="opacity-75 pt-3 mx-auto max-w-5xl text-lg font-light text-[20px] leading-[28px]">
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
              src="/svg/svg9.svg"
              alt="Bauversicherung Icon"
              width={147}
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
              src="/svg/svg11.svg"
              alt="Bauimmofinder Icon"
              width={124}
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
              src="/svg/svg13.svg"
              alt="Baushop Icon"
              width={75}
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
          <div className="bg-white p-[6px] rounded-[5px]">
            <img
              src="/svg/svg15.svg"
              alt="Baurent Icon"
              width={74}
              height={32}
            />
          </div>
        </div>

        <div className="border-t border-white/10 my-8"></div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h6 className="uppercase text-xl font-semibold">Category</h6>
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
            <h6 className="uppercase text-xl font-semibold">Legal</h6>
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
            <h6 className="uppercase text-xl font-semibold">Talk To Us</h6>
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

        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-5">
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
            <p className="font-normal opacity-75 text-sm sm:text-base text-center sm:text-left">
              © 2025 <span className="underline cursor-pointer">Bau24.de</span>.
              All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-4 justify-center sm:justify-start">
            <a
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-[#4A0959]"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>

            <a
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-[#4A0959]"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24V7.98h5V24H0zm7.5-16.02h4.78v2.16h.07c.66-1.25 2.28-2.57 4.7-2.57 5.02 0 5.95 3.3 5.95 7.59V24h-5v-7.73c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.1V24h-5V7.98z" />
              </svg>
            </a>

            <a
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-[#4A0959]"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.562 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.919 4.919 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
