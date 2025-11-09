import React from "react";
import inconLogo from "../../assets/image/inconLogo.png";
import Marquee from "react-fast-marquee";

const LogoIcon = () => {
  return (
    <div>
      <div className="py-10 overflow-hidden">
        <div className="container-2 ">
          <Marquee>
            <img className="w-full" src={inconLogo} alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LogoIcon;
