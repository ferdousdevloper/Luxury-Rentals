import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePropertyData from "../../Hook/usePropertyData";
import { FaLocationDot } from "react-icons/fa6";

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
    <div className=" pt-24 container mx-auto">
      <div className="mt-20 p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 border-green-300 border-t-[10px] border-b-[10px] md:rounded-bl-[150px] md:rounded-tr-[150px] rounded-bl-[50px] rounded-tr-[50px]">
        <div className="space-y-4 flex flex-col md:flex-row gap-10 ">
          <div className="space-y-2  ">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full h-full rounded-md dark:bg-gray-500 rounded-bl-[150px] border-green-300 border-b-[10px]"
            />
          </div>
          <div className="space-y-2 max-w-[600px] md:pr-10">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-4xl text-gray-900 text-center md:text-left font-semibold dark:text-violet-600 font-gilda">
                {estate_title}
              </h3>
            </a>
            <div>
              <p className="text-gray-600 text-lg">{segment_name}</p>
            </div>
            <div className="text-gray-400 md:flex gap-10 items-center">
            <p>Area: {area}</p>
            <div className="flex items-center gap-2 text-gray-400">
              <FaLocationDot className="text-red-500" />
              <p>{location}</p>
            </div>
          </div>
          <ul className="flex items-center">
            <h1><strong className="text-base font-semibold">Facilities:</strong></h1>
          {facilities?.map((facilitie) => (
              <li
                key={facilitie.id}
                className="py-2 px-4 text-yellow-900 text-base font-semibold"
              >
               
                {facilitie}
              </li>
            ))}
          </ul>
            <p className="leading-snug dark:text-gray-600"><strong>Description: </strong>{description}</p>
            <div className="flex justify-between">
            <p className=" border border-[#059669] px-8 py-2 rounded-lg bg-[#059669]  bg-opacity-60 font-bold">
              {status}
            </p>
            <p className=" border border-[#059669] px-8 py-2 rounded-lg bg-[#059669] bg-opacity-60 font-bold">
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
