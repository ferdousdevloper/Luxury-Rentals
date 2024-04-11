import useAuth from "../../Hook/useAuth";
import {useNavigate, useLocation} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location ?.state || "/";


  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <div className="px-4 py-4">
      <div data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="2300"  className="divider divider-neutral">Sign In With</div>
      <div  className="flex justify-center items-center gap-3">
        <button
        
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn bg-yellow-500 text-green-600 flex flex-col items-center border-0"
        ><FcGoogle />
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-accent flex flex-col items-center"
        ><FaGithub />
          GitHub
        </button>
        <button
          onClick={() => handleSocialLogin(twitterLogin)}
          className="btn btn-secondary text-[#1DA1F2] flex flex-col items-center"
        ><FaTwitter />
          Twitter
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
