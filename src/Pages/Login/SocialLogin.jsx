import useAuth from "../../Hook/useAuth";

const SocialLogin = () => {

    const{googleLogin, githubLogin, twitterLogin}= useAuth()
  return (
    <div className="px-4 py-4">
      <div className="divider divider-neutral">Sign In With</div>
      <div className="flex justify-center items-center gap-3">
        <button onClick={()=> googleLogin()} className="btn btn-primary">Google</button>
        <button onClick={()=> githubLogin()} className="btn btn-accent">GitHub</button>
        <button  onClick={()=> twitterLogin()} className="btn btn-secondary">Twitter</button>
      </div>
    </div>
  );
};

export default SocialLogin;
