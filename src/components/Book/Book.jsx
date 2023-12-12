import book from "../Book/book.png";
import "./book.css";

export default function Book() {
  return (
    <section className=" h-[60vh]">
      <div
        className={`p-8 flex flex-col justify-center items-center gap-8 back1 text-white `}
      >
        <p className="text-4xl font-thin ">Book a table</p>
        <div className="w-[50vw]">
          {" "}
          <p className="font-semibold text-center text-slate-200 leading-5 font-sans ">
            Giving a gentle nod to Sichuan flavours and authentic Cantonese
            cuisine,Monal Dining unites a respected team of industry leaders
            from both international and interstate origins. Modern Chinese is
            the goal here, having sourced the very best local ingredients to
            create inspired dishes that educate & excite, with a wine & cocktail
            list that follows suit. Dining that ignites all the senses.
          </p>
        </div>

        <button className="border-2 border-[#9D8730] cursor-pointer px-6 py-2 rounded-3xl hover:border-2 hover:border-white hover:text-[#9D8730] ">
          Reservation
        </button>
      </div>
    </section>
  );
}
