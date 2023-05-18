import React from "react";

const Gallery = () => {
  return (
    <>
      <h2 className="text-center font-bold text-2xl mb-3">
        Our Exclusive Gallery Prodcuts
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-1 w-full p-4 border-1 bg-[#1E90ff]">
        <div className="bg-base-100">
          <figure>
            <img src="https://i.ibb.co/JCgpKPC/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img src="https://i.ibb.co/6WD2c7x/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img src="https://i.ibb.co/NmM6qkD/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img src="https://i.ibb.co/VSJLNH6/image.png" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Gallery;
