/* eslint-disable react/no-unescaped-entities */

import Marquee from "react-fast-marquee";

const Reviews = () => {
  return (
    <div className="  md:container mx-auto mt-10">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">Reviews</h1>
      </div>
      <Marquee>
        <div className="grid grid-cols-4 gap-8 ml-8">
          {/* card 1 */}
          <div className="container border bg-neutral-200 flex flex-col max-w-sm p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 ">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://i.ibb.co/qFj421t/p1.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs dark:text-gray-600">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                A gripping narrative and well-developed characters make this
                novel a standout in literary fiction. Its intricate plot and
                thought-provoking themes ensure it lingers in the reader's mind
                long after the final page. With its captivating storytelling,
                this book is bound to leave a lasting impression on those who
                appreciate depth and complexity in their reading experience.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="container border bg-neutral-200 flex flex-col max-w-sm p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 ml-1">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://i.ibb.co/pL0XPdd/p2.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Emily Thompson</h4>
                  <span className="text-xs dark:text-gray-600">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                This film is an adrenaline-fueled journey, packed with suspense
                and unexpected plot twists that keep viewers hooked until the
                very end. With its stellar cast and breathtaking cinematography,
                it's a cinematic masterpiece that demands to be experienced on
                the big screen.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="container border bg-neutral-200 flex flex-col max-w-sm p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 ml-1">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://i.ibb.co/87YwjYD/p3.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sophia Rodriguez</h4>
                  <span className="text-xs dark:text-gray-600">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.2</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                An auditory masterpiece, this album showcases the artist's
                exceptional talent and versatility. Each track is meticulously
                crafted, blending genres seamlessly to create a captivating
                musical journey that resonates with listeners on a profound
                level.
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="container border bg-neutral-200 flex flex-col max-w-sm p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 ml-1">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://i.ibb.co/qdm88yF/p4.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Samantha Westwood</h4>
                  <span className="text-xs dark:text-gray-600">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.3</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                Dining at this restaurant is a sensory delight, with every dish
                expertly prepared to tantalize the taste buds. From the
                innovative flavors to the impeccable presentation, each bite is
                a culinary adventure that promises to satisfy even the most
                discerning palate.
              </p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Reviews;
