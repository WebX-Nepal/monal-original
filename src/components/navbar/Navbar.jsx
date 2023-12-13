import { useNavigate } from "react-router-dom";
import Logo from "../../../public/monalLogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" absolute w-full bg-transparent text-slate-50 py-6 z-30 flex justify-between px-20">
        <div>
          <img src={Logo} alt="Logo MONAL" width={250} />{" "}
        </div>
        <ul className=" flex gap-10 justify-center items-center text-md ">
          <div className="flex justify-between items-center gap-10">
            <li className="hover:text-[#9D8730] cursor-pointer  " onClick={()=>navigate('/')}> Home</li>
            <li className="hover:text-[#9D8730] cursor-pointer  ">
              {" "}
              <a onClick={() => navigate("/menu")} className="">
                Menu
              </a>
            </li>
            <li>
              <a href="" className="">
                Contact Us
              </a>
            </li>
          </div>
          <div className="flex gap-10 items-center">
            <li>
              <button className="border-2 border-[#9D8730] cursor-pointer px-5 py-2 rounded-3xl hover:border-2 hover:border-white hover:text-[#9D8730] ">
                Book Now
              </button>{" "}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
