import React, { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { IoIosArrowForward } from "react-icons/io";

const OurFeatured = ({ title, description }) => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data);
      });
  }, []);

  return (
    <>
      <div className="py-16 sm:px-12 px-3 bg-secondary1">
        <div className="container-2">
          <div className="">
            <div className="text-center mb-12">
              <h1 className="text-nu20 mb-4 ">{title}</h1>
              <p className="text-nu50">{description}</p>
            </div>
            <div className="md:mb-10 sm:mb-8 mb-6">
              <div className="grid grid-cols-12 gap-6">
                {featured.map((items) => (
                  <div
                    key={items.bookId}
                    className="xl:col-span-4 md:col-span-6 col-span-12"
                  >
                    <FeaturedCard featured={items} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <button className="px-3 py-1 border-2 border-primary1 hover:bg-primary1 text-nu20">1</button>
              <button className="px-3 py-1 border-2 border-primary1 hover:bg-primary1 text-nu20">2</button>
              <button className="px-2 py-2 border-2 border-primary1 hover:bg-primary1 text-nu20">
                <IoIosArrowForward className="text-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatured;
