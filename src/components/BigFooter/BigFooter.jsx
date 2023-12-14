import "./bigfooter.css";
import logo from "../../../public/monalWhite.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function BigFooter() {
  return (
    <section className="h-[auto] glassBack  ">
      <div className="h-[100%] pb-20 bg-black/60">
        <div className="">.</div>
        <div className="mt-4  flex flex-col items-center justify-center gap-12  text-white text-xl">
          <img src={logo} alt="lgog" width={400} />

          <div className="flex flex-col items-center">
            <p>062 791 31 51</p>
            <p>monaldining@email</p>
            <p>Landhausstrasse 17, 4663 Aarburg</p>
          </div>
          <p className=" font-thin font-Cormorant text-3xl ">OPENING HOURS</p>
          <div className="flex flex-col items-center">
            <p className="text-2xl -mt-8 text-[#dfc149]">Monday - Saturday</p>
            {/* <p>
              Tuesday - Friday : <span className="text-[#9D8730]">11:00 </span>
              a.m. - <span className="text-[#9D8730]">2:00 </span>p.m.,{" "}
              <span className="text-[#9D8730]">5:30 </span>p.m. -{" "}
              <span className="text-[#9D8730]">11:30 </span>p.m.
            </p>
            <p>
              Saturday : <span className="text-[#9D8730]">5:30 </span>p.m. -
              <span className="text-[#9D8730]">11:30 </span>p.m.
            </p>
            <p>
              Sunday : <span className="text-[#9D8730]">11:00 </span>a.m. -{" "}
              <span className="text-[#9D8730]">2:00 </span>p.m.,{" "}
              <span className="text-[#9D8730]">5:30 </span>p.m., -{" "}
              <span className="text-[#9D8730]">10:00 </span>p.m
            </p> */}
          </div>

          {/* <div className="text-center leading-tight w-[55%]  ">
            <p className="text-7xl   font-Cormorant">
              WE ARE LOOKING FORWARD TO YOUR VISIT!
            </p>
          </div> */}
          <hr className="w-[50%] border-[#9D8730] border-[px] rounded-md" />

          <Link to={"/contactus"} onClick={()=>window.scrollTo(0,0)}>
            <div>
              <div className="flex  gap-4 items-center relative    ">
                <div className="border-[1px] rounded-full p-4 border-[#9D8730] hover:bg-[#9D8730] ">
                  <Icon icon="ph:arrow-right-thin" width={29} color="white" />
                </div>
                <div className=" text-sm  bg-transparent uppercase">
                  Contact Now
                </div>
              </div>
            </div>
          </Link>

          <div>
            <ul className="flex gap-4 text-sm uppercase">
              <li>HOME </li>
              <li>|</li>
              <li>Menu </li>
              <li>|</li>
              <li>Contact Us </li>
              <li>|</li>
              <li>Book Now </li>
            </ul>
          </div>
          <div className="copyright_details flex gap-8">
            <h1 className="text-xs font-semibold uppercase tracking-wider">
              &copy;Copyright Monal Dining
            </h1>
            <a
              href="https://webxnep.com"
              className=" text-white hover:text-[#9D8730] text-xs font-semibold uppercase tracking-wider"
            >
              Designed by webx
            </a>
          </div>
          <div className="social_icons flex gap-4 ">
            <Icon icon="ri:facebook-fill" className="hover:text-[#9D8730]" />
            <Icon icon="ri:instagram-fill" className="hover:text-[#9D8730]" />
          </div>
        </div>
      </div>
    </section>
  );
}
