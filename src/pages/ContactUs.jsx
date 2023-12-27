import Navbar from "../components/navbar/Navbar";
import BigFooter from "../components/BigFooter/BigFooter";
import { Footer } from "antd/es/layout/layout";
import marble from "./marble.jpg";
import { Icon } from "@iconify/react";
import maroo from "../assets/maroo.png";
import { Link } from "react-router-dom";
export default function ContactUs() {
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
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <>
      <main
        className="bg-[#F7F4CB]  "
        // style={{ backgroundImage: `url(${maroo})` }}
      >
        <div className="h-[15vh] max-sm:h-[10vh] w-full">
          <Navbar />
        </div>

        <div className="">
          <div className="px-24 py-8    max-lg:px-24  max-sm:px-8 ">
            <h2 className="font-Cormorant text-5xl mt-6 max-md:text-4xl ">
              Contact Us:
            </h2>
            {/* <h3 className="font-poppins text-lg lg:w-[60vw] max-sm:text-base text-slate-200 mt-4 ">
              Are you a food lover? If your answer is yes, then in restaurant
              for you, We serve foods for reasonable prices. It's awesome, we
              know,
            </h3> */}

            <div className="flex  max-lg:flex-col gap-12 mt-4">
              <div className="lg:w-[50%] ">
                <form className="flex flex-col  font-semibold lg:w-[65%]  gap-8 mt-4">
                  <div className="flex flex-col">
                    {/* <label htmlFor="">Your full name</label> */}
                    <input
                      placeholder="Your full name"
                      type="text"
                      className="bg-transparent outline-none border-b  border-black"
                    />
                  </div>

                  <div className="flex flex-col">
                    {/* <label htmlFor="">Your email address</label> */}
                    <input
                      placeholder="Your email address"
                      type="text"
                      className="bg-transparent outline-none border-b border-black "
                    />
                  </div>

                  <div className="flex flex-col">
                    {/* <label htmlFor="">Your phone number </label> */}
                    <input
                      placeholder="Your phone number "
                      type="text"
                      className="bg-transparent outline-none border-b  border-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    {/* <label htmlFor="">Message here </label> */}
                    <textarea
                      placeholder="Message here"
                      className="h-16  bg-transparent outline-none border-b border-black"
                    />
                  </div>
                  <button
                    onClick={handleClick}
                    className="px-5 py-2 whitespace-nowrap border border-[#9D8831] rounded-3xl      hover:text-[#9D8831] hover:border-black hover:scale-105 hover:transition-all duration-500 transition-all hover:duration-1000"
                  >
                    {" "}
                    Send Now
                  </button>
                </form>
              </div>
              <div className="h-80    lg:w-[50%] ">
                {/* <iframe
                  // width="500"
                  className="rounded-lg max-lg:w-96 max-sm:w-[110%] lg:w-[500px]"
                  height="350"
                  scrolling="no"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Syd%20+(Monal%20Dining)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>{" "} */}
                <iframe
                  style={{ border: 0 }}
                  className="w-[450px] h-[400px] max-md:w-[300px] max-md:h-[250px] rounded-lg    shadow-2xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759403.3494409767!2d153.0524724869419!3d-27.85016005539279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91592183311737%3A0x6782f30fea0f8ac0!2sMonal%20Dining!5e0!3m2!1sen!2snp!4v1703319958615!5m2!1sen!2snp"
                  // width="400"
                  // height="300"

                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="mt-32 max-sm:mt-16 max-md:mt-32   flex flex-col gap-16">
              <div className="flex justify-around max-md:flex-col max-md:gap-4 max-md:items-center max-md:justify-center">
                <Link target="_blank" to="https://www.google.com/maps/place/Monal+Dining/@-27.450835,153.046832,8z/data=!4m6!3m5!1s0x6b91592183311737:0x6782f30fea0f8ac0!8m2!3d-27.450835!4d153.0468315!16s%2Fg%2F11vhtbxxh1?hl=en&entry=ttu">
                <div className="flex flex-col gap-2 items-center">
                  <div className="">
                    <Icon
                      icon="carbon:map"
                      color="white"
                      width={45}
                      className="p-2  rounded-full bg-[#cdae32]"
                    />
                  </div>
                  <div>48 Skyring Terrace, </div>
                  <div>Newstead QLD 4006, Australia</div>
                </div>
                      </Link>
                <div className="flex flex-col gap-2 items-center">
                  <div>
                    <Icon
                      icon="solar:phone-linear"
                      color="white"
                      width={45}
                      className="p-2  rounded-full bg-[#cdae32]"
                      onClick={handleContactClick}
                    />
                  </div>
                  <div className="font-poppins font-light">+61435882342</div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div>
                    <Icon
                      icon="fe:mail"
                      color="white"
                      width={45}
                      className="p-2  rounded-full bg-[#cdae32]"
                      onClick={handleMailClick}
                    />
                  </div>
                  <div>info@monaldining.com.au</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
