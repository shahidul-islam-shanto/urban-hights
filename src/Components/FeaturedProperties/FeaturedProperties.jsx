// import React, { useEffect, useState } from "react";
// import FeaturedPropertiesCard from "../FeaturedPropertiesCard/FeaturedPropertiesCard";

// const FeaturedProperties = ({ title, description }) => {
//   const [propertiesCard, setPropertiesCard] = useState([]);

//   useEffect(() => {
//     fetch("feature.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setPropertiesCard(data);
//       });
//   }, []);
//   return (
//     <>
//       <div className="xl:pt-20 md:pt-18 sm:pt-16 pt-12 bg-secondary1 overflow-hidden">
//         <div className="container-2">
//           <div className="mb-12">
//             <h1 className="text-nu20 mb-4">{title}</h1>
//             <p className="text-nu60">{description}</p>
//           </div>
//           <div className="">
//             {propertiesCard.map((items) => (
//               <FeaturedPropertiesCard
//                 key={items.bookId}
//                 propertiesCard={items}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeaturedProperties;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import FeaturedPropertiesCard from "../FeaturedPropertiesCard/FeaturedPropertiesCard";

const FeaturedProperties = ({ title, description }) => {
  const [propertiesCard, setPropertiesCard] = useState([]);

  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((data) => {
        setPropertiesCard(data);
      });
  }, []);

  return (
    <>
      <div className="xl:pt-20 md:pt-18 sm:pt-16 pt-12 2xl:px-10 sm:px-10 px-3 bg-secondary1 overflow-hidden">
        <div className="container-2">
          <div className="text-center mb-12">
            <h1 className="text-nu20 mb-4" data-aos="fade-left">{title}</h1>
            <p className="text-nu50" data-aos="fade-right">{description}</p>
          </div>
          <div className="">
            <Swiper
              spaceBetween={30}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1400: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 2,
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
              {propertiesCard.map((property, index) => (
                <SwiperSlide key={index}>
                  <FeaturedPropertiesCard propertiesCard={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
