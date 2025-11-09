import React from "react";
import gallery1 from "../../assets/image/gallery/gallery1.png";
import gallery2 from "../../assets/image/gallery/gallery2.png";
import gallery3 from "../../assets/image/gallery/gallery3.png";
import gallery4 from "../../assets/image/gallery/gallery4.png";
import gallery5 from "../../assets/image/gallery/gallery5.png";
import gallery6 from "../../assets/image/gallery/gallery6.png";
import "./RealityProperty.css";

const RealityProperty = ({ title, description }) => {
  return (
    <>
      <div className="xl:pt-20 md:pt-18 sm:pt-16 pt-12 overflow-hidden">
        <div className="container-2">
          <div className="mb-12 text-center">
            <h1 className="text-nu20 mb-4" data-aos="fade-left">
              {title}
            </h1>
            <p className="text-nu60" data-aos="fade-right">
              {description}
            </p>
          </div>
          <div className="grid gap-3 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4">
            <img
              src={gallery1}
              className="w-full h-full object-cover rounded-lg lg:col-span-2 lg:row-span-3"
              data-aos="zoom-in"
              alt=""
            />
            <img
              src={gallery2}
              className="w-full h-48 sm:h-full object-cover rounded-lg"
              data-aos="zoom-in"
              alt=""
            />
            <img
              src={gallery3}
              className="w-full h-48 sm:h-full object-cover rounded-lg"
              data-aos="zoom-in"
              alt=""
            />
            <div
              className="
               relative rounded-lg lg:col-span-2 lg:row-span-3"
              data-aos="zoom-in"
            >
              <img
                src={gallery6}
                className="w-full h-full object-cover rounded-lg"
                data-aos="zoom-in"
                alt=""
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary1  3xl:px-80 2xl:px-60 xl:px-50 lg:px-40 md:px-34 px-24 2xl:py-[60%] xl:py-[50%] lg:py-[45%] py-[50%] bg-[#ffffffbd]  flex flex-col justify-center items-center text-center rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
                  New Jersey
                </h2>
                <p className="text-blue-600 font-medium mt-1">5 Properties</p>
                <button className="mt-2 text-sm font-medium text-blue-600 underline hover:text-blue-800">
                  View All
                </button>
              </div>
            </div>
            <img
              src={gallery4}
              className="w-full h-48 sm:h-full object-cover rounded-lg" data-aos="zoom-in"
              alt=""
            />
            <img
              src={gallery5}
              className="w-full h-48 sm:h-full object-cover rounded-lg" data-aos="zoom-in"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RealityProperty;
