import useAuth from "../../Hook/useAuth";
import {useNavigate, useLocation} from 'react-router-dom'

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
      <div className="divider divider-neutral">Sign In With</div>
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-accent"
        >
          GitHub
        </button>
        <button
          onClick={() => handleSocialLogin(twitterLogin)}
          className="btn btn-secondary"
        >
          Twitter
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
