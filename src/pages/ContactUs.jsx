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
          <div className="px-64 py-32   ">
            <h2 className="font-Cormorant text-5xl mt-6 ">Contact Us:</h2>
            <h3 className="font-poppins text-lg w-[60vw] text-slate-200 mt-4">
              Are you a food lover? If your answer is yes, then in restaurant
              for you, We serve foods for reasonable prices. It's awesome, we
              know,
            </h3>

            <div className="flex  gap-12 mt-4">
              <div className="w-[50%]">
                <form className="flex flex-col  w-[65%]  gap-8 mt-4">
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
                  <button className="px-5 py-2 border border-[#9D8831] rounded-3xl  w-[40%] hover:text-[#9D8831] hover:border-white hover:scale-105 hover:transition-all duration-500 transition-all hover:duration-1000">
                    {" "}
                    <span className="">Send Now</span>
                  </button>
                </form>
              </div>
              <div className="h-80    w-[50%] ">
                <iframe
                  width="500"
                  className="rounded-lg"
                  height="350"
                  scrolling="no"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Syd%20+(Monal%20Dining)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>{" "}
                <a href="https://www.acadoo.de/">Ghostwriter Dissertation</a>{" "}
                <script
                  type="text/javascript"
                  src="https://embedmaps.com/google-maps-authorization/script.js?id=03d0cddfffa0d5efe97feebd13a562f8244f9760"
                ></script>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-16">
              <h3 className="text-5xl font-Cormorant ">Contact Details:</h3>
              <div className="flex justify-around ">
                <div className="flex flex-col gap-2">
                  <div className="">
                    <Icon
                      icon="carbon:map"
                      color="black"
                      width={45}
                      className="p-2  rounded-full bg-[#9D8831]"
                    />
                  </div>
                  <div>View Street ,AUS</div>
                  <div>AUS</div>
                </div>
                <div className="flex flex-col gap-2">
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
                <div className="flex flex-col gap-2">
                  <div>
                    <Icon
                      icon="fe:mail"
                      color="black"
                      width={45}
                      className="p-2  rounded-full bg-[#9D8831]"
                    />
                  </div>
                  <div>monal@dining.com</div>
                  <div>monal@dining.com</div>
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
