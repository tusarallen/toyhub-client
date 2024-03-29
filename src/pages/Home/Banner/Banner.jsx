import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8 mb-5">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          {/* Text side */}
          <div data-aos="fade-up" data-aos-duration="1500">
            <div className="md:w-1/2 md:ml-16">
              <h2 className="text-4xl font-extrabold text-gray-800">
                CUTE TOYS FOR <br />{" "}
                <span className="text-[red]">CUTE KIDS</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Discover a world of fun and adventure with our wide selection of
                toys. Find the perfect superhero toy for your little one and
                make their day memorable.
              </p>
              <a href="https://www.walmart.com/cp/toys/4171">
                <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Shop Now
                </button>
              </a>
            </div>
          </div>

          {/* Superhero toy side */}
          <div data-aos="fade-down" data-aos-duration="1500">
            <div className="mt-8 md:mt-0 md:ml-16 md:w-1/2">
              <img
                src="https://i.ibb.co/K7fQSMp/image.png"
                alt="Superhero Toy"
                className="md:h-[400px] md:w-[380] md:max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
