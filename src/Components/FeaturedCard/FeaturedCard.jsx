import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiSquareRounded } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import "./FeaturedCard.css";

const FeaturedCard = ({ featured }) => {
  const [open, setOpen] = useState(false);
  const { title, location, image, description, area, room, washroom, price } =
    featured;

  return (
    <>
      <div className=" bg-nu10">
        <div className="relative overflow-hidden group mb-6 ">
          <div className="absolute inset-0 bg-[#e8e9eaa4] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <img className="w-full h-[360px]" src={image} alt="" />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex justify-center items-center gap-4">
              <Link to={""} className="">
                <button className="bg-nu10 text-nu20 px-3 py-3 rounded-full">
                  <FaPlus className="text-[20px] font-bold text-primary1 " />
                </button>
              </Link>
              <Link to={""} className="">
                <button className="bg-nu10 text-nu20 px-3 py-3 rounded-full">
                  <MdOutlineFavoriteBorder className="text-[20px] font-bold  text-primary1" />
                </button>
              </Link>

              <div className="relative inline-block">
                <button
                  onClick={() => setOpen(!open)}
                  className="bg-nu10 text-nu20 px-3 py-3 rounded-full"
                >
                  <FiShare2 className="text-[20px] font-bold text-primary1" />
                </button>

                <div
                  className={`absolute -top-20 -right-16 bg-nu60 rounded px-3 py-3 duration-300 ${
                    open
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-5 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <Link to="#" className="px-1 py-1">
                      <FaFacebookF className="text-nu10" />
                    </Link>
                    <Link to="#" className="px-1 py-1">
                      <FaTwitter className="text-nu10" />
                    </Link>
                    <Link to="#" className="px-1 py-1">
                      <IoLogoGoogleplus className="text-nu10" />
                    </Link>
                    <Link to="#" className="px-1 py-1">
                      <FaPinterest className="text-nu10" />
                    </Link>
                    <Link to="#" className="px-1 py-1">
                      <FaLinkedinIn className="text-nu10" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-11 left-5 z-30">
            <p className="px-6 py-2 bg-primary1 font-semibold text-nu10 rounded-full">
              {price}/m
            </p>
          </div>
          <div className="px-4 py-4 z-10">
            <h5 className="text-nu60 mb-3">{title}</h5>
            <p className="text-nu40 mb-2 flex items-center gap-1">
              <IoLocationOutline className="text-primary1" /> {location}
            </p>
            <p className="text-nu40 mb-3">{description}</p>
            <div className="flex items-center gap-3">
              <p className="px-2 py-1 border-2 border-nu40 text-nu60 flex items-center gap-1">
                <BiSquareRounded className="text-primary1" /> {area}
              </p>
              <p className="px-2 py-1 border-2 border-nu40 text-nu60 flex items-center gap-2">
                <FaBed className="text-primary1" /> {room}
              </p>
              <p className="px-2 py-1 border-2 border-nu40 text-nu60 flex items-center gap-2">
                <FaBath className="text-primary1" />
                {washroom}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
