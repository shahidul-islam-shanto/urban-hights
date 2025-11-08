import React from "react";
import Hero from "../../Components/Hero/Hero";
import OurFeatured from "../../Components/OurFeatured/OurFeatured";
import BuyOrSell from "../../Components/BuyOrSell /BuyOrSell";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import FeaturedCard from "../../Components/FeaturedCard/FeaturedCard";
import RealityProperty from "../../Components/RealityProperty/RealityProperty";
import Testimonials from "../../Components/Testimonials/Testimonials";
import MeetOurTeam from "../../Components/MeetOurTeam/MeetOurTeam";

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
      <FeaturedProperties
        title={"Featured Properties"}
        description={
          "Choose from different templates and lay them out, full-width or boxed, grid or listed."
        }
      />
      <RealityProperty
        title={"Reality Property Type"}
        description={
          "Choose from different templates and lay them out, full-width or boxed, grid or listed."
        }
      />
      <Testimonials />
      <MeetOurTeam title={"Meet Our Expert Agents"} description={"Real experts. Real results. Meet the people who turn your property goals into reality."} />
    </>
  );
};

export default Home;
