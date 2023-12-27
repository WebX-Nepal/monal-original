import book from "../Book/book.png";
import marble from "./marble.jpg";
import "./book.css";
import { Link } from "react-router-dom";
import maroo from "../../assets/maroo.png"
export default function Book() {
  return (
    <section
      className=" h-[50vh] font-semibold  bg-[#F7F4CB] bg-fixed"
      // style={{ backgroundImage: `url(${maroo})` }}
    >
      <div
        className={` max-sm:p-0 flex text-black h-full flex-col justify-center items-center gap-8   `}
      >
        <p className="text-4xl font-light max-sm:text-2xl ">Book a table</p>

        <Link
          to="https://www.sevenrooms.com/reservations/monaldiningvenue"
          target="_black"
        >
          <button className="border-2 border-[#9D8730] cursor-pointer px-6 py-2 rounded-3xl hover:border-2 hover:border-black duration-500 transition-all hover:scale-110  ">
            Reservation
          </button>
        </Link>
      </div>
    </section>
  );
}
