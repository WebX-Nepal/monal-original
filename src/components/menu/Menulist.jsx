

export default function Menulist({ title, lists }) {
  return (
    <div className="flex flex-col mb-16 ">
      <h2 className="font-Cormorant  text-center font-semibold text-5xl ">{title}</h2>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 mt-8">
        {lists.map((menulist) => {
          return (
            <div key={menulist.subtittle} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-poppins text-2xl">{menulist.subtittle}</h3>
                <span className="font-poppins text-xl">$ {menulist.price}</span>
              </div>
              <p className="font-poppins">{menulist.aboutFood}</p>
              <hr className="border border-black/30" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
