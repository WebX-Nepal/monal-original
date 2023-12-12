export default function Menu() {
  return (
    <section className="bg-black ">
      <div className="text-white p-4">
        <ul className="flex items-center justify-evenly gap-20 text-[#9d8730] text-2xl">
          <li className="hover:cursor-pointer hover:text-white font-poppins transition-all duration-300 ">
            Food{" "}
          </li>
          <li className="hover:cursor-pointer hover:text-white  font-poppins transition-all duration-300">
            Drinks
          </li>
        </ul>
      </div>
    </section>
  );
}
