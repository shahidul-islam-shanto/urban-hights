import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <div className="py-4 3xl:px-0 px-10 bg-secondary1">
        <div className="container-2">
          <div className="flex max-md:flex-wrap md:justify-between justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <Link to={"javascript:void(0)"} className="px-1 py-1">
                <FaFacebookF className="text-[20px] text-nu40" />
              </Link>
              <Link to={"javascript:void(0)"} className="px-1 py-1">
                <FaTwitter className="text-[20px] text-nu40" />
              </Link>
              <Link to={"javascript:void(0)"} className="px-1 py-1">
                <FaGooglePlusG className="text-[24px] text-nu40" />
              </Link>
              <Link to={"javascript:void(0)"} className="px-1 py-1">
                <FaPinterest className="text-[20px] text-nu40" />
              </Link>
            </div>
            <div className="flex max-sm:flex-wrap sm:justify-around justify-center items-center gap-3">
              <div className="flex items-center gap-1 border-r-2 border-nu50 pr-4">
                <div className="flex items-center gap-1">
                  <span>
                    <MdOutlineEmail className="text-[20px] text-nu40" />
                  </span>
                  <p className="text-nu50">Email:</p>
                </div>
                <p className="text-nu50 ">info@citilights.com</p>
              </div>
              <div className="border-r-2 border-nu50 pr-4">
                <button className="flex items-center gap-1">
                  <span>
                    <FiLogIn className="text-nu50" />
                  </span>
                  <span className="text-nu50">Login</span>
                </button>
              </div>
              <div className="">
                <button className="flex items-center gap-1">
                  <span>
                    <IoKeyOutline className="text-nu50" />
                  </span>
                  <span className="text-nu50">Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
