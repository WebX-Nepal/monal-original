import Navbar from "../../components/navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className=" relative bg-black w-[100%] h-[100vh]">
      <Navbar />
      <Slider {...settings}>
        <div className="relative bg-gradient-to-tl from-gray-500 to-gray-500 -z-10 text-white h-[100vh] w-[100%]">
          <img
            src="ambience.jpeg"
            alt="food2"
            className="w-full bg-left-top object-right-top absolute mix-blend-overlay"
          />
        </div>
        <div className="relative bg-gradient-to-tl from-gray-600 to-gray-700 -z-10 text-white h-[100vh] w-[100%] ">
          <img
            src="ambience2.jpg"
            alt="food1"
            className="w-full bg-left-top object-right-top absolute mix-blend-overlay"
          />
        </div>
        <div className="relative bg-gradient-to-tl from-gray-600 to-gray-700 -z-10 text-white h-[100vh] w-[100%] ">
          <img
            src="ambience3.jpg"
            alt="food1"
            className="w-full bg-left-top object-right-top absolute mix-blend-overlay"
          />
        </div>
      </Slider>
    </div>
  );
}
