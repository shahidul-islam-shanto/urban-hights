import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <div className="py-4 bg-secondary1">
        <div className="container-2">
          <div className="flex justify-between items-center">
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
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 border-r-2 pr-3">
                <div className="flex items-center gap-1">
                  <span>
                    <MdOutlineEmail className="text-[20px] text-nu40" />
                  </span>
                  <p className="text-nu40">Email:</p>
                </div>
                <p className="text-nu40 ">info@citilights.com</p>
              </div>
              <div className="">
                <button className="flex items-center gap-1">
                  <span>
                    <FiLogIn />
                  </span>
                  <span>Login</span>
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
