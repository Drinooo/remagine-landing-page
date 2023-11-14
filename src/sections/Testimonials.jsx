import React from "react";
import { TESTIMONIALS } from "../utils/data";
import { Typography } from "@material-tailwind/react";
import Slider from "react-slick";

export const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };

  return (
    <section className="border-b-2 border-black">
      <Slider {...settings} className="carousel">
        {TESTIMONIALS.map((item) => (
          <div className="">
            <div className="flex">
              <div className="w-full p-[64px] border-black">
                <img
                  className="w-full person"
                  src={item.img}
                  alt="dashboard image"
                />
              </div>

              <div className="p-[64px] flex flex-col justify-center border-black">
                <Typography className="mb-6 font-main font-[600] text-h3">
                  {item.msg}
                </Typography>
                <Typography className="mb-4 text-h4 tracking-tight font-main font-[600]">
                  {item.name}
                </Typography>
                <Typography className="mb-4 text-body tracking-tight font-main font-[400]">
                  {item.position}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
