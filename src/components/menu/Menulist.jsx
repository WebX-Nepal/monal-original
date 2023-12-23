

export default function Menulist({ title, lists ,food}) {
  return (
    <div className="flex flex-col mb-16">
      <h2 className="font-Cormorant  text-center font-semibold text-5xl max-sm:text-3xl">{title}</h2>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-16 gap-y-8 mt-8">
        {lists.map((menulist) => {
          return (
            <div key={menulist.subtittle} className="flex flex-col ">
              <div className="flex items-center justify-between">
                <h3 className="font-poppins text-2xl max-md:text-lg">{menulist.subtittle}</h3>
                <span className="font-poppins text-xl whitespace-nowrap ml-2">$ {menulist.price}</span>
              </div>
                <span className={`font-semibold ${food?'hidden':'block'}`}>{menulist.date}</span>
              <p className="font-poppins">{menulist.aboutFood}</p>
              <hr className="border border-black/30" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
