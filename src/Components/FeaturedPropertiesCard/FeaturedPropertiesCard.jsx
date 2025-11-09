import React from "react";
import { BiSquareRounded } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const FeaturedPropertiesCard = ({ propertiesCard }) => {
  const { title, location, image, description, area, room, washroom, price } =
    propertiesCard;
  return (
    <>
      <div className="bg-nu10 overflow-hidden" data-aos="zoom-in">
        <div className="relative overflow-hidden group mb-6 ">
          <img className="w-full h-[360px]" src={image} alt="" />
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

export default FeaturedPropertiesCard;
