import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../public/monalLogo.png";
import ContactUs from "../../pages/ContactUs";
import { useState } from "react";
export default function Navbar() {
  
 
 
  const activeLink= ' text-[#9D8730] font-bold'
  const normalLink=''

  return (
    <div>
      <div className=" absolute w-full bg-transparent text-slate-50 py-6 z-30 flex justify-between px-20">
        <div>
          <img src={Logo} alt="Logo MONAL" width={250} />{" "}
        </div>
        <ul className=" flex gap-10 justify-center items-center text-md ">
          <div className="flex justify-between items-center gap-10">
            <NavLink to={"/"}  className={({isActive})=> isActive?activeLink:normalLink}>
              <li
                
              
              >
                {" "}
                Home
              </li>
            </NavLink>

            <li  
            >
              <NavLink to={"/menu"}  className={({isActive})=> isActive?activeLink:normalLink}>
                {" "}
                Menu
              </NavLink>
            </li>
            <li >
              <NavLink
                to={"/contactUs"}
                className={({isActive})=> isActive?activeLink:normalLink}
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
