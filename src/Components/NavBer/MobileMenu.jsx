import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <nav className="bg-nu10 lg:hidden block w-full z-20 top-0 left-0 ">
        <ul className="max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-6">
          <div className="">
            <Link to={"/"} className="flex items-center">
              <span className="fs-three">Urban</span>{" "}
              <span className="fs-three text-primary1">Hights</span>
            </Link>
          </div>

          <button
            className="lg:hidden text-lg font-semibold"
            onClick={() => setOpen(true)}
          >
            <IoMenu className="text-[24px]" />
          </button>

          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transform transition-all duration-500 ease-in-out ${
              open
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setOpen(false)}
          ></div>

          <div
            className={`fixed top-0 right-0 w-[73%] h-screen bg-black text-white z-50 flex flex-col items-center justify-center gap-8 uppercase text-2xl transform transition-transform duration-500 ease-in-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-5 right-5 text-3xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <nav className="bg-black text-white">
              <ul className="px-4">
                {/* Dropdown */}
                <li>
                  <button
                    className="w-full flex items-center justify-between py-2"
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    Company
                    <span
                      className={`transition-transform duration-300 ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </button>

                  <ul
                    className={`overflow-hidden transition-all duration-500 pl-3 ${
                      openDropdown
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        to={"javascript:void(0)"}
                        href="#"
                        className="block py-2"
                      >
                        Demo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"javascript:void(0)"}
                        href="#"
                        className="block py-2"
                      >
                        Demo
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Other menu items — they stay visible ✅ */}
                <li>
                  <a href="#" className="block py-2">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
