import { useState } from "react";
import { motion } from "framer-motion";
import Menulist from "./Menulist";
import Food from "./Food";
import Drinks from "./Drinks";
import Navbar from "../navbar/Navbar";
import BigFooter from "../BigFooter/BigFooter";
const Menu = () => {
  const [food, setFood] = useState(true);
  const [move, setMove] = useState(0);
  return (
    <>
      <div>
        <div className="relative h-[33vh] bg-[url('./src/components/menu/food.jpg')] object-contain bg-cover bg-fixed   ">
          <div className="">
            <Navbar />
          </div>
          <div className="bg-black/30 w-full h-full flex items-center justify-center">
            <h3 className="text-white text-6xl font-Cormorant font-bold">
              Our Menu
            </h3>
          </div>
        </div>

        <div className="bg-[#F0EED3]  bg-contain">
          {/* <div className="bg-[url('./src/components/menu/marble.jpg')]  bg-contain"> */}
          <div className="h-[10vh] bg-yellow-100 bg-opacity-50   flex items-center justify-center">
            <div className="mt-8">
              <div className="w-[210px]">
                <div className=" text-white  w-full h-12   bg-black rounded-3xl flex items-center justify-around relative ">
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: move }}
                    exit={{ x: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "anticipate",
                    }}
                    className="absolute bg-yellow-600 px-10  py-4 rounded-3xl left-[0.8rem]"
                  ></motion.div>
                  <div
                    onClick={() => {
                      setMove(0), setFood(true);
                    }}
                    className={`font-poppins  cursor-pointer px-3 z-10 `}
                  >
                    Foods
                  </div>
                  <div
                    onClick={() => {
                      setMove(105), setFood(false);
                    }}
                    className={`px-3 font-poppins cursor-pointer z-10`}
                  >
                    Drinks
                  </div>
                </div>
              </div>
            </div>
          </div>
          {food && <Food food={food} />}
          {!food && <Drinks />}
        </div>
        <BigFooter />
      </div>
    </>
  );
};

export default Menu;
