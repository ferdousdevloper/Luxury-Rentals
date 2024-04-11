/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { ApiContext } from "../../ContextApiData/ContextApiData";
import SingleCard from "../SingleCard/SingleCard";

const Cards = () => {

  const { data } = useContext(ApiContext);
  console.log(data);

  return (
    <div className="md:container mx-auto">
      <div className="text-center px-8">
        <h1 data-aos="fade-down"
     data-aos-duration="1000" data-aos-delay="1200" className="text-4xl text-gray-950 font-extrabold my-6">
          Find Your Dream Property
        </h1>
        <p data-aos="fade-down"
     data-aos-duration="1000" data-aos-delay="1400" className="text-gray-500  text-xl">
          Discover your perfect abode with our intuitive platform, designed to
          simplify your property search. Find your dream property effortlessly,
          whether it's a cozy apartment, a sprawling estate, or a serene
          countryside retreat.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {
          data.map((card)=> <SingleCard key={card.id} card={card}></SingleCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Cards;
