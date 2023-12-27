import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import food1 from "./food1.jpg"
import food2 from "./food2.jpg"
import food3 from "./food3.jpg"
import food4 from "./food4.jpg"
import food5 from "./food5.jpg"
const gallaryImage = [
  food1,food2,food3,food4,food5
    
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
