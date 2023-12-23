import book from "../Book/book.png";
import "./book.css";
import { Link } from "react-router-dom";
export default function Book() {
  return (
    <section className=" h-[60vh]">
      <div
        className={` max-sm:p-0 flex flex-col justify-center items-center gap-8 back1 text-white `}
      >
        <p className="text-4xl font-thin max-sm:text-2xl">Book a table</p>
        <div className=" max-md:w-[88%] md:w-[50vw]">
          {" "}
          <p className="font-semibold text-center  text-slate-200 leading-5 font-sans max-sm:text-xs max-sm:text-justify ">
            Giving a gentle nod to Sichuan flavours and authentic Cantonese
            cuisine,Monal Dining unites a respected team of industry leaders
            from both international and interstate origins. Modern Chinese is
            the goal here, having sourced the very best local ingredients to
            create inspired dishes that educate & excite, with a wine & cocktail
            list that follows suit. Dining that ignites all the senses.
          </p>
        </div>

        <Link  to="https://www.sevenrooms.com/reservations/monaldiningvenue" target="_black">
        <button className="border-2 border-[#9D8730] cursor-pointer px-6 py-2 rounded-3xl hover:border-2 hover:border-white hover:text-[#9D8730] ">
        
          Reservation
        </button>
        </Link>
      </div>
    </section>
  );
}
