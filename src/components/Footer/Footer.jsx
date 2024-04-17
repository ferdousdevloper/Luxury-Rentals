import { Link } from "react-router-dom";
import logo from "../../../public/Logo.png";

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content">
      <footer className="container justify-between p-10  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
          <div className="flex flex-col items-center ">
            <img className="w-1/3" src={logo} alt="" />
            <h2 className="font-gilda text-2xl tracking-[6px] font-semibold text-yellow-600">
              Luxury Rentals
            </h2>
          </div>
          <div className="flex flex-col mt-6 leading-10  text-center">
            <h2>
              <strong>Services</strong>
            </h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex flex-col mt-6 leading-10  text-center">
            <h2>
              <strong>Services</strong>
            </h2>
            <Link to='/register'>Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/agents" >Agents</Link>
          </div>
        </div>
      </footer>
      <div className="bg-[#353b48] py-4">
        <p className=" text-center mx-5">
          Copyright © 2024 - All right reserved by Luxury Rentals - Developer
          Ferdous
        </p>
      </div>
    </div>
  );
};

export default Footer;
