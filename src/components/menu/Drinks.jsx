
import Menulist from "./Menulist";
const titles = "Drinks";
const menulists = [
  {
    subtittle: "Drinks Mo:Mo",
    price: "230",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Drinks",
    price: "330",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chickendddd Mo:Mo",
    price: "3330",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
  {
    subtittle: "Chicken Mo:Mo",
    price: "30",
    aboutFood:
      "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
  },
];

export default function Drinks() {
  return (
    <div className=" bg-[url('./src/components/menu/marble.jpg')] object-cover bg-cover  ">
        <div className="bg-yellow-100 bg-opacity-50 py-16 px-32  ">
          <Menulist title={titles} lists={menulists} />
       
        </div>
      </div>
  )
  
}
