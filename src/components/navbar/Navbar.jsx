import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/monalLogo.png";
import { useState } from "react";
import { Icon } from "@iconify/react";
export default function Navbar() {
  const activeLink = " text-[#9D8730] font-bold";
  const normalLink = "";
  const [smallNav, setSmallNav] = useState(false);

  return (
    <div className="" style={{}}>
      <div className=" absolute w-full  text-slate-50 py-6 z-30 flex  bg-[#ewd] items-center justify-between px-20 max-sm:px-8">
        <div className="max-sm:w-32">
          <img src={Logo} alt="Logo MONAL" width={250} className="" />
        </div>

        <div
          className="lg:hidden cursor-pointer"
          onClick={() => {
            setSmallNav(true);
          }}
        >
          <Icon width={30} color="black" icon={`${!smallNav?"ci:hamburger-lg":"akar-icons:cross"}`} />
        </div>
        {smallNav && (
          <div className="fixed left-0 top-0 h-[100vh]  w-full  ">
            <div
              onClick={() => setSmallNav(false)}
              className="flex h-[60%]   justify-between items-center"
            >
              {/* <div className="max-sm:w-32">
                <img src={Logo} alt="Logo MONAL" width={200} className="" />
              </div> */}
              
            </div>
            <ul className="flex   pl-16   rounded-tl-full    bg-[#CA8A04] h-[40%] flex-col gap-4 justify-center items-center  ">
              {/* <div className="flex w-full  justify-around items-center">
                <div></div>
                <Icon
                  icon="akar-icons:cross"
                  width={22}
                  onClick={() => setSmallNav(false)}
                />
              </div> */}
              <Link to={"/"}>
                <li
                  className="cursor-pointer"
                  onClick={() => setSmallNav(false)}
                >
                  Home
                </li>
              </Link>
              <Link to={"/menu"}>
                <li
                  className="cursor-pointer"
                  onClick={() => setSmallNav(false)}
                >
                  {" "}
                  Menu
                </li>
              </Link>

              <Link to={"/contactus"}>
                <li
                  className="cursor-pointer"
                  onClick={() => setSmallNav(false)}
                >
                  Contact Us
                </li>
              </Link>
              <Link
                to="https://www.sevenrooms.com/reservations/monaldiningvenue"
                target="_black"
              >
                <li
                  className="cursor-pointer"
                  onClick={() => setSmallNav(false)}
                >
                  Book Now
                </li>
              </Link>
            </ul>{" "}
          </div>
        )}

        <ul className=" flex gap-10 justify-center items-center text-md text-black max-lg:hidden ">
          <div className="flex justify-between items-center gap-10">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <li> Home</li>
            </NavLink>

            <li>
              <NavLink
                to={"/menu"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {" "}
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contactUs"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contact Us
              </NavLink>
            </li>
          </div>
          <div className="flex gap-10 items-center">
            <li>
              <NavLink
                to="https://www.sevenrooms.com/reservations/monaldiningvenue"
                target="_black"
              >
                <button className="border-2 border-[#9D8730] cursor-pointer px-5 py-2 rounded-3xl hover:border-2 hover:border-white hover:text-[#9D8730] ">
                  {" "}
                  Book Now
                </button>{" "}
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
