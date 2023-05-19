import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import useTitle from "../../../hook/useTitle";
import Review from "../Review/Review";
import BestSelling from "../BestSelling/BestSelling";
import ShopByCategories from "../ShopByCategories/ShopByCategories";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner />
      <Gallery />
      <ShopByCategories />
      <BestSelling />
      <Review />
    </div>
  );
};

export default Home;
