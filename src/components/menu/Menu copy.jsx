import { useState } from "react";
import Food from "./Food-old"
import Drinks from "./Drinks";
export default function MenuC() {

  const [food,setFood]  = useState(true)
  
  return (
    <section className=" ">
      <div className="text-white p-4 bg-black">
        <ul className="flex items-center justify-evenly gap-20 text-[#9d8730] text-2xl">
          <li onClick={()=>setFood(true)} className="hover:cursor-pointer hover:text-white font-poppins transition-all duration-300 ">
            Food{" "}
          </li>
          <li onClick={()=>setFood(false)} className="hover:cursor-pointer hover:text-white  font-poppins transition-all duration-300">
            Drinks
          </li>
        </ul>
      </div>
      { food && <Food/>}
      { !food && <Drinks/>}
    </section>
  );
}
