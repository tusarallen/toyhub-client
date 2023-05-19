import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-8 w-11/12 mx-auto">
      <div className="flex justify-between items-center border-s-8 border-teal-900 mx-auto gap-24">
        <div className="ml-4">
          <h3>
            <span className="bg-gradient-to-r text-transparent bg-clip-text text-3xl font-bold from-indigo-500 to-purple-600">
              Customers
            </span>
            <span className="bg-gradient-to-r text-transparent bg-clip-text text-3xl font-bold from-gray-500 to-gray-600 ml-4">
              Review
            </span>
          </h3>
        </div>
      </div>
      {/* card area */}
      <div className="md:grid md:grid-cols-3 grid grid-cols-1 gap-12 mt-5">
        {/* 1st card area */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/Pjn6tWF/irene-strong-TMt3-JGo-Vlng-unsplash.jpg" />
                  </div>
                </div>
                <div className="rating rating-md mt-5">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-200"
                  />
                </div>
                <p className="gray font-bold text-center mt-5">
                  "I recently purchased a Spider-Man action figure from this
                  website, and I must say, I am thoroughly impressed! The
                  attention to detail and the quality of the toy exceeded my
                  expectations. As a die-hard Spider-Man fan, I couldn't be
                  happier with my purchase. I will definitely be buying more
                  toys from this store!" - Ibrahim S.
                </p>
              </div>
              <div className="flex gap-4 mt-6 justify-center items-center">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaSkype />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card area */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/7bFrxWB/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg" />
                  </div>
                </div>
                <div className="rating rating-md mt-5">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-300"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-100"
                  />
                </div>
                <p className="gray font-bold text-center mt-5">
                  "I've been collecting Marvel superhero toys for years, and
                  this website has quickly become my go-to place for all my
                  purchases. The selection is incredible, and the customer
                  service is top-notch. I recently bought the Iron Man and they
                  are absolutely fantastic. I highly recommend this store to all
                  Marvel enthusiasts!" - Jessica S.
                </p>
              </div>
              <div className="flex gap-4 mt-6 justify-center items-center">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaSkype />
              </div>
            </div>
          </div>
        </div>
        {/* 3rd card area */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/n6xJs3B/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg" />
                  </div>
                </div>
                <div className="rating rating-md mt-5">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-200"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-100"
                  />
                </div>
                <p className="gray font-bold text-center mt-5">
                  "I was searching for a special gift for my nephew, who is a
                  huge fan of Black Panther. I stumbled upon this website and
                  found the perfect Black Panther action figure. The toy arrived
                  on time, and the quality was outstanding. My nephew was over
                  the moon with joy when he received it. Thank you for making
                  his day!" - David L.
                </p>
              </div>
              <div className="flex gap-4 mt-6 justify-center items-center">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaSkype />
              </div>
            </div>
          </div>
        </div>
        {/* 4th card area */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/vcgQPms/edward-cisneros-H6wpor9mjs-unsplash.jpg" />
                  </div>
                </div>
                <div className="rating rating-md mt-5">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-100"
                  />
                </div>
                <p className="gray font-bold text-center mt-5">
                  "I just received my order from this Marvel toy shop, and I
                  couldn't be happier. The packaging was excellent, ensuring
                  that the toys arrived in perfect condition. The range of
                  characters available is impressive, and the website is easy to
                  navigate. I appreciate the attention to detail in every toy.
                  This is definitely the place to go for any Marvel fan!" -
                  Sarah T.
                </p>
              </div>
              <div className="flex gap-4 mt-6 justify-center items-center">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaSkype />
              </div>
            </div>
          </div>
        </div>
        {/* 5th card area */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/Zd9h4mZ/image.png" />
                  </div>
                </div>
                <div className="rating rating-md mt-5">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-100"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-100"
                  />
                </div>
                <p className="gray font-bold text-center mt-5">
                  "I've purchased multiple Marvel superhero toys from this
                  website, and I'm always satisfied with my purchases. The
                  customer service team is responsive and helpful, ensuring a
                  smooth buying experience. The toys themselves are of excellent
                  quality, capturing the essence of each character perfectly. I
                  highly recommend this store to any Marvel collector!" - Sweet
                  W.
                </p>
              </div>
              <div className="flex gap-4 mt-6 justify-center items-center">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaSkype />
              </div>
            </div>
          </div>
        </div>
        {/* 6th card area */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/RHDBVDD/image.png" />
                  </div>
                </div>
                <div className="rating rating-md mt-5">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="gray font-bold text-center mt-5">
                  "I recently discovered this Marvel toy shop, and it has become
                  my new favorite online store! The variety of toys available is
                  astounding, and they have all the latest releases. I recently
                  purchased the Thor and Hulk figures, and they are incredible.I
                  can't wait to expand my collection with more amazing toys from
                  this store!" - Emily W.
                </p>
              </div>
              <div className="flex gap-4 mt-6 justify-center items-center">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaSkype />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
