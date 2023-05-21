import React from "react";
import {
  FcAlarmClock,
  FcAssistant,
  FcServices,
  FcShipped,
} from "react-icons/fc";

const Services = () => {
  return (
    <>
      <div className="w-11/12 mx-auto mt-20 mb-16">
        <div className="flex justify-between items-center md:border-s-8 border-teal-900 mx-auto md:gap-24 mb-8">
          <div className="ml-4">
            <h3>
              <span className="bg-gradient-to-r text-transparent bg-clip-text text-4xl font-bold from-indigo-500 to-purple-600">
                Our
              </span>
              <span className="bg-gradient-to-r text-transparent bg-clip-text text-3xl font-bold from-gray-500 to-gray-600 ml-4">
                Services
              </span>
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <FcServices style={{ fontSize: "60px" }} />
            <h3 className="font-bold text-2xl mt-4">Toy Repair Services</h3>
            <p className="font-bold text-[16px] mt-2 text-gray-500">
              Renew and cherish your cherished toys.
            </p>
          </div>
          <div>
            <FcAssistant style={{ fontSize: "60px" }} />
            <h3 className="font-bold text-2xl mt-4">Assistant Unleashed</h3>
            <p className="font-bold text-[16px] mt-2 text-gray-500">
              Efficient support at your fingertips, anytime
            </p>
          </div>
          <div>
            <FcAlarmClock style={{ fontSize: "60px" }} />
            <h3 className="font-bold text-2xl mt-4">Open All Day</h3>
            <p className="font-bold text-[16px] mt-2 text-gray-500">
              Open for you, closed with gratitude.
            </p>
          </div>
          <div>
            <FcShipped style={{ fontSize: "60px" }} />
            <h3 className="font-bold text-2xl mt-4">Toy Delivery</h3>
            <p className="font-bold text-[16px] mt-2 text-gray-500">
              Swift shipping ensures toys reach you promptly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
