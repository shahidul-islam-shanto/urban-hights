import React from "react";
import "./BuyOrSell.css";
import { Link } from "react-router-dom";

const BuyOrSell = () => {
  return (
    <>
      <div className="buyOrSell-section px-6 lg:py-40 md:py-32 sm:py-28 py-20 overflow-hidden">
        <div className="container-2">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-nu10 mb-6">
              Buy or sell your house in few second <br /> with UrbanHight
            </h1>
            <div className="flex justify-center items-center gap-4">
              <Link>
                <button className="px-5 py-2 bg-primary1 rounded-full text-nu10">
                  Learn more
                </button>
              </Link>
              <Link>
                <button className="px-5 py-2 bg-nu10  rounded-full text-primary1 ">
                  Buy now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyOrSell;
