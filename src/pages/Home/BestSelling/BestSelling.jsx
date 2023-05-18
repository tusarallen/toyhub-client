import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const BestSelling = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mt-16 md:mt-24">The <span className="text-[red]">Best Selling</span> Toys This Month...</h1>
      <div className="my-12 w-11/12 mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://i.ibb.co/f2Z7Wcj/image.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://i.ibb.co/TPd7qwB/image.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://i.ibb.co/2yMmJFx/image.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://i.ibb.co/7N8q3Pj/image.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://i.ibb.co/Pxntctk/image.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://i.ibb.co/z5y17NW/image.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://i.ibb.co/LQkKVjH/image.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://i.ibb.co/DY0qy18/image.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://i.ibb.co/NNWkfrx/image.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BestSelling;
