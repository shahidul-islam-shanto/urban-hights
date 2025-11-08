import React from "react";

const MeetOurTeam = ({ title, description }) => {
  return (
    <>
      <div className="xl:pt-20 md:pt-18 sm:pt-16 pt-12 bg-secondary1">
        <div className="container-2">
          <div className="xl:mb-12 mb-10">
            <div className="text-center">
              <h1 className="text-nu20 mb-4">{title}</h1>
              <p className="text-nu60">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
