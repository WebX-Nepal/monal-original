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
          <img src={logo} alt="lgog" width={400} className="max-sm:w-" />

          <div className="flex flex-col items-center">
            <p>062 791 31 51</p>
            <p> info@monaldining.com.au</p>
            <p>
              <a
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Monal+Dining/@-27.8501601,153.0524725,9.25z/data=!4m6!3m5!1s0x6b91592183311737:0x6782f30fea0f8ac0!8m2!3d-27.450835!4d153.0468315!16s%2Fg%2F11vhtbxxh1?hl=en-NP&entry=ttu"
                target="_black"
              >
                48 Skyring Terrace, Newstead QLD 4006, Australia
              </a>
            </p>
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

          <Link to={"/contactus"} onClick={() => window.scrollTo(0, 0)}>
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
              <Link to={"/"} onClick={()=>screenTop(0,0)}>
                <li>HOME </li>
              </Link>
              <li>|</li>
              <Link to={"/menu"} onClick={()=>screenTop(0,0)}>
                <li>Menu </li>
              </Link>

              <li>|</li>
              <Link to={"/contactus"} onClick={()=>screenTop(0,0)}>
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
