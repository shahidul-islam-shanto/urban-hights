import React from "react";
import team1 from "../../assets/image/team/team1.png";
import team2 from "../../assets/image/team/team2.png";
import team3 from "../../assets/image/team/team3.png";

const MeetOurTeam = ({ title, description }) => {
  return (
    <>
      <div className="xl:pt-20 md:pt-18 sm:pt-16 pt-12 bg-nu10 2xl:px-10 sm:px-10 px-3 overflow-hidden">
        <div className="container-2">
          <div className="xl:mb-12 mb-10">
            <div className="text-center xl:mb-12 mb-10 px-6">
              <h1 className="text-nu20 mb-4" data-aos="fade-left">
                {title}
              </h1>
              <p className="text-nu60" data-aos="fade-right">
                {description}
              </p>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="lg:col-span-4 sm:col-span-6 col-span-12">
                <div className="bg-secondary1" data-aos="fade-up">
                  <img className="mb-6" src={team1} alt="" />
                  <div className="text-center py-3">
                    <h5 className="text-nu20 mb-3">Esther Howard</h5>
                    <p className="text-nu60">CEO</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 sm:col-span-6 col-span-12">
                <div className="bg-secondary1" data-aos="fade-up">
                  <img className="mb-6" src={team2} alt="" />
                  <div className="text-center py-3">
                    <h5 className="text-nu20 mb-3">Esther Howard</h5>
                    <p className="text-nu60">Manager</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 sm:col-span-6 col-span-12">
                <div className="bg-secondary1" data-aos="fade-up">
                  <img className="mb-6" src={team3} alt="" />
                  <div className="text-center py-3">
                    <h5 className="text-nu20 mb-3">Esther Howard</h5>
                    <p className="text-nu60">CEO, Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
