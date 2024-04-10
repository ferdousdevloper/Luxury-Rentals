/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="pt-40 md:pt-20 min-h-[100vh]">
      <div className="pt-40 md:pt-20  relative bg1 bgEffect">
        <div className="absolute inset-0 bg-blue-gray-200 bg-opacity-15 backdrop-filter backdrop-blur-2xl dark:bg-gray-70 dark:bg-opacity-55 dark:backdrop-blur-3xl">
          
        </div>
      </div>
      <div className=" md:mt-32 md:container md:mx-auto mx-6">
           
            <div className="mb-56">
              <div className="flex flex-col md:flex-row gap-10">
                <img
                  src={
                    "https://i.ibb.co/qr7bnvj/Secluded-Beachfront-Retreat-min.jpg"
                  }
                  alt=""
                  className="md:max-w-[620px] rounded-br-[80px] rounded-lg grow"
                />
                <div className=" ">
                  <h1 className="text-neutral-950 text-4xl md:text-6xl font-bold font-gilda mb-7 text-white">
                    Your peace of mind, our priority
                  </h1>
                  <p className="leading-8 text-lg font-bold text-justify">
                  At our website, your peace of mind is our priority. We understand the importance of feeling secure and at ease when navigating online platforms, which is why we've built our services with your comfort and safety in mind. From user-friendly interfaces to robust security measures, we strive to provide an environment where you can explore, engage, and interact with confidence. Whether you're browsing our offerings, seeking information, or connecting with our community, know that we are dedicated to fostering a space where your peace of mind reigns supreme. Welcome to a place where your tranquility matters most.
                  </p>
                  
                </div>
              </div>
            </div>
            <div>
                <div className="flex flex-col md:flex-row-reverse justify-between gap-10">
                    <div>
                        <img src={'https://i.ibb.co/crc52y5/Group-45.png'} alt="" className="md:max-w-[500px]" />
                    </div>
                    <div className=" ">
                  <h1 className=" text-4xl md:text-6xl font-bold font-gilda mb-7 text-white">
                   About Us
                  </h1>
                  <p className="leading-8 text-lg font-bold max-w-[530px] text-justify text-gray-900">
                  At our website, ensuring your peace of mind is our utmost priority. We deeply recognize the significance of feeling secure and relaxed while navigating online platforms. That's precisely why we've meticulously crafted our services with an unwavering focus on your comfort and safety. From intuitively designed interfaces to fortified security measures, our commitment is to cultivate an environment where you can seamlessly explore, engage, and interact with absolute confidence. Whether you're perusing our diverse offerings, seeking valuable information, or connecting with our vibrant community, rest assured, we are steadfastly dedicated to curating a space where your peace of mind is paramount. Welcome to a sanctuary where your tranquility is treasured above all else.
                  </p>
                  <p className="md:text-center text-2xl rounded-xl mt-7 px-4 py-6 bg-[#DFE3E7]">We strive to offer you best possible homes to stay.  </p>
                </div>
                </div>
            </div>
          </div>
    </div>
  );
};

export default About;
