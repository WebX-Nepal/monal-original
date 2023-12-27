import Navbar from "../../components/navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "./hero1.jpg"
import hero2 from "./hero2.jpg"
import hero3 from "./hero3.jpg"

import food1 from "../../components/imageSlider/food1.jpg"
import food2 from "../../components/imageSlider/food2.jpg"
import food3 from "../../components/imageSlider/food3.jpg"
import food4 from "../../components/imageSlider/food4.jpg"
import food5 from "../../components/imageSlider/food5.jpg"
export default function HomeCarousel() {


  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed: 700,
    autoplay: true,
    arrows: false,
    fade: true,
  };
  return ( 
    <>
      <Navbar />
    <div className="h-[18vh"> </div>
    <div className=" relative bg-black w-[100%] h-[100vh] max-md:h-[60vh]">
      <Slider {...settings}>
        <div className="object-cover max-md:h-[50vh] relative bg-gradient-to-tl from-gray-500 to-gray-500 -z-10 text-white h-[100vh] w-[100%]">
          <img
            src={food1}
            alt="food2"
            className="h-full w-full object-center  bg-left-top object-cover absolute "
          />
        </div>
         <div className="relative max-md:h-[50vh] bg-gradient-to-tl from-gray-600 to-gray-700 -z-10 text-white h-[100vh] w-[100%] ">
          <img
            src={food2}
            alt="food1"
            className="h-full w-full bg-left-top object-cover object-center   absolute mix-blend-overlay"
            />
        </div>
        <div className="relative max-md:h-[50vh] bg-gradient-to-tl from-gray-600 to-gray-700 -z-10 text-white h-[100vh] w-[100%] ">
          <img
            src={food3}
            alt="food1"
            className="h-full w-full bg-left-top  object-cover object-center  absolute mix-blend-overlay"
            />
        </div> 
        <div className="relative max-md:h-[50vh] bg-gradient-to-tl from-gray-600 to-gray-700 -z-10 text-white h-[100vh] w-[100%] ">
          <img
            src={food4}
            alt="food1"
            className="h-full w-full bg-left-top  object-cover object-center  absolute mix-blend-overlay"
            />
        </div> 
        <div className="relative max-md:h-[50vh] bg-gradient-to-tl from-gray-600 to-gray-700 -z-10 text-white h-[100vh] w-[100%] ">
          <img
            src={food5}
            alt="food1"
            className="h-full w-full bg-left-top  object-cover object-center  absolute mix-blend-overlay"
            />
        </div> 
      </Slider>
    </div>
            </>
  );
}
