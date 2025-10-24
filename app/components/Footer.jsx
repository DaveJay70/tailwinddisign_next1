import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-3">
            <Image
              src="/logo.png"
              alt="BAU24 Logo"
              width={100}
              height={24}
              className="h-6 w-auto"
            />
          </div>
          <div className="border-b border-navy-blue max-w-xs mx-auto"></div>
          <p className="text-navy-blue font-normal mt-2 opacity-75 text-sm sm:text-base">
            BAU24.de Ist Der Weltweit Führende Anbieter Digitaler
            Dienstleistungen Für Die Bauindustrie. Die Plattform Vereint
            Produzenten, Branchenexperten, Architekten, Haus- Und Landbesitzer
            Sowie Fachleute An Einem Zentralen Ort Und Fördert So Eine
            Effiziente Zusammenarbeit Und Den Austausch Von Wissen Und
            Ressourcen.
          </p>
        </div>
      </div>

      <footer className="bg-gray-100 border-t border-gray-200 pt-8 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 pb-8 text-center md:text-left">
            <div>
              <h6 className="uppercase text-navy-blue text-xl font-bold">
                Navigation
              </h6>
              <ul className="mt-5 text-navy-blue opacity-75 text-base font-normal space-y-2">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="uppercase text-navy-blue text-xl font-bold">
                What We Do
              </h6>
              <ul className="mt-5 text-navy-blue opacity-75 text-base font-normal space-y-2">
                <li>
                  <a href="">Manufacturers</a>
                </li>
                <li>
                  <a href="">Industry Experts</a>
                </li>
                <li>
                  <a href="">Architects</a>
                </li>
                <li>
                  <a href="">Homeowners</a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="uppercase text-navy-blue text-xl font-bold">
                LEGAL
              </h6>
              <ul className="mt-5 text-navy-blue opacity-75 text-base font-normal space-y-2">
                <li>
                  <a href="/de/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/de/terms-conditions">Terms and Conditions</a>
                </li>
                <li>
                  <a href="/de/terms-of-use">Terms of Use</a>
                </li>
                <li>
                  <a href="/de/cookiepolicy">Cookie</a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="uppercase text-navy-blue text-xl font-bold">
                TALK TO US
              </h6>
              <ul className="mt-5 text-navy-blue opacity-75 text-base font-normal space-y-2">
                <li>
                  <a href="mailto:support@ercom.com">support@ercom.com</a>
                </li>
                <li>
                  <a href="tel:+49619567555">+49 (0) 6195 675 55</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="BAU24 Logo"
                width={45}
                height={24}
                className="h-9 w-auto"
              />
            </div>

            <div className="text-center md:text-left">
              &copy; 2025{" "}
              <Link href="/" className="underline">
                BAU24.de
              </Link>{" "}
              All rights reserved.
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <a href="#" className="cursor-pointer">
                <svg
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.25"
                    x="1.13964"
                    y="1.47045"
                    width="42.1557"
                    height="42.1557"
                    rx="21.0779"
                    stroke="#1B1F47"
                  ></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.0543 30.8684V22.5476H18.334V19.6801H20.0543V17.9584C20.0543 15.6191 21.0257 14.228 23.7856 14.228H26.0832V17.0959H24.647C23.5727 17.0959 23.5016 17.4966 23.5016 18.2445L23.4977 19.6797H26.0995L25.7951 22.5473H23.4977V30.8684H20.0543Z"
                    fill="#1B1F47"
                  ></path>
                </svg>
              </a>

              <a href="#" className="cursor-pointer">
                <svg
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.25"
                    x="0.935052"
                    y="1.47021"
                    width="42.1557"
                    height="42.1557"
                    rx="21.0779"
                    stroke="#1B1F47"
                  ></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1294 29.7591H14.8013V19.7749H18.1294V29.7591Z"
                    fill="#1B1F47"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4554 17.5561H16.4365C15.4433 17.5561 14.8013 16.8162 14.8013 15.8915C14.8013 14.9472 15.4629 14.228 16.4749 14.228C17.4869 14.228 18.1102 14.9472 18.1294 15.8915C18.1294 16.8162 17.4869 17.5561 16.4554 17.5561Z"
                    fill="#1B1F47"
                  ></path>
                </svg>
              </a>

              <a href="#" className="cursor-pointer">
                <svg
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.25"
                    x="0.731927"
                    y="1.47033"
                    width="42.1557"
                    height="42.1557"
                    rx="21.0779"
                    stroke="#1B1F47"
                  ></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.5997 19.693L21.631 20.2208L21.11 20.1562C19.2134 19.9084 17.5566 19.0682 16.1498 17.6571L15.4621 16.957L15.2849 17.474C14.9098 18.6266 15.1495 19.8438 15.931 20.6624C16.3478 21.1149 16.254 21.1795 15.535 20.9102C15.2849 20.824 15.0661 20.7594 15.0452 20.7917C14.9723 20.8671 15.2224 21.8473 15.4204 22.2351C15.6913 22.7737 16.2436 23.3015 16.848 23.6139L17.3586 23.8616L16.7542 23.8724C16.1707 23.8724 16.1498 23.8832 16.2123 24.1094C16.4207 24.8095 17.244 25.5528 18.161 25.8759L18.807 26.1021L18.2443 26.4468C17.4107 26.9423 16.4312 27.2224 15.4516 27.2439C14.9827 27.2547 14.5972 27.2978 14.5972 27.3301C14.5972 27.4378 15.8685 28.0411 16.6083 28.278C18.8279 28.9782 21.4643 28.6766 23.4441 27.4809C24.8509 26.63 26.2577 24.9388 26.9142 23.3015C27.2685 22.429 27.6227 20.8348 27.6227 20.07C27.6227 19.5745 27.654 19.5099 28.2376 18.9174C28.5814 18.5727 28.9045 18.1957 28.967 18.088C29.0712 17.8834 29.0608 17.8834 28.5293 18.0665C27.6436 18.3896 27.5185 18.3465 27.9562 17.8618C28.2792 17.5171 28.6648 16.8924 28.6648 16.7092C28.6648 16.6769 28.5085 16.7308 28.3313 16.8277C28.1438 16.9354 27.727 17.097 27.4143 17.194L26.8516 17.3771L26.341 17.0216C26.0597 16.8277 25.6637 16.6123 25.4553 16.5477C24.9238 16.3969 24.1111 16.4184 23.6317 16.5907C22.3292 17.0755 21.5059 18.325 21.5997 19.693Z"
                    fill="#1B1F47"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
