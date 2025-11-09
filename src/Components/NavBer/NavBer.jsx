import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";
import { IoSearch } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";

import MobileMenu from "./MobileMenu";

const NavBer = () => {
  const [open, setOpen] = useState(false);

  const toggleSearch = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="py-2 bg-nu10 overflow-hidden">
        <nav className="relative container-2 px-2 py-4 z-40 ">
          <div className="lg:block hidden">
            <div className=" px-10 mx-auto flex justify-between items-center xl:gap-6 gap-2">
              <div className="">
                <Link to={"/"} className="flex items-center">
                  <span className="fs-three">Urban</span>{" "}
                  <span className="fs-three text-primary1">Hights</span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className=" lg:block hidden">
                <ul className=" flex items-center xl:gap-6 gap-2">
                  <li className="flex relative group cursor-pointer">
                    <Link to={"/"} className="mr-1 flex items-center gap-1">
                      Home
                    </Link>
                  </li>
                  <li className="flex relative group cursor-pointer">
                    <Link
                      to={"javascript:void(0)"}
                      className="mr-1 flex items-center gap-1"
                    >
                      <span>Properties</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </Link>

                    {/* Sub Menu */}
                    <Dropdown />
                  </li>
                  <li className="flex relative group cursor-pointer">
                    <Link
                      to={"javascript:void(0)"}
                      className="mr-1 flex items-center gap-1"
                    >
                      <span>Features</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </Link>

                    {/* Sub Menu */}
                    <Dropdown />
                  </li>
                  <li className="flex relative group cursor-pointer">
                    <Link
                      to={"javascript:void(0)"}
                      className="mr-1 flex items-center gap-1"
                    >
                      <span>Agents</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </Link>

                    {/* Sub Menu */}
                    <Dropdown />
                  </li>
                  <li className="flex relative group cursor-pointer">
                    <Link
                      to={"javascript:void(0)"}
                      className="mr-1 flex items-center gap-1"
                    >
                      <span>Submit</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </Link>

                    {/* Sub Menu */}
                    <Dropdown />
                  </li>
                  <li className="flex relative group cursor-pointer">
                    <Link
                      to={"javascript:void(0)"}
                      className="mr-1 flex items-center gap-1"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center lg:gap-4 gap-1">
                <div className="relative px-4 py-4 text-nu20 cursor-pointer border-r-2 border-nu50">
                  {/* Search / Close Icon */}
                  <div className=" py-2">
                    <IoSearch
                      onClick={toggleSearch}
                      className="text-nu20 text-[28px] cursor-pointer"
                    />
                  </div>

                  {/* Input Box */}
                  <div
                    className={`absolute right-0 top-12 w-72 h-14 rounded-lg bg-nu40 transition-all duration-300 
               ${
                 open
                   ? "opacity-100 pointer-events-auto"
                   : "opacity-0 pointer-events-none"
               }
               `}
                  >
                    <div className="absolute h-5 w-5 bg-nu40 right-3 -top-2 rotate-45"></div>

                    <input
                      type="text"
                      placeholder="Search..."
                      className="absolute placeholder:text-nu20 top-1/2 left-1/2 w-[260px] h-9 text-base transform -translate-x-1/2 -translate-y-1/2 px-3 rounded outline-none"
                    />
                  </div>
                </div>
                <div className="flex max-lg:flex-wrap items-center gap-2">
                  <span>
                    <IoMdPhonePortrait className="xl:text-[42px] md:text-[32px] text-[24px]" />
                  </span>
                  <div className="">
                    <p className="xl:text-[16px] text-[12px]">CALL US NOW</p>
                    <p className="xl:text-[16px] text-[12px]">(+01)-793-7938</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile version start */}
          <MobileMenu />
          {/* mobile version end */}
        </nav>
      </div>
    </>
  );
};

export default NavBer;
