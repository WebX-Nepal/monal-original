// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ourCustomers/ourCustomer.css";
import ambiance from "./ambiance.jpg"
import ambiance2 from "./ambiance2.jpg"
import { Icon } from "@iconify/react";

export default function Ambiance() {
  // const settings = {
  //   className: "center",
  //   dots: false,
  //   centerMode: true,
  //   centerPadding: "60px",
  //   infinite: true,
  //   speed: 100,
  //   rows: 2,
  //   slidesToShow: 2,
  //   slidesToScroll: 3,
  //   slidesPerRow: 2,
  //   autoPlaySpeed: 100,
  //   autoplay: true,
  //   arrows: false,
  // };
  return (
    <>
    <section className="w-full h-[75vh] flex">
      <div  className="h-full w-[50%] overflow-hidden bg-center pl-2">
        <img src={ambiance2} alt="ambiance" />
      </div >
      <div className="h-full w-[49%] text-white p-16 flex flex-col gap-12">
        <h3 className="text-7xl font-Cormorant">Our Ambiance</h3>
        <p className="text-sm font-poppins w-[80%] mt-4">As you step into our restaurant, you're enveloped in an inviting glow of warm, dim lighting that dances softly off the rustic brick walls, creating an intimate and cozy atmosphere. The gentle hum of soothing music fills the air, blending seamlessly with the laughter and conversations echoing throughout the space.</p>
        <div className=" flex gap-4 items-center">
            <div className="border-[1px] rounded-full p-4 border-[#9D8730] hover:bg-[#9D8730] ">
              <Icon icon="ph:arrow-right-thin" width={29} color="white" />
            </div>
            <p>Learn More</p>
          </div>
      </div>
    </section>
    </>

    // <div className=" relative bg-black w-[100%] mx-auto pb-28">
    //   <h1 className="text-7xl text-center pb-10 text-white font-Cormorant">
    //     Our Ambiance
    //   </h1>
    //   {/* <Slider {...settings}>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //     <div className=" text-white text-center ">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[300px] object-cover"
    //       />
    //     </div>
    //   </Slider> */}

    //   <marquee scrollamount="10" direction="left">
    //     <div className="flex gap-5">
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="image7.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="image5.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="image3.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="image5.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="image6.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //       <img
    //         src="bg1.jpg"
    //         alt="amb_image"
    //         className="w-[300px] h-[500px] object-cover"
    //       />
    //     </div>
    //   </marquee>
    // </div>
  );
}
