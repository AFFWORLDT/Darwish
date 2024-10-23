import Slider from "react-slick";
import { useEffect, useRef } from "react";

export default function Carousel({ slidesToShow = 1, children }) {
  let sliderRef = useRef(null);

  var settings = {
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    sliderRef.slickPlay();
  }, []);

  return (
    <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
      {children}
    </Slider>
  );
}
