import React from "react";
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="examples" data-value="1">
    <img src="/images/image 15617.png" />
  </div>,
  <div className="examples" data-value="2">
    <img src="/images/image 15618.png" />
  </div>,
  <div className="examples" data-value="3">
    <img src="/images/image 15617.png" />
  </div>,
  <div className="examples" data-value="4">
    <img src="/images/image 15618.png" />
  </div>,
];

export const ReactAliceCarousel = () => {
  return (
    <AliceCarousel
      items={items}
      mouseTracking
      responsive={responsive}
      paddingLeft={50}
      paddingRight={50}
    />
  );
};
