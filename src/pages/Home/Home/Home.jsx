import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import useTitle from "../../../hook/useTitle";
import Review from "../Review/Review";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner />
      <Gallery />
      <Review />
    </div>
  );
};

export default Home;
