import { Icon } from "@iconify/react";

const OurGallery = () => {
  return (
    <div className="bg-black flex justify-between max-w-[1550px] mx-auto">
      <div className="left_gallery_images w-[100%]">
        <div className="image_left_up flex w-[50%]">
          <img
            src="image5.jpg"
            alt="image"
            className="bg-cover object-cover h-[250px] w-[270px] "
          />
          <img
            src="image4.jpg"
            alt="imge"
            className="bg-cover object-cover h-[250px] w-[270px] "
          />
        </div>
        <div className="image_left_down flex w-[50%]">
          <img
            src="image6.jpg"
            alt="imge"
            className="bg-cover object-cover h-[250px] w-[270px]"
          />
          <img
            src="image3.jpg"
            alt="imge"
            className="bg-cover object-cover h-[250px] w-[270px]"
          />
        </div>
      </div>
      <div className="center_of_gallery w-[100%] bg-white flex flex-col justify-center items-center">
        <p className="uppercase text-[#9D8730]">Gallery</p>
        <h1 className="py-7 font-serif text-3xl w-1/2 text-center">
          AUTHENTIC IMPRESSIONS
        </h1>
        <hr className="border-[#9D8730] border-1 pb-5 w-10" />
        <div className="view_more_gallery flex items-center gap-2">
          <div className="border-[1px] rounded-full p-4 text-[#9D8730] hover:text-white border-[#9D8730] hover:bg-[#9D8730] ">
            <Icon icon="ph:arrow-right-thin" width={29} />
          </div>
          <p>View More</p>
        </div>
      </div>
      <div className="right_gallery_images w-[100%]">
        <div className="image_right_up flex w-[50%] ">
          <img
            src="image5.jpg"
            alt="image"
            className="bg-cover object-cover h-[250px] w-[270px]"
          />
          <img
            src="image3.jpg"
            alt="imge"
            className="bg-cover object-cover h-[250px] w-[270px]"
          />
        </div>
        <div className="image_right_down flex w-[50%] ">
          <img
            src="image4.jpg"
            alt="imge"
            className="bg-cover object-cover h-[250px] w-[270px]"
          />
          <img
            src="image6.jpg"
            alt="imge"
            className="bg-cover object-cover h-[250px] w-[270px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
