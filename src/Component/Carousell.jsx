import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousell() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={4000}
      showArrows={false}
      showStatus={false}
      className="w-1/2"
    >
      <div>
        <img src="/1.webp" />
        <p className="legend">Boya İşleri</p>
      </div>
      <div>
        <img src="/2.jpg" />
        <p className="legend">Tamirat İşleri</p>
      </div>
      <div>
        <img src="/3.png" />
        <p className="legend">Tadilat İşleri</p>
      </div>
    </Carousel>
  );
}

export default Carousell;
