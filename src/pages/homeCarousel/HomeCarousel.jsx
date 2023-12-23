import Navbar from "../../components/navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "./hero1.jpg"
import hero2 from "./hero2.jpg"
import hero3 from "./hero3.jpg"
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
    <div className=" relative bg-black w-[100%] h-[100vh] max-md:h-[60vh]">
      <Navbar />
      <Slider {...settings}>
        <div className="object-cover max-md:h-[50vh] relative bg-gradient-to-tl from-gray-500 to-gray-500 -z-10 text-white h-[100vh] w-[100%]">
          <img
            src={hero1}
            alt="food2"
            className="h-full w-full object-cover  bg-left-top object-right-top absolute mix-blend-overlay"
          />
        </div>
         <div className="relative max-md:h-[50vh] bg-gradient-to-tl from-gray-600 to-gray-700 -z-10 text-white h-[100vh] w-[100%] ">
          <img
            src={hero2}
            alt="food1"
            className="h-full w-full bg-left-top object-cover  object-right-top absolute mix-blend-overlay"
          />
        </div>
        <div className="relative max-md:h-[50vh] bg-gradient-to-tl from-gray-600 to-gray-700 -z-10 text-white h-[100vh] w-[100%] ">
          <img
            src={hero3}
            alt="food1"
            className="h-full w-full bg-left-top  object-cover  object-right-top absolute mix-blend-overlay"
          />
        </div> 
      </Slider>
    </div>
  );
}
