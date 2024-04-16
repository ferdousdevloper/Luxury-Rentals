import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, logout, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  
  const [showPassword, setShowPassword] = useState(true);

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validatePassword = (value) => {
    // Regular expressions to check for at least one uppercase letter and at least one special character
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }

    if (!uppercaseRegex.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!lowercaseRegex.test(value)) {
      return "Password must contain at least one lowercase letter";
    }

    if (!specialCharRegex.test(value)) {
      return "Password must contain at least one special character";
    }

    return true; // Password is valid
  };
  const onSubmit = (data) => {
    const { email, password, image, name } = data;
    createUser(email, password).then((result) => {
      if (result.user) {
        navigate(from);
      }
      
      toast.success("Successfully Register");
      updateUserProfile(name, image).then(()=>{ navigate("/")})
      
      
      logout()
      
    });
    
    
  };
  

  return (
    <div className="md:w-4/6 mx-auto pt-40 md:pt-20">
      <Helmet><title>LUXURY | REGISTER</title></Helmet>
      <div className="pt-40 md:pt-20  relative bg1 bgEffect">
        <div className="absolute inset-0 bg-blue-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md"></div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="300" 
         className="text-5xl font-bold">Register now!</h1>
            <p 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="py-6">
              Elevate your registration experience with our intuitive form.
              Effortlessly sign up with user-friendly features and robust
              security measures, ensuring a smooth and secure onboarding
              process.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl inset-0 bg-blue-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md rounded-xl border">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span data-aos="fade-left"
         data-aos-duration="1000"
         data-aos-delay="700" className="label-text">Full Name</span>
                </label>
                <input
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
                  type="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-error">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span data-aos="fade-left"
         data-aos-duration="1000"
         data-aos-delay="1100" className="label-text">Email</span>
                </label>
                <input
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1300"
                  type="email"
                  placeholder="Email"
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
         data-aos-delay="1500" className="label-text">Image Url</span>
                </label>
                <input
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1700"
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  {...register("image")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span data-aos="fade-left"
         data-aos-duration="1000"
         data-aos-delay="1900" className="label-text">Password</span>
                </label>
                <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="2100" className="relative">
                  <input
                    type={showPassword ? "password" : "text"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                    required
                    {...register("password", {
                      required: true,
                      validate: validatePassword, // Custom validation function
                    })}
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
                
              </div>
              <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="2300" className="form-control mt-6">
                <button className="btn bg-blue-500 text-white border-0">
                  Register
                </button>
              </div>
              <div className="mt-8">
                <p data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="2500">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    <strong>Sign In</strong>
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
