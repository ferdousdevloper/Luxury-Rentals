import { useContext } from "react";
import { ApiContext } from "../../ContextApiData/ContextApiData";
import SingleCard from "../SingleCard/SingleCard";

const Cards = () => {
  const { data } = useContext(ApiContext);
  console.log(data);
  return (
    <div className="md:container mx-auto">
      <h1>Cards{data.length}</h1>
      <div className="text-center px-8">
        <h1 className="text-4xl text-gray-950 font-extrabold my-6">
          Find Your Dream Property
        </h1>
        <p className="text-gray-500  text-xl">
          Discover your perfect abode with our intuitive platform, designed to
          simplify your property search. Find your dream property effortlessly,
          whether it's a cozy apartment, a sprawling estate, or a serene
          countryside retreat.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {
          data.map((card)=> <SingleCard key={card.id} card={card}></SingleCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Cards;
