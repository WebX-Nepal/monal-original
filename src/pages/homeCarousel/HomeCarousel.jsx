import Navbar from "../../components/navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import monaldining1 from "./assets/monaldining-internal-1.jpg";
import monaldining2 from "./assets/monaldining-internal-2.jpg";
import monaldining4 from "./assets/monaldining-internal-4.jpg";
import monaldining5 from "./assets/monaldining-internal-5.jpg";
import monaldining6 from "./assets/monaldining-internal-6.jpg";
import monaldining9 from "./assets/monaldining-internal-9.jpg";
import monaldining11 from "./assets/monaldining-internal-11.jpg";
import monaldining12 from "./assets/monaldining-internal-12.jpg";
import monaldining13 from "./assets/monaldining-internal-13.jpg";
import monaldining14 from "./assets/monaldining-landscape-2.jpg";

const images = [
  monaldining1,
  monaldining2,
  monaldining4,
  monaldining5,
  monaldining6,
  monaldining9,
  monaldining11,
  monaldining12,
  monaldining13,
  monaldining14,
];
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
      {/* <Navbar /> */}
      {/* <div className="h-[18vh]"> </div> */}
      <div className="   w-[100%] lg:h-[100vh]  ">
        <Slider {...settings}>
          {images.map((image) =>  <div key={image} className="  max-md:h-[50vh] relative bg-gradient-to-tl from-gray-500 to-gray-500 -z-10 text-white h-[100vh] w-[100%]">
              <img
                src={image}
                alt="food2"
                className="h-full w-full  object-cover  object-center  absolute "
              />
            </div>
          )}
        </Slider>
      </div>
    </>
  );
}
