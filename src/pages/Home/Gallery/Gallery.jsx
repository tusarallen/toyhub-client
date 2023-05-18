import React from "react";

const Gallery = () => {
  return (
    <>
      <h2 className="text-center font-bold text-4xl mb-6">
        Our <span className="text-[red]">Exclusive</span> Gallery Toys
      </h2>
      <div className="grid md:grid-cols-8 grid-cols-1 w-full p-4 border-1 bg-[#1E90ff]">
        <div className="bg-base-100">
          <figure>
            <img className="md:h-[275px] md:w-[315px]" src="https://i.ibb.co/JCgpKPC/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img className="md:h-[275px] md:w-[315px]" src="https://i.ibb.co/6WD2c7x/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img className="md:h-[275px] md:w-[315px]" src="https://i.ibb.co/2sGNc1k/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img className="md:h-[275px] md:w-[315px]" src="https://i.ibb.co/VSJLNH6/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img className="md:h-[275px] md:w-[315px]" src="https://i.ibb.co/vHNKZj5/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img className="md:h-[275px] md:w-[315px]" src="https://i.ibb.co/2dY9hwG/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img className="md:h-[275px] md:w-[315px]" src="https://i.ibb.co/TWTnbh0/image.png" />
          </figure>
        </div>
        <div className="bg-base-100">
          <figure>
            <img className="md:h-[275px] md:w-[315px]" src="https://i.ibb.co/h77qcnV/image.png" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Gallery;
