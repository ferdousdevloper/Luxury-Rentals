import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/Logo.png";
import useAuth from "../../Hook/useAuth";



const NavBar = () => {
  const { logout, user } = useAuth();
  console.log(user);

  

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold border border-yellow-500 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          HOME
        </NavLink>
      </li>
      
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold border border-yellow-500 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold border border-yellow-500 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          CONTACT
        </NavLink>
      </li>
      { user &&
        <>
          <li>
        <NavLink
          to="/update-profile"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold border border-yellow-500 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          UPDATE PROFILE
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/user-profile"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold border border-yellow-500 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          USER PROFILE
        </NavLink>
      </li>
        </>
      }
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-[99]  bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-sm md:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52  bg-opacity-45 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md"
            >
              {navLink}
            </ul>
          </div>
          <Link to='/' className="flex flex-col md:flex-row justify-center text-center md:justify-start md:text-left items-center md:gap-6">
            <img className="max-w-20" src={logo} alt="" />
            <h2 className="font-gilda text-2xl tracking-[6px] font-semibold text-yellow-600">
              Luxury Rentals
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end z-[99]">
          {/*user singed in information */}
          {user ? (
            <div className="dropdown dropdown-end" >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/vY5bFQR/2151033973-min.jpg"
                    }
                    
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] px-2 py-10 shadow-4xl shadow  rounded-box w-52 border  bg-blue-gray-200 bg-opacity-45 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md "
              >
                <li>
                  <p className=" btn mb-3">
                    Full Name: 
                    <span>{user?.displayName || "user name not found"}</span>
                  </p>
                </li>
                <li>
                  <button onClick={logout} className="btn btn-sm btn-error">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-neutral-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-xl text-white px-8">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
