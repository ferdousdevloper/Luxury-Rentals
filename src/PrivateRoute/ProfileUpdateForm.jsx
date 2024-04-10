import { updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";

const ProfileUpdateForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { user } = useAuth();
  

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setImage(user.photoURL || "");
      
    }
    
  }, [user]);

  const handleSubmit = async (e) => {
    console.log(e);

    if (!user) {
      console.error("User not found");
      return;
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: image,
      });
      console.log("Profile updated successfully");
      
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    
  };

  return (
    <div className="pt-40 md:pt-20 min-h-[calc(100vh-136px)]">
      {/* ----------------------------------------------------------- */}
      <div className="w-3/12 mx-auto">
        <h2>Update Profile</h2>
        <form onSubmit={handleSubmit} className="">
          <p>Name: {user?.displayName || "user name not found"}</p>
          <label className="input input-bordered flex items-center gap-2">
            Name :
            <input
              type="text"
              className="grow"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Image URL
            <input
              type="text"
              className="grow"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
