import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="bg-primary1">
        <div className="container-2">
          <div class="z-40 relative">
            <div
              className="grid grid-cols-12 gap-6 lg:px-10 md:px-8 sm:px-6 px-4 lg:py-16 md:py-14 sm:py-12 py-10"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2800"
            >
              <div className="lg:col-span-6 col-span-12">
                <div className="">
                  <h3 className="font-fontMont text-nu30 font-medium mb-3">
                    Subscribe Newsletter
                  </h3>
                  <p className="text-nu10">Choose from different template and lay them out.</p>
                </div>
              </div>

              <div className="lg:col-span-6 col-span-12">
                <form>
                  <div className="flex max-xl:flex-wrap items-center">
                    <input
                      type="text"
                      className="px-4 sm:py-3 py-2.5 w-[60%] bg-nu10 text-nu30 placeholder:text-nu20 rounded-none rounded-l-full"
                      placeholder="Enter Your Email..."
                    />
                    <button className="bg-nu20 border-2 border-nu20 px-4 py-2.5 rounded-r-full">
                      <span className="sm:text-[16px] text-[14px] text-nu10 font-semibold">
                        SEND
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
