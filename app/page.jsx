import { Search } from "lucide-react";
import "./globals.css";
import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function MainContent() {
  return (
    <>
    <Header/>
      <section className="mt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <Image
              src="/search-imag.png"
              alt="Construction Illustration"
              width={295}
              height={200}
              className="w-[220px] sm:w-[260px] md:w-[295px] h-auto"
            />
          </div>

          <h1 className="mt-6 text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-bold text-charcoal">
            Centralized Construction Platform
          </h1>
          <p className="mt-2 text-[0.95rem] sm:text-base md:text-lg font-medium text-charcoal pb-8">
            Find products, services & experts in one place.
          </p>

          <div className="flex justify-center mb-16 px-2 sm:px-0">
            <div className="flex w-full max-w-[688px]">
              <div className="flex items-center border rounded-full overflow-hidden w-full h-[52px] border-slate-400">
                <div className="flex items-center px-4 sm:px-5">
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.32687 18.0887C13.6855 18.0887 17.2188 14.5554 17.2188 10.1967C17.2188 5.83813 13.6855 2.30478 9.32687 2.30478C4.96826 2.30478 1.4349 5.83813 1.4349 10.1967C1.4349 14.5554 4.96826 18.0887 9.32687 18.0887ZM18.6537 10.1967C18.6537 15.3478 14.478 19.5236 9.32687 19.5236C4.17578 19.5236 0 15.3478 0 10.1967C0 5.04565 4.17578 0.869873 9.32687 0.869873C14.478 0.869873 18.6537 5.04565 18.6537 10.1967Z"
                      fill="#919EAB"
                    ></path>
                    <path
                      d="M14.8425 17.7187C14.8848 17.7761 14.9319 17.8311 14.9839 17.883L20.5089 23.408C21.0693 23.9684 21.9778 23.9684 22.5382 23.408C23.0985 22.8477 23.0985 21.9392 22.5382 21.3788L17.0131 15.8537C16.9612 15.8018 16.9062 15.7547 16.8489 15.7123C16.286 16.4787 15.6088 17.1559 14.8425 17.7187Z"
                      fill="#919EAB"
                    ></path>
                  </svg>
                </div>

                <input
                  type="text"
                  placeholder="Search for products, experts, jobs..."
                  className="flex-1 outline-none text-gray-600 text-sm sm:text-base md:text-base font-normal px-2 sm:px-0"
                />

                <button className="bg-sky-700 text-white text-sm sm:text-sm border font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full h-[40px] flex items-center m-1">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
