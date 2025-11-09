import React from "react";
import testimonialsMan from "../../assets/image/testimonials-man.png";

const TestimonialsText = ({name, comment, timeline}) => {
  return (
    <>
      <div className="" data-aos="zoom-in">
       
         
          <p className="text-nu60 mb-5">
            {comment}
           
          </p>
          <div className="flex items-center gap-3">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={testimonialsMan}
              alt=""
            />
            <div className="">
              <h5 className="text-nu20 mb-1">{name}</h5>
              <p className="text-nu60">{timeline}</p>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default TestimonialsText;
