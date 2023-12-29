// import "./bigfooter.css";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function BigFooter() {
  const handleMailClick = () => {
    const subject = `Hello! Let's Connect.`;
    // Use window.location.href with the 'mailto' URI scheme to initiate an email
    window.location.href = `mailto:info@monaldining.com.au?subject=${encodeURIComponent(
      subject
    )}&body=I%20would%20like%20to%20get%20in%20touch.`;
  };

  const handleContactClick = () => {
    // Use window.location.href with the 'tel' URI scheme to initiate a phone call
    window.location.href = "tel:+61435882342";
  };

  return (
    <section
      className="  bg-center  bg-cover font-poppins bg-[#F7F4CB]  "
      // style={{ backgroundImage: `url(${maroo})` }}
    >
      <div className="h-[100%] pb-20 ">
        <div className="">.</div>
        <div className="mt-28 max-sm:mt-4 flex flex-col items-center justify-center gap-12 max-sm:gap-10   text-xl">
          {/* <img src={logo} alt="lgog" width={380} className="max-sm:w-44" /> */}

          <p className="  font-poppins text-3xl font-light ">OPENING HOURS</p>
          <div className="flex flex-col items-center text-2xl max-sm:text-xl font-extralight">
            <div className=" -mt-8 ">
              Tuesday - Thursday <span> (Dinner) </span>
            </div>
            <div className="-mt-8 ">
              <br /> Friday - Saturday <span> (Lunch & Dinner) </span>
            </div>
          </div>
        
           
          <div className=" max-sm:mt-0 max-md:mt-32  font-poppins font-normal  flex flex-col w-full  px-52 max-sm:px-0">
            <div className="flex  justify-around max-md:flex-col max-sm:gap-2 max-md:gap-4 max-md:items-center max-md:justify-center">
              <Link
                target="_blank"
                to="https://www.google.com/maps/place/Monal+Dining/@-27.450835,153.046832,8z/data=!4m6!3m5!1s0x6b91592183311737:0x6782f30fea0f8ac0!8m2!3d-27.450835!4d153.0468315!16s%2Fg%2F11vhtbxxh1?hl=en&entry=ttu"
              >
                <div className="flex flex-col gap-2 items-center">
                  <div className="">
                    <Icon
                      icon="carbon:map"
                      color="white"
                      width={45}
                      className="p-2  rounded-full bg-[#cdae32]"
                    />
                  </div>
                  <div className="whitespace-nowrap">48 Skyring Terrace, </div>
                  <div className="whitespace-nowrap">
                    Newstead QLD 4006, Australia
                  </div>
                </div>
              </Link>
              <div className="flex flex-col  gap-2 items-center">
                <div>
                  <Icon
                    icon="solar:phone-linear"
                    color="white"
                    width={45}
                    className="p-2  rounded-full bg-[#cdae32] cursor-pointer"
                    onClick={handleContactClick}
                  />
                </div>
                <div className="font-poppins ">+61435882342</div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div>
                  <Icon
                    icon="fe:mail"
                    color="white"
                    width={45}
                    className="p-2  rounded-full bg-[#cdae32] cursor-pointer"
                    onClick={handleMailClick}
                  />
                </div>
                <div>info@monaldining.com.au</div>
              </div>
            </div>
          </div>

          <hr className="w-[75%] border-[#9D8730] border-[px] rounded-md" />

          <Link to="/contactus" onClick={() => window.scrollTo(0, 0)}>
            <div>
              <div className="flex  gap-4 items-center relative    ">
                <div className="border-[1px] rounded-full p-4 border-[#9D8730] hover:bg-[#9D8730] ">
                  <Icon icon="ph:arrow-right-thin" width={29} color="black" />
                </div>
                <div className=" text-sm  bg-transparent uppercase">
                  Contact Now
                </div>
              </div>
            </div>
          </Link>

          <div>
            <ul className="flex gap-4 max-sm:gap-2 text-sm uppercase">
              <Link to="/" onClick={() => screenTop(0, 0)}>
                <li>HOME </li>
              </Link>
              <li>|</li>
              <li>
                <Link to="/menu" onClick={() => screenTop(0, 0)}>
                  Menu
                </Link>
              </li>

              <li>|</li>
              <Link to="/contactus" onClick={() => screenTop(0, 0)}>
                <li>Contact Us </li>
              </Link>
              <li>|</li>

              <Link
                to="https://www.sevenrooms.com/reservations/monaldiningvenue"
                target="_black"
              >
                <li>Book Now </li>
              </Link>
            </ul>
          </div>
          <div className="copyright_details flex gap-8 max-sm:gap-4">
            <h1 className="text-xs font-semibold uppercase tracking-wider">
              &copy;Copyright Monal Dining
            </h1>
            <Link
              to="https://webxnep.com"
              target="_black"

              className="  hover:text-[#9D8730] text-xs font-semibold uppercase tracking-wider"
            >
              Designed by webx
            </Link>
          </div>
          <div className="social_icons flex gap-4 ">
            {/* <Icon icon="ri:facebook-fill" className="hover:text-[#9D8730]" /> */}

            <Link
              target="_blank"
              to="https://www.instagram.com/monaldining?igshid=MTNiYzNiMzkwZA=="
            >
              <Icon icon="ri:instagram-fill" className="hover:text-[#9D8730]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
