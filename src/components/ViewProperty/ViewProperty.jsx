import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePropertyData from "../../Hook/usePropertyData";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const ViewProperty = () => {
  const [singleData, setSingleData] = useState({});

  const {
    estate_title,
    image,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = singleData || {};

  const { id } = useParams();
  const { data } = usePropertyData();

  useEffect(() => {
    const singlePropertyData = data.find((property) => property.id == id);
    setSingleData(singlePropertyData);
  }, [data, id]);

  return (
    <div className=" pt-24  md:container md:mx-auto mx-5 mb-20">
      <Helmet><title>LUXURY | PROPERTIES</title></Helmet>
      <div className="mt-20 p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 border-green-300 border-t-[10px] border-b-[10px] md:rounded-bl-[150px] md:rounded-tr-[150px] rounded-bl-[50px] rounded-tr-[50px]">
        <div className="space-y-4 flex flex-col md:flex-row gap-10 ">
          <div className="space-y-2  ">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              src={image}
              alt=""
              className="block object-cover object-center w-full h-full rounded-md dark:bg-gray-500 rounded-bl-[150px] border-green-300 border-b-[10px]"
            />
          </div>
          <div className="space-y-2 max-w-[600px] md:pr-10">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500" className="text-4xl text-gray-900 text-center md:text-left font-semibold dark:text-violet-600 font-gilda">
                {estate_title}
              </h3>
            </a>
            <div>
              <p data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700" className="text-gray-600 text-lg">{segment_name}</p>
            </div>
            <div data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="900" className="text-gray-400 md:flex gap-10 items-center">
              <p>Area: {area}</p>
              <div className="flex items-center gap-2 text-gray-400">
                <FaLocationDot className="text-red-500" />
                <p>{location}</p>
              </div>
            </div>
            <ul data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1100" className="flex items-center">
              <h1>
                <strong className="text-base font-semibold">Facilities:</strong>
              </h1>
              {facilities?.map((facilitie) => (
                <li
                  key={facilitie.id}
                  className="py-2 px-4 text-yellow-900 text-base font-semibold"
                >
                  {facilitie}
                </li>
              ))}
            </ul>
            <p data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1300" className="leading-snug dark:text-gray-600">
              <strong>Description: </strong>
              {description}
            </p>
            <div className="flex justify-between">
              <p data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1500" className=" border border-[#059669] px-8 py-2 rounded-lg bg-[#059669]  bg-opacity-60 font-bold">
                {status}
              </p>
              <p data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1700" className=" border border-[#059669] px-8 py-2 rounded-lg bg-[#059669] bg-opacity-60 font-bold">
                {price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
