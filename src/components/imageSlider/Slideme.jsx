import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import food1 from "./food1.jpg"
import food2 from "./food2.jpg"
import food3 from "./food3.jpg"
import food4 from "./food4.jpg"
import food5 from "./food5.jpg"

import f10 from "./assets/10.jpg"
import f15 from "./assets/15.jpg"
import f19 from "./assets/19.jpg"
import f20 from "./assets/20.jpg"
import f25 from "./assets/25.jpg"
import f28 from "./assets/28.jpg"
import f34 from "./assets/34.jpg"
import f41 from "./assets/41.jpg"
import f45 from "./assets/45.jpg"
import f48 from "./assets/48.jpg"
import f50 from "./assets/50.jpg"
import f51 from "./assets/51.jpg"
import f56 from "./assets/56.jpg"
import f61 from "./assets/61.jpg"
import f71 from "./assets/71.jpg"
import f72 from "./assets/72.jpg"
import f87 from "./assets/87.jpg"
import f94 from "./assets/94.jpg"
const gallaryImage = [
  f15,f20,f28,f34,f41,f45,f48,f50,f51,f25,f56,f19,f61,f10,f71,f72,f87,f94
    
];
export default function Slideme() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1,
    cssEase: "linear",
    arrows:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
  };
  return (
    <Slider {...settings} className="">
      {gallaryImage.map((img) => {
        return (
          <div key={img} className={`h-[50vh] max-sm:h-[20vh]`}>
            <img src={`${img}`} className="h-full   object-center  object-cover    w-full" alt="" />
          </div>
        );
      })}
    </Slider>
  );
}
