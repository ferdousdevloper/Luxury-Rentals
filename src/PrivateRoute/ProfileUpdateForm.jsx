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
    <div className="pt-40 md:pt-20 min-h-[calc(100vh-136px)] flex flex-col items-center justify-center mb-12">
      <div className="pt-40 md:pt-20  relative bg1 bgEffect">
        <div className="absolute inset-0 bg-blue-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md"></div>
      </div>

      <div className="md:w-3/12 w-3/4 mx-auto inset-0 bg-blue-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md rounded-xl">
        <form onSubmit={handleSubmit} className="py-16 px-8 ">
          <div className="flex flex-col items-center">
            <h2>Update Profile</h2>
            <img
              src={
                user?.photoURL || "https://i.ibb.co/vY5bFQR/2151033973-min.jpg"
              }
              alt=""
              className=" object-cover rounded-full  dark:bg-gray-500 aspect-square max-w-[100px]"
            />
            <p>Name: {user?.displayName || "user name not found"}</p>
          </div>

          <div className="flex flex-col mb-6">
            <p>Name:</p>
            <input
              type="text"
              placeholder="Type Your Name"
              className="grow mb-6 bg-blue-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Image URL:</p>
            <input
              type="text"
              placeholder="ImageURL https://i.ibb.example.jpg"
              className="grow bg-blue-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-full" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
