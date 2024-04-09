/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const { id, estate_title, image, segment_name, price, status, area, location } =
    card;

  return (
    <div className=" ">
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-6 text-left">
          <Typography
            variant="h3"
            color="white"
            className="mb-3 font-medium text-left"
          >
            {estate_title}
          </Typography>
          <Typography variant="h5" className="mb-2 text-gray-400">
            {segment_name}
          </Typography>
          <div className="text-gray-400 md:flex justify-between items-center">
            <p>Area: {area}</p>
            <div className="flex items-center gap-2 text-gray-400">
              <FaLocationDot className="text-red-500" />
              <p>{location}</p>
            </div>
          </div>

          <div className="flex justify-between bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-sm md:px-6 px-5 py-4 text-gray-400 rounded-3xl">
            <p className=" border border-yellow-500 px-5 rounded-lg bg-yellow-500 bg-opacity-10">
              {status}
            </p>
            <p className=" border border-yellow-500 px-5 rounded-lg bg-yellow-500 bg-opacity-10">
              {price}
            </p>
          </div>
          {/* Property button */}
          <div className="mt-6">
            <Link
                to={`/property/${id}`}
              href="#_"
              className="relative w-full border border-yellow-500 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-3xl shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-red-600 via-yellow-700 to-green-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">View Property</span>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleCard;
