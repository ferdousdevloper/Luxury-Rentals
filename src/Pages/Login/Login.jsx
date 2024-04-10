import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location ?.state || "/";


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data => {
    const {email, password} = data;

    signInUser(email, password)
    .then(result =>{
      if (result.user) {
        navigate(from);
      }
      setRegisterSuccess('Logged in successfully');
      toast.success(registerSuccess)
      
    })
    .catch(error =>{
      setRegisterError(error.message);
      toast.error(registerError)
    })

    
    
    
  }
  

  return (
    <div className="md:w-4/6 mx-auto ">
      <div className="hero min-h-screen pt-40 md:pt-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-error">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-error">{errors.password.message}</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                {registerError && (<Toaster
                position="bottom-center"
                reverseOrder={false}
              />)}
              {registerSuccess && (
                <Toaster
                position="bottom-center"
                reverseOrder={false}
              />
              )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-8">
                <p>
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
