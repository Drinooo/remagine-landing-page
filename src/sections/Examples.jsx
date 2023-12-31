import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button, Typography } from "@material-tailwind/react";

export const Examples = () => {
  function PreviousArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Button
        variant="outlined"
        className="prev-arrow rounded-none"
        onClick={onClick}
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11.2461H7.83L13.42 5.65609L12 4.24609L4 12.2461L12 20.2461L13.41 18.8361L7.83 13.2461H20V11.2461Z"
            fill="black"
          />
        </svg>
      </Button>
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Button
        variant="outlined"
        className="next-arrow rounded-none"
        onClick={onClick}
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.24609L10.59 5.65609L16.17 11.2461H4V13.2461H16.17L10.59 18.8361L12 20.2461L20 12.2461L12 4.24609Z"
            fill="black"
          />
        </svg>
      </Button>
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    // prevArrow: <PreviousArrow />,
    // nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="border-b-2 border-black py-[54px]">
        <div className="text-center px-[16px]">
          <Typography className="font-main font-[700] lg:text-h2 sm:text-h2Mobile">
            See Examples
          </Typography>
          <Typography className="font-main font-[400] text-caption">
            Remagine is trained on thousands of beautiful designs, so it’s
            learnt from the best.
          </Typography>
        </div>

        <div className="lg:px-[64px] sm:px-[16px] max-w-full pt-[48px]">
          <Slider {...settings}>
            <div className="examples">
              <img src="/images/image 15617.png" alt="" />
            </div>
            <div className="examples">
              <img src="/images/image 15618.png" alt="" />
            </div>
            <div className="examples">
              <img src="/images/image 15617.png" alt="" />
            </div>
            <div className="examples">
              <img src="/images/image 15618.png" alt="" />
            </div>
            <div className="examples">
              <img src="/images/image 15617.png" alt="" />
            </div>
            <div className="examples">
              <img src="/images/image 15618.png" alt="" />
            </div>
            <div className="examples">
              <img src="/images/image 15617.png" alt="" />
            </div>
            <div className="examples">
              <img src="/images/image 15618.png" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
