import { useState } from "react";
import { motion } from "framer-motion";
import Menulist from "./Menulist";
import Food from "./Food";
import Drinks from "./Drinks";
const Menu = () => {
  const [food, setFood] = useState(true);
  const [move, setMove] = useState(0);
  return (
    <div>
      <div className="h-[20vh] bg-[url('./src/components/menu/food.jpg')] object-contain bg-fixed   ">
        <div className="bg-black/30 w-full h-full flex items-center justify-center">
          <h3 className="text-white text-6xl font-Cormorant font-bold">
            Our Menu
          </h3>
        </div>
      </div>

      <div className="bg-[url('./src/components/menu/marble.jpg')]  object-cover bg-contain">
        <div className="h-[10vh] bg-yellow-100 bg-opacity-50  flex items-center justify-center">
          <div className="">
            <div className="w-[220px]">
              <div
             
                className="cursor-pointer text-white  w-full h-12  border-2 border-black bg-black rounded-3xl flex items-center justify-around relative "
              >
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: move }}
                  exit={{ x: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "anticipate",
                  }}
                  className="absolute bg-yellow-600 px-10 py-4 rounded-3xl left-4"
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
      </div>
      {food && <Food />}
      {!food && <Drinks />}
    </div>
  );
};

export default Menu;
