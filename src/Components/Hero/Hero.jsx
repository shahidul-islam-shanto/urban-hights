import React, { useState } from "react";
import "./Hero.css";
import SelectInput from "../Select/SelectInput";

const Hero = () => {
  const [price, setPrice] = useState(50);
  const [area, setArea] = useState(50);
  return (
    <div>
      <div className="hero-section h-screen  md:px-10 sm:px-6 px-3 ">
        <div className="container-2">
          <div className="relative z-10">
            <div className="bg-[#e8e9eabb] xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 xl:py-16 lg:py-12 md:py-10 sm:py-8 py-6  w-full absolute left-1/2 xl:top-[240px] md:top-[160px]  top-[30px] -translate-x-1/2 z-10">
              <div className="grid grid-cols-12 gap-6 ">
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="">
                    <SelectInput />
                  </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="">
                    <SelectInput />
                  </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="">
                    <SelectInput />
                  </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="">
                    <SelectInput />
                  </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="">
                    <SelectInput />
                  </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="">
                    <SelectInput />
                  </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="mb-4 text-xl font-semibold">Price</div>
                  <div className="relative w-full max-w-lg">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full h-2 bg-primary1 rounded-lg appearance-none"
                    />
                    <div className="absolute left-0 text-sm">{price}</div>
                  </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="mb-4 text-xl font-semibold">Area</div>
                  <div className="relative w-full max-w-lg">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full h-2 bg-primary1 rounded-lg appearance-none"
                    />
                    <div className="absolute right-0 text-sm">{area}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
