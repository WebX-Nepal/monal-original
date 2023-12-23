import Navbar from "../components/navbar/Navbar";
import BigFooter from "../components/BigFooter/BigFooter";
import { Footer } from "antd/es/layout/layout";
import { Icon } from "@iconify/react";
export default function ContactUs() {
  return (
    <>
      <main className="bg-black text-white ">
        <div className="">
          <Navbar />
        </div>

        <div className="">
          <div className="px-64 py-32    max-lg:px-16">
            <h2 className="font-Cormorant text-5xl mt-6 max-md:text-4xl ">
              Contact Us:
            </h2>
            <h3 className="font-poppins text-lg lg:w-[60vw] max-sm:text-base text-slate-200 mt-4 ">
              Are you a food lover? If your answer is yes, then in restaurant
              for you, We serve foods for reasonable prices. It's awesome, we
              know,
            </h3>

            <div className="flex  max-lg:flex-col gap-12 mt-4">
              <div className="lg:w-[50%] ">
                <form className="flex flex-col  lg:w-[65%]  gap-8 mt-4">
                  <div className="flex flex-col">
                    <label htmlFor="">Your full name</label>
                    <input
                      type="text"
                      className="bg-transparent outline-none border-b "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="">Your email address</label>
                    <input
                      type="text"
                      className="bg-transparent outline-none border-b "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="">Your phone number </label>
                    <input
                      type="text"
                      className="bg-transparent outline-none border-b "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Message here </label>
                    <textarea className="h-16  bg-transparent outline-none border-b" />
                  </div>
                  <button className="px-5 py-2 whitespace-nowrap border border-[#9D8831] rounded-3xl      hover:text-[#9D8831] hover:border-white hover:scale-105 hover:transition-all duration-500 transition-all hover:duration-1000">
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
                  className="w-[450px] h-[400px] max-md:w-[300px] max-md:h-[250px] rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759403.3494409767!2d153.0524724869419!3d-27.85016005539279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91592183311737%3A0x6782f30fea0f8ac0!2sMonal%20Dining!5e0!3m2!1sen!2snp!4v1703319958615!5m2!1sen!2snp"
                  // width="400"
                  // height="300"
                  
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
               
              </div>
            </div>

            <div className="mt-16 max-md:mt-32   flex flex-col gap-16">
              <h3 className="text-5xl font-Cormorant max-md:text-3xl">
                Contact Details:
              </h3>
              <div className="flex justify-around max-md:flex-col max-md:gap-4 max-md:items-center max-md:justify-center">
                <div className="flex flex-col gap-2 items-center">
                  <div className="">
                    <Icon
                      icon="carbon:map"
                      color="black"
                      width={45}
                      className="p-2  rounded-full bg-[#9D8831]"
                    />
                  </div>
                  <div>48 Skyring Terrace, </div>
                  <div>Newstead QLD 4006, Australia</div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div>
                    <Icon
                      icon="solar:phone-linear"
                      color="black"
                      width={45}
                      className="p-2  rounded-full bg-[#9D8831]"
                    />
                  </div>
                  <div>+0212345678</div>
                  <div>+0212345678</div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div>
                    <Icon
                      icon="fe:mail"
                      color="black"
                      width={45}
                      className="p-2  rounded-full bg-[#9D8831]"
                    />
                  </div>
                  <div>info@monaldining.com.au</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BigFooter />
    </>
  );
}
