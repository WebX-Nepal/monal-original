import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ourCustomer.css";

export default function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed: 500,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className=" relative bg-black w-[50%] mx-auto mt-24  pb-28">
      <h1 className="text-5xl text-center pb-10 text-white font-Cormorant uppercase">
     
testimonial
      </h1>
      <hr className="w-12 mx-auto border-[#9D8730] text-center pb-20 font-light" />
      <Slider {...settings}>
        <div className=" text-white text-center">
          <p className="text-3xl font-serif pb-5">
            "Amazing experience! The food was delicious, the service was
            impeccable, and the ambiance was cozy. I highly recommend trying
            their signature dish – it's a true delight!"
          </p>
          <p>Rojan G. Mul</p>
        </div>
        <div className=" text-white text-center ">
          <p className="text-3xl font-serif pb-5">
            "A lovely spot for a casual meal. The staff was friendly, and the
            menu had a nice variety.""
          </p>
          <p>John Chamling Rai</p>
        </div>
        <div className=" text-white text-center ">
          <p className="text-3xl font-serif pb-5">
            "Decent place with a nice atmosphere. The food was good, but it took
            a bit longer than expected."
          </p>
          <p>Dikshita Karki</p>
        </div>
        <div className=" text-white text-center ">
          <p className="text-3xl font-serif pb-5">
            "A lovely spot for a casual meal. The staff was friendly, and the
            menu had a nice variety.""
          </p>
          <p>John Chamling Rai</p>
        </div>
        <div className=" text-white text-center">
          <p className="text-3xl font-serif pb-5">
            "Amazing experience! The food was delicious, the service was
            impeccable, and the ambiance was cozy. I highly recommend trying
            their signature dish – it's a true delight!"
          </p>
          <p>Rojan G. Mul</p>
        </div>
        <div className=" text-white text-center ">
          <p className="text-3xl font-serif pb-5">
            "A lovely spot for a casual meal. The staff was friendly, and the
            menu had a nice variety.""
          </p>
          <p>John Chamling Rai</p>
        </div>
        <div className=" text-white text-center ">
          <p className="text-3xl font-serif pb-5">
            "Decent place with a nice atmosphere. The food was good, but it took
            a bit longer than expected."
          </p>
          <p>Dikshita Karki</p>
        </div>
        <div className=" text-white text-center ">
          <p className="text-3xl font-serif pb-5">
            "A lovely spot for a casual meal. The staff was friendly, and the
            menu had a nice variety.""
          </p>
          <p>John Chamling Rai</p>
        </div>
      </Slider>
    </div>
  );
}
