import Menulist from "./Menulist";

const titles = "Noodle";
const menulists = [
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

const snacksList = [
  {
    subtittle: "Appelation oysters (natural/jelly)",
    price: "5.5",
  },
  {
    subtittle: "Dannys sourdough , Kombu butter",
    price: "6",
  },
  {
    subtittle: "Scallops, Apple, Green chilli, Cod’s roe",
    price: "9",
  },
  {
    subtittle: " Tuna tartare, Potato, Bottarga",
    price: "8",
  },
  {
    subtittle: "Pork skewers, Kimchi, Pear",
    price: "8",
  },
  {
    subtittle: "Tempura mushroom, Garlic cream, Shallots",
    price: "14",
  },
];

const smallPlatesList = [
  {
    subtittle: "Pulled lamb, Fried pastries, Chilli mayo",
    price: "17",
  },
  {
    subtittle: "Beef tartare, House sriracha , Sourdough crisp",
    price: "24",
  },
  {
    subtittle: "Ocean Trout, Pickled chilli, Sesame dressing",
    price: "24",
  },
  {
    subtittle: "Pork dumplings, Perilla seeds sauce, Chilli oil ",
    price: "20",
  },
  {
    subtittle: "Stuffed calamari, Nduja, Pickled fennel",
    price: "26",
  },
];

const mainsList = [
  {
    subtittle:"Spice rubbed whole char grilled chicken, Curry sauce",
    price:"40"
  },
  {
    subtittle:"Braised lamb shoulder, Jus",
    price:"45"
  },
  {
    subtittle:"Grilled Barramundi , Spring onion and ginger relish, Smoked broth",
    price:"42"
  },
  {
    subtittle:"Crispy Pork Belly , Plum Hoisin",
    price:"40"
  },
  
]

const sidesList = [
  {
    subtittle:"Grilled cabbage, Cashew, Vinaigrette",
    price:"15"
  },
  {
    subtittle:"Charred Edamane, Corn, Iceberg, Parmesan dressing",
    price:"16"
  },
  {
    subtittle:"Fried kipfler potato, House seasoning",
    price:"14"
  },
  
]

const dessertsList = [
  {
    subtittle:"Cherries, Yogurt , White chocolate",
    price:"16"
  },
]
export default function Food({ food }) {
  return (
    <>
      <div className="  ">
        <div className="bg-yellow-100 bg-opacity-50 py-16 px-32  max-sm:p-8 ">
          {/* <Menulist title={titles} lists={menulists} />
          <Menulist title={"Thupa"} lists={menulists} /> */}
          <Menulist food={food} title={"SNACKS"} lists={snacksList} />
          <Menulist
            food={food}
            title={"SMALL PLATES "}
            lists={smallPlatesList}
          />
          <Menulist
            food={food}
            title={"MAINS "}
            lists={mainsList}
          />
          <Menulist
            food={food}
            title={"SIDES "}
            lists={sidesList}
          />
          <Menulist
            food={food}
            title={"DESSERTS "}
            lists={dessertsList}
          />
        </div>
      </div>
    </>
  );
}
