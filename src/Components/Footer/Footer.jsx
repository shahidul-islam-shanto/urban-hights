import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerProperty1 from "../../assets/image/footer/footer-property1.png";
import footerProperty2 from "../../assets/image/footer/footer-property2.png";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="xl:py-20 md:py-18 sm:py-16 py-12 footer-section 2xl:px-10 sm:px-10 px-3 overflow-hidden">
        <div className="container-2">
          <div className="grid grid-cols-12 lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <div className="lg:col-span-3 sm:col-span-6 col-span-12">
              <div>
                <div className="sm:mb-5 mb-4">
                  <Link
                    to={""}
                    className="flex items-center gap-2"
                    data-aos="fade-right"
                    data-aos-duration="2200"
                  >
                    <h3 className="text-nu10 font-fontMont">About Us</h3>
                  </Link>
                </div>
                <p
                  className="text-nu10 font-fontMont font-normal"
                  data-aos="fade-right"
                  data-aos-duration="2400"
                >
                  UrbanHights brings wide range of choice, steadily updated
                  property list and market trend for you to figure out your
                  right decision. You are now at right place for your real
                  estate research.
                </p>
              </div>
            </div>
            <div className="xl:col-span-3 lg:col-span-3 col-span-12 sm:mt-0 mt-4">
              <div>
                <h4
                  className="text-nu10 font-fontMont"
                  data-aos="fade-right"
                  data-aos-duration="1400"
                >
                  Featured Property
                </h4>
                <ul className="sm:mt-6 mt-4">
                  <li
                    className="mb-4"
                    data-aos="fade-right"
                    data-aos-duration="1600"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="w-[100px] h-[60px] rounded-lg"
                        src={footerProperty1}
                        alt=""
                      />
                      <div className="">
                        <p className="text-nu10 ">For open house for rent</p>
                        <p className="text-nu10 ">256D#20D</p>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1600">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-[100px] h-[60px] rounded-lg"
                        src={footerProperty2}
                        alt=""
                      />
                      <div className="">
                        <p className="text-nu10 ">For Rent</p>
                        <p className="text-nu10 ">Aier</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:col-span-2 lg:col-span-2 col-span-12 md:pt-0 pt-4">
              <div>
                <h4
                  className="text-nu10 font-fontMont"
                  data-aos="fade-right"
                  data-aos-duration="1400"
                >
                  Useful links
                </h4>
                <ul className="sm:mt-6 mt-4">
                  <li
                    className="mb-3"
                    data-aos="fade-right"
                    data-aos-duration="1600"
                  >
                    <Link to={"javascript:void(0)"} className="text-nu10">
                      Teams of use
                    </Link>
                  </li>

                  <li
                    className="mb-3"
                    data-aos="fade-right"
                    data-aos-duration="1600"
                  >
                    <Link to={"javascript:void(0)"} className="text-nu10">
                      Privacy Policy
                    </Link>
                  </li>
                  <li
                    className="mb-3"
                    data-aos="fade-right"
                    data-aos-duration="1600"
                  >
                    <Link to={"javascript:void(0)"} className="text-nu10">
                      Contact Support
                    </Link>
                  </li>
                  <li
                    className="mb-3"
                    data-aos="fade-right"
                    data-aos-duration="1600"
                  >
                    <Link to={"javascript:void(0)"} className="text-nu10">
                      Knowledgebase
                    </Link>
                  </li>
                  <li
                    className="mb-3"
                    data-aos="fade-right"
                    data-aos-duration="1600"
                  >
                    <Link to={"javascript:void(0)"} className="text-nu10">
                      Careers
                    </Link>
                  </li>
                  <li
                    className="mb-3"
                    data-aos="fade-right"
                    data-aos-duration="1600"
                  >
                    <Link to={"javascript:void(0)"} className="text-nu10">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:col-span-4 lg:col-span-4 col-span-12 md:pt-0 pt-4">
              <div>
                <h4
                  className="text-nu10 font-fontMont"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  Contact info
                </h4>
                <ul className="sm:mt-6 mt-4">
                  <li
                    className="mb-3"
                    data-aos="fade-right"
                    data-aos-duration="2600"
                  >
                    <div class="text-nu10 text-[18px] font-normal flex items-center">
                      <span class="px-2 py-2.5 bg-[#3889bcce] rounded-l-md">
                        <MdLocationOn className="md:text-[24px] text-[14px]" />
                      </span>
                      <span className="px-2 py-2 bg-[#3889bc8c] rounded-r-md">
                        376 Baker Street, New York
                      </span>
                    </div>
                  </li>
                  <li
                    className="mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2200"
                  >
                    <Link
                      to={"tel:+1234567890"}
                      class="text-nu10 text-[18px] font-normal flex items-center gap-2"
                    >
                      <div class="text-nu10 text-[18px] font-normal flex items-center">
                        <span class="px-2 py-2.5 bg-[#3889bcce] rounded-l-md">
                          <FaPhone className="md:text-[24px] text-[14px]" />
                        </span>
                        <span className="px-2 py-2 bg-[#3889bc8c] rounded-r-md">
                          (+01)-486-2857
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="mt-3"
                    data-aos="fade-right"
                    data-aos-duration="2400"
                  >
                    <Link
                      to={"mailto:info@yourcompany.com"}
                      className="text-nu10 text-[18px] font-normal flex items-center gap-2"
                    >
                      <div class="text-nu10 text-[18px] font-normal flex items-center">
                        <span class="px-2 py-2.5 bg-[#3889bcce] rounded-l-md">
                          <MdOutlineMail className="md:text-[24px] text-[14px]" />
                        </span>
                        <span className="px-2 py-2 bg-[#3889bc8c] rounded-r-md">
                          info@yourcompany.com
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
