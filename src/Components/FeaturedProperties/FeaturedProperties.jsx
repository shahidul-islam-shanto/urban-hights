import React, { useEffect, useState } from "react";
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
      <div className="xl:pt-20 md:pt-18 sm:pt-16 pt-12 bg-secondary1 overflow-hidden">
        <div className="container-2">
          <div className="mb-12">
            <h1 className="text-nu20 mb-4">{title}</h1>
            <p className="text-nu60">{description}</p>
          </div>
          <div className="">
            {propertiesCard.map((items) => (
              <FeaturedPropertiesCard
                key={items.bookId}
                propertiesCard={items}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
