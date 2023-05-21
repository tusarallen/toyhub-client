import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";

const SingleToy = () => {
  useTitle("Toy Details");
  const details = useLoaderData();
  console.log(details);

  const {
    email,
    sellerName,
    rating,
    quantity,
    price,
    photo,
    description,
    name,
  } = details;

  return (
    <div className="w-11/12 mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex flex-col md:flex md:flex-row justify-center items-center md:gap-20">
            <div className="w-1/2">
              <img
                src={photo}
                className="w-[450px] h-[480px] rounded-lg shadow-2xl"
              />
            </div>
            <div className="w-1/2 font-bold">
              <h1 className="text-5xl">
                <span className="text-[red]">Toy Name</span>: {name}
              </h1>
              <p className="py-3 mt-3">
                <span className="text-[red]">Seller Name</span>: {sellerName}
              </p>
              <p className="py-3">
                <span className="text-[red]">Seller Email</span>: {email}
              </p>
              <p className="py-3">
                <span className="text-[red]">Price</span>: ${price}
              </p>
              <p className="py-3">
                <span className="text-[red]">Rating</span>: {rating}
              </p>
              <p className="py-3">
                <span className="text-[red]">Availabe Quantity</span>:{" "}
                {quantity}
              </p>
              <p className="py-3">
                <span className="text-[red]">Description</span>: {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
