import { Button } from "@material-tailwind/react";
import React from "react";
import Slider from "react-slick";

export const ReactSlickCarousel = () => {
  function PreviousArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Button
        variant="outlined"
        className="arrow rounded-none"
        style={{ ...style, display: "block", position: "absolute", top: 0, left: 0, background: "green" }}
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
        className="arrow rounded-none"
        style={{ display: "block", position: "absolute", top: 0, right: 0, background: "green" }}
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};
