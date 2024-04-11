import { FaHandHoldingUsd } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";

const OurServices = () => {
  return (
    <div className=" pt-12">
      <div className="text-center px-8">
        <h1 data-aos="fade-down"
     data-aos-duration="1000" data-aos-delay="500" className="text-4xl text-gray-950 font-extrabold my-6">
          Our Services
        </h1>
        <p data-aos="zoom-in"
     data-aos-duration="1000" data-aos-delay="800" className="text-gray-500  text-xl">
          When it comes to real estate and properties, we are very happy step of
          way
        </p>
      </div>
      <div className="md:container py-6 mx-8 md:mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        <div data-aos="zoom-in"
     data-aos-duration="1000" data-aos-delay="1000" className="card bg-white border border-yellow-500 md:w-96 text-slate-950">
          <div className="card-body items-center text-center">
          <FaHandHoldingUsd className="card-title text-6xl text-green-500" />
            <h2 className="card-title">Property Insurance</h2>
            <p>Property insurance provides protection against most risk to property, such as fire theft...</p>
            
          </div>
        </div>
        <div data-aos="zoom-in"
     data-aos-duration="1000" data-aos-delay="1000" className="card border border-yellow-500 bg-white md:w-96 text-slate-950">
          <div className="card-body items-center text-center">
          <RiMoneyDollarCircleLine className="card-title text-6xl text-blue-500" />
            <h2 className="card-title">Advantage</h2>
            <p>All these properties have amazing prices, and you will find thousands of properties to choose from.</p>
            
          </div>
        </div>
        <div data-aos="zoom-in"
     data-aos-duration="1000" data-aos-delay="1000" className="card border border-yellow-500 bg-white md:w-96 text-slate-950">
          <div className="card-body items-center text-center">
          <LiaHandHoldingUsdSolid className="card-title text-6xl text-yellow-500" />
            <h2 className="card-title">Low commission</h2>
            <p>We offer competitive commission structure that are straightforward and fair, making it simple and affordable.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
