import { Icon } from "@iconify/react";
import chef from "./chef.png";
export default function Passion() {
  return (
    <section className="h-[100vh] text-white bg-black flex relative">
      <div className="w-[49%] p-24 flex flex-col gap-12">
        <div className="text-7xl font-thin leading-tight">
          <p className="mt-8 font-Cormorant ">Monal Dining</p>
        </div>
        <p>
          Since 2008, we have been committed to providing all of our guests with
          an unforgettable dining experience. The oldest vaulted cellar in the
          canton of Aargau gives our restaurant a very special atmosphere and we
          attach great importance to excellent service and the excellent quality
          of the food and drinks.{" "}
        </p>
          <div className=" flex gap-4 items-center">
            <div className="border-[1px] rounded-full p-4 border-[#9D8730] hover:bg-[#9D8730] ">
              <Icon icon="ph:arrow-right-thin" width={29} color="white" />
            </div>
            <p>Learn More</p>
          </div>
      </div>
      <div className="w-[50%] h-[90%] mt-16">
        <img
          src={chef}
          alt="chef"
          className="grayscale hover:grayscale-0 transition-all duration-1000 hover:ease-in-out"
        />
      </div>
      <div className="w-[25%]  h-[40%]  absolute bottom-0 left-[43%] ">
        {/* <img src={rose} alt="rose" className="rounded-full" /> */}
      </div>
    </section>
  );
}
