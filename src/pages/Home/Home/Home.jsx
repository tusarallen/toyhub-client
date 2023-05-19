import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import useTitle from "../../../hook/useTitle";
import Review from "../Review/Review";
import Swiper from "swiper";
import BestSelling from "../BestSelling/BestSelling";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner />
      <Gallery />
      <ShopByCategory />
      <BestSelling />
      <Review />
    </div>
  );
};

export default Home;
