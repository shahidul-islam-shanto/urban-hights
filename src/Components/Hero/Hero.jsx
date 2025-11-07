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
            <div className=" bg-[#e8e9eabb] rounded-md xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 xl:py-20 lg:py-12 md:py-10 sm:py-8 py-6  w-full absolute left-1/2 xl:top-60 md:top-60  top-[30px] -translate-x-1/2 z-10">
              <div className="relative">
                <div className="absolute xl:-top-25 md:-top-18 -top-10 left-1/2 -translate-x-1/2">
                  <h5 className="px-4 py-2 overflow-hidden md:w-[500px] w-[300px] text-center rounded-full bg-primary1 text-nu10 font-medium md:text-[24px] text-[14px] ">THE BEST WAY TO FIND YOUR HOME</h5>
                </div>
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
                 <div className="absolute xl:-bottom-25 md:-bottom-18 -bottom-10 left-1/2 -translate-x-1/2">
                  <h5 className="px-4 py-2 overflow-hidden md:w-[300px] w-[200px] text-center rounded-full bg-nu20 text-nu10 font-medium md:text-[24px] text-[14px] ">Search Property</h5>
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
