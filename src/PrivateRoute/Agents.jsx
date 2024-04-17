import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { CiPhone } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";

const Agents = () => {
    const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch('agents.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setAgents(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
      });
  }, []);
  return (
    <div className="pt-40 md:pt-20 min-h-[100vh] md:container md:mx-auto mx-6">
      <Helmet>
        <title>LUXURY | AGENTS</title>
      </Helmet>
      <div className="pt-40 md:pt-20  relative bg1 bgEffect">
        <div className="absolute inset-0 bg-blue-gray-200 bg-opacity-15 backdrop-filter backdrop-blur-2xl dark:bg-gray-70 dark:bg-opacity-55 dark:backdrop-blur-3xl"></div>
      </div>
      <div className="text-center mt-10 md:w-2/5 mx-auto">
        <h1 data-aos="fade-down"
     data-aos-duration="1000" data-aos-delay="500" className="text-white text-6xl font-extrabold font-gilda">
          Agents
        </h1>
        <p data-aos="fade-down"
     data-aos-duration="1000" data-aos-delay="500" className="text-gray-300 my-6 text-lg">
          Empower your real estate journey with our agent-focused platform.
          Seamlessly connect with clients, manage properties, and streamline
          transactions. Elevate your business with cutting-edge tools and
          unparalleled support. Experience excellence, join us today.
        </p>
      </div>
      <div data-aos="zoom-out"
     data-aos-duration="1000" data-aos-delay="500" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {
            agents.map(agent =>( <div key={agent.id} className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 border rounded-lg shadow-2xl">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src={agent.image}
                alt=""
                className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{agent.name}</h2>
                <span className="text-sm dark:text-gray-600">
                  {agent.designation}
                </span>
                
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <IoMailOpenOutline />
                  <span className="dark:text-gray-600">
                    {agent.mail}
                  </span>
                </span>
                <span className="flex items-center space-x-2">
                  <CiPhone />
                  <span className="dark:text-gray-600">{agent.phone_number}</span>
                </span>
              </div>
            </div>
          </div>))
        }
        
      </div>
    </div>
  );
};

export default Agents;
