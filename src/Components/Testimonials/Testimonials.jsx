import React from "react";
import testimonials from "../../assets/image/testimonials.png";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TestimonialsText from "./TestimonialsText";

const Testimonials = () => {
  return (
    <>
      <div className="xl:pt-20 md:pt-18 sm:pt-16 pt-12 ">
        <div className="grid grid-cols-12 items-center bg-nu30">
          <div className="lg:col-span-6 col-span-12">
            <img
              className="w-full 2xl:h-full lg:h-[500px]"
              src={testimonials}
              alt=""
            />
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 xl:py-16 lg:py-14 md:py-12 py-10">
              <h2 className="mb-6 text-nu20">Testimonials</h2>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  578: {
                    slidesPerView: 1,
                  },
                  375: {
                    slidesPerView: 1,
                  },
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <TestimonialsText
                    name={"Aminul Islam"}
                    comment={`As first-time home buyers, we were very nervous and unsure about
                            the entire process. But their team guided us step-by-step and made
                            everything simple and stress-free. From property visits to
                            documentation and mortgage support — they handled every detail
                            responsibly. Their friendly attitude and deep market knowledge truly
                            impressed us. We will confidently choose them again in the future!`}
                    timeline={"First-time Buyer"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialsText
                    name={"Farhana Akter"}
                    comment={`I was trying to sell my apartment but could not find suitable buyers. Their agency reached out and immediately started professional marketing — high-quality photos, active online promotion, and carefully arranged client visits. Within a short time, I received a better price than expected. They also supported every step of the paperwork. A truly outstanding service!`}
                    timeline={"Property Seller"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialsText
                    name={"Mehedi Hasan"}
                    comment={`I needed a high-end apartment in a prime area for my business needs. The team understood my requirements and showed me exclusive properties with security, convenience, and premium amenities. The final apartment I selected perfectly matches my lifestyle. Excellent communication, quick responses — a truly premium real estate partner!`}
                    timeline={"Entrepreneur"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialsText
                    name={"Rashida & Family"}
                    comment={`We were moving from another city and had no idea where to start. This company supported us with details about schools, hospitals, transportation, and safe family-friendly neighborhoods. My entire family is happy and comfortable in our new home. We are very thankful for their genuine care and support.`}
                    timeline={"Relocated Clients"}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
