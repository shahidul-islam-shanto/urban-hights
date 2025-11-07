import React from "react";
import Hero from "../../Components/Hero/Hero";
import OurFeatured from "../../Components/OurFeatured/OurFeatured";
import BuyOrSell from "../../Components/BuyOrSell /BuyOrSell";

const Home = () => {
  return (
    <>
      <Hero />
      <OurFeatured
        title={"Our Featured Exclusive"}
        description={
          "Choose from different templates and lay them out, full-width or boxed, grid or listed."
        }
      />
      <BuyOrSell />
    </>
  );
};

export default Home;
