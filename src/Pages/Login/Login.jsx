import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from);
        }
        setRegisterSuccess("Logged in successfully");
        toast.success(registerSuccess);
      })
      .catch((error) => {
        setRegisterError(error.message);
        toast.error(registerError);
      });
  };

  return (
    <div className="md:w-4/6 mx-auto ">
      <Helmet><title>LUXURY | LOGIN</title></Helmet>
      <div className="pt-40 md:pt-20  relative bg1 bgEffect">
        <div className="absolute inset-0 bg-blue-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md"></div>
      </div>
      <div className="hero min-h-screen pt-40 md:pt-20 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center">
            <h1 data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500" className="text-5xl font-bold text-white">Login now!</h1>
            <p data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700" className="py-6">
              Experience seamless access with our innovative login form.
              Streamlined design meets top-notch security for a hassle-free
              login experience that prioritizes both convenience and protection.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl inset-0 bg-blue-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md rounded-xl border">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="900" className="label-text">Email</span>
                </label>
                <input
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1100"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1300" className="label-text">Password</span>
                </label>
                <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1500" className="relative">
                  <input
                  
                    type={showPassword ? "password" : "text"}
                    placeholder="password" 
                    className="input input-bordered w-full"
                    required
                    {...register("password", { required: true })}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 my-4 text-right"
                  >
                    {showPassword ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff>}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-error">{errors.password.message}</span>
                )}
                <label className="label">
                  <a 
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="1700"  href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                {registerError && (
                  <Toaster position="bottom-center" reverseOrder={false} />
                )}
                {registerSuccess && (
                  <Toaster position="bottom-center" reverseOrder={false} />
                )}
              </div>
              <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1900"  className="form-control mt-6">
                <button className="btn bg-blue-500 border-0 text-white font-extrabold">
                  Login
                </button>
              </div>
              <div className="mt-8">
                <p 
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="2100" >
                  New to here? Please{" "}
                  <Link to="/register" className="text-primary">
                    <strong>Register</strong>
                  </Link>{" "}
                </p>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
