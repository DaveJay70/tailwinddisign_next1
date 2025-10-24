"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-2xs ">
      <div className="container mx-auto px-4  sm:px-6 lg:px-8 h-15 flex items-center justify-between">
        <div className="flex items-center space-x-10 pl-4">
          <Image
            src="/logo.png"
            alt="BAU24 Logo"
            width={40}
            height={8}
            className="h-8 w-40"
          />
        </div>

        <nav className="hidden lg:flex items-center space-x-6 leading-normal font-normal text-gray-700 text-[6px] md:text-[8px] xl:text-[12px] 2xl:text-[18px]">
          <Link
            href="/bauinfo"
            className="rounded-md py-3 flex gap-x-2 header-1"
          >
            <img
              src="/svg/svg1.svg"
              alt="Bauinfo Icon"
              width={14}
              height={14}
            />
            <span className="nav-link ">BAUINFO</span>
          </Link>

          <Link href="/shop" className="rounded-md py-3 flex gap-x-2 w-auto ">
            <img src="/svg/svg2.svg" alt="BAU Shop" width={14} height={14} />
            <span> BAU SHOP</span>
          </Link>

          <Link
            href="/baurent"
            className="rounded-md  py-3 flex  gap-x-2 header-1"
          >
            <img src="/svg/svg3.svg" alt="BAURENT" width={14} height={14} />
            <span>BAURENT</span>
          </Link>

          <Link
            href="/immofinder"
            className="rounded-md  py-3 flex  gap-x-2 header-1"
          >
            <img src="/svg/svg4.svg" alt="IMMOFINDER" width={14} height={14} />
            <span>IMMOFINDER</span>
          </Link>

          <Link
            href="/jobfinder"
            className="rounded-md  py-3 flex  gap-x-2 header-1"
          >
            <img src="/svg/svg5.svg" alt="JOBFINDER" width={14} height={14} />
            <span>JOBFINDER</span>
          </Link>

          <Link
            href="/baufinanzen"
            className="rounded-md  py-3 flex  gap-x-2 header-1"
          >
            <img src="/svg/svg6.svg" alt="BAUFINANZEN" width={14} height={14} />
            <span>BAUFINANZEN</span>
          </Link>

          <Link
            href="/bauversicherung"
            className="rounded-md  py-3 flex  gap-x-2 header-1"
          >
            <img
              src="/svg/svg7.svg"
              alt="BAUVERSICHERUNG"
              width={14}
              height={14}
            />
            <span>BAUVERSICHERUNG</span>
          </Link>

          <Link
            href="/baupay"
            className="rounded-md  py-3 flex  gap-x-2 header-1"
          >
            <img src="/svg/svg8.svg" alt="BAUPAY" width={14} height={14} />
            <span>BAUPAY</span>
          </Link>
        </nav>

        <div className="hidden lg:flex items-center ml-4">
          <button
            className="flex items-center gap-1 border border-[#919EAB] rounded-full p-1 cursor-pointer"
            type="button"
            id="radix-_R_1qpfivb_"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            data-slot="dropdown-menu-trigger"
          >
            <Image
              src="/germany.png"
              alt="DE Flag"
              width={24}
              height={24}
              className="rounded-full  mr-1"
            />

            <span className="text-xs font-medium text-gray-700">DE</span>
            <ChevronDown size={11} className="text-gray-600" />
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-sm flex justify-between">
          <nav className="flex flex-col px-4 py-2 space-y-2 text-gray-700">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <img src="/svg/svg1.svg" alt="Bauinfo" width={14} height={14} />
              <span>BAUINFO</span>
            </Link>

            <Link
              href="/shop"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <img src="/svg/svg2.svg" alt="BAU SHOP" width={14} height={14} />
              <span>BAU SHOP</span>
            </Link>

            <Link
              href="/baurent"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <img src="/svg/svg3.svg" alt="BAURENT" width={14} height={14} />
              <span>BAURENT</span>
            </Link>

            <Link
              href="/immofinder"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <img
                src="/svg/svg4.svg"
                alt="IMMOFINDER"
                width={14}
                height={14}
              />
              <span>IMMOFINDER</span>
            </Link>

            <Link
              href="/jobfinder"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <img src="/svg/svg5.svg" alt="JOBFINDER" width={14} height={14} />
              <span>JOBFINDER</span>
            </Link>

            <Link
              href="/baufinanzen"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <img
                src="/svg/svg6.svg"
                alt="BAUFINANZEN"
                width={14}
                height={14}
              />
              <span>BAUFINANZEN</span>
            </Link>

            <Link
              href="/bauversicherung"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <img
                src="/svg/svg7.svg"
                alt="BAUVERSICHERUNG"
                width={14}
                height={14}
              />
              <span>BAUVERSICHERUNG</span>
            </Link>

            <Link
              href="/baupay"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
            >
              <img src="/svg/svg8.svg" alt="BAUPAY" width={14} height={14} />
              <span>BAUPAY</span>
            </Link>

            <div className="flex items-center mt-2 border border-gray-300 rounded-full px-2 py-0.5 hover:bg-gray-50 cursor-pointer transition w-max">
              <img
                src="https://flagcdn.com/w20/de.png"
                alt="DE Flag"
                width={12}
                height={12}
                className="rounded-full mr-1"
              />
              <span className="text-xs font-medium text-gray-700">DE</span>
              <ChevronDown size={11} className="text-gray-600" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
